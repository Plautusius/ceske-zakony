/**
 * Skript pro kontrolu novych zakonu
 * Spousti se pres GitHub Actions 1x tydne
 *
 * Kontroluje:
 * - e-sbirka.cz (oficialni zdroj)
 * - zakonyprolidi.cz (alternativni zdroj)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Konfigurace
const CONFIG = {
    targetYear: 2026,
    dataFile: path.join(__dirname, '..', 'data', 'laws-data.js'),
    outputFile: path.join(__dirname, '..', 'new-laws-found.json'),
    sources: {
        zakonyprolidi: 'https://www.zakonyprolidi.cz/cs/nove-predpisy',
        esbirka: 'https://www.e-sbirka.cz/sb/casti/aktualni'
    }
};

// Hlavni funkce
async function main() {
    console.log('='.repeat(60));
    console.log('KONTROLA NOVYCH ZAKONU');
    console.log('='.repeat(60));
    console.log(`Datum: ${new Date().toLocaleDateString('cs-CZ')}`);
    console.log(`Hledam zakony s ucinnosti od: 1.1.${CONFIG.targetYear}\n`);

    try {
        // 1. Nacist aktualni databazi
        console.log('[1/4] Nacitam aktualni databazi...');
        const currentLaws = loadCurrentDatabase();
        console.log(`      Aktualne v databazi: ${currentLaws.length} novych zakonu\n`);

        // 2. Ziskat seznam novych zakonu z webu
        console.log('[2/4] Kontroluji zdroje...');
        const foundLaws = await fetchNewLaws();
        console.log(`      Nalezeno predpisu k analyze: ${foundLaws.length}\n`);

        // 3. Filtrovat - jen zakony co jeste nemame
        console.log('[3/4] Porovnavam s databazi...');
        const newLaws = filterNewLaws(foundLaws, currentLaws);
        console.log(`      Novych zakonu k pridani: ${newLaws.length}\n`);

        // 4. Ulozit vysledek
        console.log('[4/4] Ukladam vysledky...');
        saveResults(newLaws);

        // Vypis vysledku
        console.log('\n' + '='.repeat(60));
        if (newLaws.length > 0) {
            console.log(`NALEZENO ${newLaws.length} NOVYCH ZAKONU!`);
            console.log('='.repeat(60));
            newLaws.forEach((law, i) => {
                console.log(`\n${i + 1}. ${law.number} - ${law.title}`);
                console.log(`   Ucinnost: ${law.effective}`);
                console.log(`   Zdroj: ${law.sourceUrl}`);
            });

            // Exit code 1 = nalezeny nove zakony (pro GitHub Actions)
            process.exit(1);
        } else {
            console.log('ZADNE NOVE ZAKONY NENALEZENY');
            console.log('Databaze je aktualni.');
            console.log('='.repeat(60));
            process.exit(0);
        }

    } catch (error) {
        console.error('\nCHYBA:', error.message);
        process.exit(2);
    }
}

// Nacist aktualni databazi
function loadCurrentDatabase() {
    try {
        // Nacist JS soubor jako text a parsovat
        const content = fs.readFileSync(CONFIG.dataFile, 'utf8');

        // Extrahovat cisla zakonu z newLaws
        const numbers = [];
        const regex = /number:\s*["']([^"']+)["']/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            numbers.push(match[1]);
        }

        return numbers;
    } catch (error) {
        console.log('      Databaze neexistuje nebo je prazdna.');
        return [];
    }
}

// Ziskat nove zakony z webu
async function fetchNewLaws() {
    const laws = [];

    // Zkusit zakonyprolidi.cz
    try {
        console.log('      - Kontroluji zakonyprolidi.cz...');
        const zpLaws = await fetchFromZakonyProLidi();
        laws.push(...zpLaws);
    } catch (e) {
        console.log('        (nepodarilo se spojit)');
    }

    // Zkusit e-sbirka.cz
    try {
        console.log('      - Kontroluji e-sbirka.cz...');
        const esLaws = await fetchFromESbirka();
        laws.push(...esLaws);
    } catch (e) {
        console.log('        (nepodarilo se spojit)');
    }

    // Odstranit duplicity podle cisla zakona
    const unique = [];
    const seen = new Set();
    for (const law of laws) {
        if (!seen.has(law.number)) {
            seen.add(law.number);
            unique.push(law);
        }
    }

    return unique;
}

// Fetch z zakonyprolidi.cz
function fetchFromZakonyProLidi() {
    return new Promise((resolve, reject) => {
        const url = 'https://www.zakonyprolidi.cz/cs/sbirka?rocnik=' + CONFIG.targetYear;

        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; CeskeZakonyBot/1.0)'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const laws = parseZakonyProLidi(data);
                resolve(laws);
            });
        }).on('error', reject);
    });
}

// Parsovat HTML z zakonyprolidi.cz
function parseZakonyProLidi(html) {
    const laws = [];

    // Hledat vzor: cislo/rok a nazev
    // Format: <a href="/cs/2025-270">270/2025 Sb.</a> ... nazev
    const regex = /<a[^>]*href="\/cs\/(\d{4})-(\d+)"[^>]*>(\d+)\/(\d{4})\s*Sb\.<\/a>[\s\S]*?<td[^>]*>([^<]+)<\/td>/gi;

    let match;
    while ((match = regex.exec(html)) !== null) {
        const year = parseInt(match[1]);
        const number = match[3];
        const title = match[5].trim();

        if (year >= 2025) {  // Zakony z 2025 a novejsi
            laws.push({
                number: `${number}/${year}`,
                title: title,
                effective: `${CONFIG.targetYear}-01-01`,
                sourceUrl: `https://www.zakonyprolidi.cz/cs/${year}-${number}`,
                source: 'zakonyprolidi'
            });
        }
    }

    // Alternativni regex pro jiny format stranky
    if (laws.length === 0) {
        const altRegex = /(\d+)\/(\d{4})\s*Sb\.[^<]*?([^<]{10,100})/gi;
        while ((match = altRegex.exec(html)) !== null) {
            const number = match[1];
            const year = parseInt(match[2]);
            const title = match[3].trim().replace(/\s+/g, ' ');

            if (year >= 2025 && title.length > 5) {
                laws.push({
                    number: `${number}/${year}`,
                    title: title.substring(0, 100),
                    effective: `${CONFIG.targetYear}-01-01`,
                    sourceUrl: `https://www.zakonyprolidi.cz/cs/${year}-${number}`,
                    source: 'zakonyprolidi'
                });
            }
        }
    }

    return laws;
}

// Fetch z e-sbirka.cz
function fetchFromESbirka() {
    return new Promise((resolve, reject) => {
        // e-Sbirka ma REST API
        const url = 'https://www.e-sbirka.cz/sb/casti/aktualni';

        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; CeskeZakonyBot/1.0)',
                'Accept': 'text/html,application/xhtml+xml'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const laws = parseESbirka(data);
                resolve(laws);
            });
        }).on('error', reject);
    });
}

// Parsovat e-sbirka.cz
function parseESbirka(html) {
    const laws = [];

    // e-Sbirka format
    const regex = /(\d+)\/(\d{4})\s*Sb\./gi;

    let match;
    while ((match = regex.exec(html)) !== null) {
        const number = match[1];
        const year = parseInt(match[2]);

        if (year >= 2025) {
            laws.push({
                number: `${number}/${year}`,
                title: 'Zakon ' + number + '/' + year + ' Sb.',
                effective: `${CONFIG.targetYear}-01-01`,
                sourceUrl: `https://www.e-sbirka.cz/sb/${year}/${number}`,
                source: 'esbirka'
            });
        }
    }

    return laws;
}

// Filtrovat zakony, ktere uz mame
function filterNewLaws(found, current) {
    return found.filter(law => !current.includes(law.number));
}

// Ulozit vysledky
function saveResults(newLaws) {
    const result = {
        checkDate: new Date().toISOString(),
        foundCount: newLaws.length,
        laws: newLaws
    };

    fs.writeFileSync(CONFIG.outputFile, JSON.stringify(result, null, 2), 'utf8');
    console.log(`      Vysledky ulozeny do: ${CONFIG.outputFile}`);
}

// Spustit
main();

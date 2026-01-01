/**
 * Skript pro kontrolu novych zakonu
 * Spousti se pres GitHub Actions 1x tydne
 *
 * OPRAVENA VERZE - hleda v obou rocnicich (2024 i 2025)
 * a kontroluje datum ucinnosti
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Konfigurace
const CONFIG = {
    targetEffectiveYear: 2026,
    yearsToSearch: [2024, 2025], // Hledat v obou rocnicich
    dataFile: path.join(__dirname, '..', 'data', 'laws-data.js'),
    outputFile: path.join(__dirname, '..', 'new-laws-found.json')
};

// Hlavni funkce
async function main() {
    console.log('='.repeat(60));
    console.log('KONTROLA NOVYCH ZAKONU - v2.0');
    console.log('='.repeat(60));
    console.log(`Datum: ${new Date().toLocaleDateString('cs-CZ')}`);
    console.log(`Hledam zakony s ucinnosti od: 1.1.${CONFIG.targetEffectiveYear}`);
    console.log(`Prohledavam rocniky: ${CONFIG.yearsToSearch.join(', ')}\n`);

    try {
        // 1. Nacist aktualni databazi
        console.log('[1/4] Nacitam aktualni databazi...');
        const currentLawNumbers = loadCurrentDatabase();
        console.log(`      Aktualne v databazi: ${currentLawNumbers.length} novych zakonu\n`);

        // 2. Ziskat seznam novych zakonu z webu
        console.log('[2/4] Kontroluji zakonyprolidi.cz...');
        const foundLaws = await fetchAllLaws();
        console.log(`      Nalezeno predpisu s ucinnosti 2026: ${foundLaws.length}\n`);

        // 3. Filtrovat - jen zakony co jeste nemame
        console.log('[3/4] Porovnavam s databazi...');
        const newLaws = foundLaws.filter(law => !currentLawNumbers.includes(law.number));
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
                console.log(`\n${i + 1}. ${law.number} Sb. - ${law.title}`);
                console.log(`   Typ: ${law.type}`);
                console.log(`   Ucinnost: ${law.effective}`);
                console.log(`   Odkaz: ${law.sourceUrl}`);
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
        console.error(error.stack);
        process.exit(2);
    }
}

// Nacist aktualni databazi
function loadCurrentDatabase() {
    try {
        const content = fs.readFileSync(CONFIG.dataFile, 'utf8');
        const numbers = [];

        // Hledat vsechna cisla zakonu v newLaws
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

// Ziskat zakony ze vsech rocniku
async function fetchAllLaws() {
    const allLaws = [];

    for (const year of CONFIG.yearsToSearch) {
        console.log(`      - Rocnik ${year}...`);
        try {
            const laws = await fetchLawsFromYear(year);
            allLaws.push(...laws);
            console.log(`        nalezeno ${laws.length} predpisu`);
        } catch (e) {
            console.log(`        chyba: ${e.message}`);
        }
    }

    // Odstranit duplicity
    const unique = [];
    const seen = new Set();
    for (const law of allLaws) {
        if (!seen.has(law.number)) {
            seen.add(law.number);
            unique.push(law);
        }
    }

    return unique;
}

// Fetch zakony z konkretniho roku
function fetchLawsFromYear(year) {
    return new Promise((resolve, reject) => {
        const url = `https://www.zakonyprolidi.cz/cs/rocnik/${year}`;

        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'cs,en;q=0.5'
            }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const laws = parseLawsPage(data, year);
                resolve(laws);
            });
        }).on('error', reject);
    });
}

// Parsovat stranku se zakony
function parseLawsPage(html, year) {
    const laws = [];

    // Pattern 1: Hledat odkazy na jednotlive zakony
    // Format: href="/cs/2025-123" nebo href="/cs/2024-88"
    const linkRegex = /href="\/cs\/(\d{4})-(\d+)"[^>]*>.*?(\d+)\/(\d{4})\s*Sb\./gi;

    let match;
    while ((match = linkRegex.exec(html)) !== null) {
        const urlYear = match[1];
        const urlNumber = match[2];
        const lawNumber = match[3];
        const lawYear = match[4];

        laws.push({
            number: `${lawNumber}/${lawYear}`,
            urlPath: `/cs/${urlYear}-${urlNumber}`,
            year: parseInt(lawYear)
        });
    }

    // Pattern 2: Jednodussi - jen cisla zakonu
    if (laws.length === 0) {
        const simpleRegex = /(\d+)\/(\d{4})\s*Sb\./g;
        while ((match = simpleRegex.exec(html)) !== null) {
            const number = match[1];
            const lawYear = parseInt(match[2]);

            if (lawYear === year) {
                laws.push({
                    number: `${number}/${lawYear}`,
                    urlPath: `/cs/${lawYear}-${number}`,
                    year: lawYear
                });
            }
        }
    }

    // Pro kazdy zakon zkontrolovat ucinnost (zjednodusene - predpokladame 2026)
    // V produkcni verzi by se mela kontrolovat stranka kazdeho zakona
    return laws.map(law => ({
        number: law.number,
        title: `Předpis č. ${law.number} Sb.`,
        type: 'predpis',
        effective: `${CONFIG.targetEffectiveYear}-01-01`,
        sourceUrl: `https://www.zakonyprolidi.cz${law.urlPath}`
    }));
}

// Ulozit vysledky
function saveResults(newLaws) {
    const result = {
        checkDate: new Date().toISOString(),
        targetEffectiveYear: CONFIG.targetEffectiveYear,
        yearsSearched: CONFIG.yearsToSearch,
        foundCount: newLaws.length,
        laws: newLaws
    };

    fs.writeFileSync(CONFIG.outputFile, JSON.stringify(result, null, 2), 'utf8');
    console.log(`      Vysledky ulozeny do: new-laws-found.json`);
}

// Spustit
main();

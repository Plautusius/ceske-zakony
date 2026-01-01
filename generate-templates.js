const { Document, Packer, Paragraph, TextRun, AlignmentType } = require('docx');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'sablony-docx');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function createTitle(text) {
    return new Paragraph({
        children: [new TextRun({ text, bold: true, size: 32 })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 }
    });
}

function createSubtitle(text) {
    return new Paragraph({
        children: [new TextRun({ text, size: 22 })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 }
    });
}

function createHeading(text) {
    return new Paragraph({
        children: [new TextRun({ text, bold: true, size: 24 })],
        spacing: { before: 300, after: 200 }
    });
}

function createText(text, bold = false) {
    return new Paragraph({
        children: [new TextRun({ text, size: 22, bold })],
        spacing: { after: 120 }
    });
}

function createField(label, placeholder) {
    return new Paragraph({
        children: [
            new TextRun({ text: label, size: 22 }),
            new TextRun({ text: `[${placeholder}]`, color: "0066CC", bold: true, size: 22 })
        ],
        spacing: { after: 100 }
    });
}

function createSignature(left, right) {
    return [
        new Paragraph({
            children: [
                new TextRun({ text: "_".repeat(30), size: 22 }),
                new TextRun({ text: "          ", size: 22 }),
                new TextRun({ text: "_".repeat(30), size: 22 })
            ],
            spacing: { before: 600, after: 100 }
        }),
        new Paragraph({
            children: [
                new TextRun({ text: `        ${left}`, size: 20 }),
                new TextRun({ text: "                              ", size: 20 }),
                new TextRun({ text: right, size: 20 })
            ]
        })
    ];
}

function createDateLine() {
    return new Paragraph({
        children: [
            new TextRun({ text: "V ", size: 22 }),
            new TextRun({ text: "[MESTO]", color: "0066CC", bold: true, size: 22 }),
            new TextRun({ text: " dne ", size: 22 }),
            new TextRun({ text: "[DATUM]", color: "0066CC", bold: true, size: 22 })
        ],
        spacing: { before: 400 }
    });
}

async function saveDoc(doc, filename) {
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(path.join(outputDir, filename), buffer);
    console.log('OK ' + filename);
}

// ========== TEMPLATES ==========

async function createKupniSmlouva() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("KUPNI SMLOUVA"),
                createSubtitle("uzavrena dle par. 2079 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Prodavajici:"),
                createField("Jmeno/Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo/Adresa: ", "DOPLNTE"),
                createField("Bankovni spojeni: ", "DOPLNTE"),
                createText('(dale jen "Prodavajici")'),
                createText(""),
                createText("Kupujici:"),
                createField("Jmeno/Nazev: ", "DOPLNTE"),
                createField("ICO/RC: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createText('(dale jen "Kupujici")'),
                createHeading("II. PREDMET SMLOUVY"),
                createText("1. Prodavajici se touto smlouvou zavazuje odevzdat Kupujicimu nasledujici predmet koupe:"),
                createField("Popis predmetu: ", "PODROBNY POPIS VECI"),
                createField("Stav: ", "NOVY/POUZITY"),
                createText("2. Kupujici se zavazuje predmet koupe prevzit a zaplatit kupni cenu."),
                createHeading("III. KUPNI CENA"),
                createField("Kupni cena cini: ", "CASTKA"),
                createText(" Kc"),
                createField("(slovy: ", "CASTKA SLOVY"),
                createText(" korun ceskych)"),
                createText(""),
                createText("Kupni cena bude zaplacena:"),
                createText("[ ] v hotovosti pri podpisu teto smlouvy"),
                createText("[ ] prevodem na ucet prodavajiciho do _____ dnu od podpisu smlouvy"),
                createHeading("IV. PREDANI PREDMETU KOUPE"),
                createField("Predmet bude predan dne: ", "DATUM"),
                createField("na adrese: ", "MISTO PREDANI"),
                createText("O predani bude sepsan predavaci protokol."),
                createText("Vlastnicke pravo prechazi na Kupujiciho uplnym zaplacenim kupni ceny."),
                createHeading("V. PROHLASENI PRODAVAJICIHO"),
                createText("Prodavajici prohlasuje, ze:"),
                createText("a) je vylucnym vlastnikem predmetu koupe"),
                createText("b) na predmetu nevaznou prava tretich osob"),
                createText("c) predmet nema vady branici jeho uzivani"),
                createHeading("VI. ODPOVEDNOST ZA VADY"),
                createText("1. Prodavajici odpovida za vady existujici v okamziku predani."),
                createText("2. Skryte vady je nutne oznamit do 2 let od prevzeti."),
                createHeading("VII. ZAVERECNA USTANOVENI"),
                createText("1. Smlouva nabyva ucinnosti dnem podpisu obema stranami."),
                createText("2. Zmeny smlouvy jsou mozne pouze pisemnou formou."),
                createText("3. Smlouva je vyhotovena ve dvou stejnopisech."),
                createDateLine(),
                ...createSignature("Prodavajici", "Kupujici")
            ]
        }]
    });
    await saveDoc(doc, 'kupni-smlouva.docx');
}

async function createNajemniSmlouva() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("NAJEMNI SMLOUVA NA BYT"),
                createSubtitle("uzavrena dle par. 2235 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Pronajimatel:"),
                createField("Jmeno: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Trvale bydliste: ", "DOPLNTE"),
                createField("Cislo uctu: ", "DOPLNTE"),
                createText('(dale jen "Pronajimatel")'),
                createText(""),
                createText("Najemce:"),
                createField("Jmeno: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Trvale bydliste: ", "DOPLNTE"),
                createText('(dale jen "Najemce")'),
                createHeading("II. PREDMET NAJMU"),
                createField("Byt c. ", "CISLO"),
                createField(" na adrese: ", "ADRESA"),
                createField("Podlahova plocha: ", "PLOCHA"),
                createText(" m2"),
                createField("Pocet mistnosti: ", "POCET"),
                createHeading("III. DOBA NAJMU"),
                createText("[ ] Na dobu urcitou od __________ do __________"),
                createText("[ ] Na dobu neurcitou od __________"),
                createHeading("IV. NAJEMNE A SLUZBY"),
                createField("Mesicni najemne: ", "CASTKA"),
                createText(" Kc"),
                createField("Zalohy na sluzby: ", "CASTKA"),
                createText(" Kc"),
                createField("Celkem mesicne: ", "CASTKA"),
                createText(" Kc"),
                createField("Splatnost: do ", "DEN"),
                createText(". dne mesice"),
                createHeading("V. KAUCE"),
                createField("Jistota ve vysi: ", "CASTKA"),
                createText(" Kc"),
                createHeading("VI. PRAVA A POVINNOSTI"),
                createText("Najemce je povinen:"),
                createText("- uzivat byt radne a udrzovat ho"),
                createText("- hradit vcas najemne a zalohy"),
                createText("- neumoznit uzivani tretim osobam bez souhlasu"),
                createText("- provadet drobne opravy na sve naklady"),
                createHeading("VII. SKONCENI NAJMU"),
                createText("Vypovední doba cini 3 mesice."),
                createText("Najemce pri skonceni byt vyklidi a preda Pronajimateli."),
                createHeading("VIII. ZAVERECNA USTANOVENI"),
                createText("Smlouva je vyhotovena ve dvou stejnopisech."),
                createText("Prilohy: Predavaci protokol, Fotodokumentace"),
                createDateLine(),
                ...createSignature("Pronajimatel", "Najemce")
            ]
        }]
    });
    await saveDoc(doc, 'najemni-smlouva.docx');
}

async function createSmlouvaODilo() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("SMLOUVA O DILO"),
                createSubtitle("uzavrena dle par. 2586 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Zhotovitel:"),
                createField("Nazev/Jmeno: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createText('(dale jen "Zhotovitel")'),
                createText(""),
                createText("Objednatel:"),
                createField("Nazev/Jmeno: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createText('(dale jen "Objednatel")'),
                createHeading("II. PREDMET DILA"),
                createText("Zhotovitel se zavazuje provest pro Objednatele dilo:"),
                createField("", "PODROBNY POPIS DILA - CO BUDE ZHOTOVENO/PROVEDENO"),
                createHeading("III. CENA DILA"),
                createField("Cena bez DPH: ", "CASTKA"),
                createText(" Kc"),
                createField("DPH ", "SAZBA"),
                createText(" %: "),
                createField("", "CASTKA"),
                createText(" Kc"),
                createField("Celkem vcetne DPH: ", "CASTKA"),
                createText(" Kc", true),
                createHeading("IV. PLATEBNI PODMINKY"),
                createField("Zaloha: ", "CASTKA"),
                createText(" Kc splatna do "),
                createField("", "DATUM"),
                createField("Doplatek: ", "CASTKA"),
                createText(" Kc splatny do "),
                createField("", "DNI"),
                createText(" dni od predani dila"),
                createHeading("V. TERMIN PROVEDENI"),
                createField("Zahajeni praci: ", "DATUM"),
                createField("Dokonceni a predani dila nejpozdeji: ", "DATUM"),
                createField("Misto provedeni: ", "ADRESA"),
                createHeading("VI. PREDANI DILA"),
                createText("O predani dila bude sepsan predavaci protokol."),
                createText("Dilo se povazuje za predane podpisem protokolu obema stranami."),
                createHeading("VII. ZARUKA"),
                createField("Zarucni doba: ", "POCET"),
                createText(" mesicu od predani dila"),
                createHeading("VIII. SMLUVNI POKUTY"),
                createText("Za prodleni Zhotovitele: 0,05% z ceny dila za kazdy den"),
                createText("Za prodleni Objednatele s platbou: 0,05% z dluzne castky za kazdy den"),
                createHeading("IX. ZAVERECNA USTANOVENI"),
                createText("Smlouva je vyhotovena ve dvou stejnopisech."),
                createDateLine(),
                ...createSignature("Zhotovitel", "Objednatel")
            ]
        }]
    });
    await saveDoc(doc, 'smlouva-o-dilo.docx');
}

async function createPracovniSmlouva() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("PRACOVNI SMLOUVA"),
                createSubtitle("uzavrena dle par. 33 a nasl. zakona c. 262/2006 Sb., zakoniku prace"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Zamestnavatel:"),
                createField("Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createField("Zastoupeny: ", "DOPLNTE"),
                createText('(dale jen "Zamestnavatel")'),
                createText(""),
                createText("Zamestnanec:"),
                createField("Jmeno a prijmeni: ", "DOPLNTE"),
                createField("Datum narozeni: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Trvale bydliste: ", "DOPLNTE"),
                createText('(dale jen "Zamestnanec")'),
                createHeading("II. DRUH PRACE"),
                createField("Zamestnanec bude vykonavat praci na pozici: ", "NAZEV POZICE"),
                createHeading("III. MISTO VYKONU PRACE"),
                createField("Mistem vykonu prace je: ", "ADRESA"),
                createHeading("IV. DEN NASTUPU DO PRACE"),
                createField("Zamestnanec nastoupi do prace dne: ", "DATUM"),
                createHeading("V. DOBA TRVANI"),
                createText("Pracovni pomer se sjednava na dobu:"),
                createText("[ ] neurcitou"),
                createField("[ ] urcitou do ", "DATUM"),
                createHeading("VI. ZKUSEBNI DOBA"),
                createField("Zkusebni doba se sjednava v delce ", "POCET"),
                createText(" mesicu."),
                createHeading("VII. MZDA"),
                createField("Mesicni hruba mzda: ", "CASTKA"),
                createText(" Kc"),
                createField("Mzda je splatna k ", "DEN"),
                createText(". dni nasledujiciho mesice."),
                createField("Cislo uctu pro vyplatu: ", "CISLO UCTU"),
                createHeading("VIII. PRACOVNI DOBA"),
                createField("Tydenni pracovni doba: ", "POCET"),
                createText(" hodin"),
                createField("Rozvrzeni: ", "NAPR. PO-PA 8:00-16:30"),
                createHeading("IX. DOVOLENA"),
                createField("Narok na dovolenou: ", "POCET"),
                createText(" tydnu rocne"),
                createHeading("X. ZAVERECNA USTANOVENI"),
                createText("Zamestnanec byl seznamen s pracovnim radem, predpisy BOZP a pravy a povinnostmi."),
                createText("Smlouva je vyhotovena ve dvou stejnopisech."),
                createDateLine(),
                ...createSignature("Zamestnavatel", "Zamestnanec")
            ]
        }]
    });
    await saveDoc(doc, 'pracovni-smlouva.docx');
}

async function createVypoved() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("VYPOVED Z PRACOVNIHO POMERU"),
                createSubtitle("dle par. 50 zakona c. 262/2006 Sb., zakoniku prace"),
                createText(""),
                createText("Zamestnavatel:"),
                createField("", "NAZEV SPOLECNOSTI"),
                createField("", "ADRESA"),
                createText(""),
                createText("Vec: Vypoved z pracovniho pomeru", true),
                createText(""),
                createField("Ja, nize podepsany/a ", "JMENO A PRIJMENI"),
                createField(", narozen/a ", "DATUM NAROZENI"),
                createField(", bytem ", "ADRESA"),
                createText(","),
                createText(""),
                createField("timto davam vypoved z pracovniho pomeru zalozeneho pracovni smlouvou ze dne ", "DATUM UZAVRENI SMLOUVY"),
                createText(", a to z jakehokoli duvodu nebo bez udani duvodu."),
                createText(""),
                createText("Pracovni pomer skonci uplynutim zakonne vypovedni doby, ktera cini 2 mesice a pocina bezet prvnim dnem kalendarniho mesice nasledujiciho po doruceni teto vypovedi."),
                createText(""),
                createText("Zadam o:"),
                createText("- vystaveni potvrzeni o zamestnani (zapoctoveho listu)"),
                createText("- vyplaceni nevycerpane dovolene"),
                createText("- vyplaceni vsech dalsich mzdovych naroku"),
                createText(""),
                createDateLine(),
                createText(""),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(40), size: 22 })]
                }),
                createText("podpis zamestnance"),
                createText(""),
                createText("-----------------------------------------------------------"),
                createText(""),
                createField("Vypoved prevzal dne: ", ""),
                createText(""),
                createField("Jmeno a podpis prebirajiciho: ", "")
            ]
        }]
    });
    await saveDoc(doc, 'vypoved.docx');
}

async function createDPP() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("DOHODA O PROVEDENI PRACE"),
                createSubtitle("uzavrena dle par. 75 zakona c. 262/2006 Sb., zakoniku prace"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Zamestnavatel:"),
                createField("Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createText(""),
                createText("Zamestnanec:"),
                createField("Jmeno: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Bydliste: ", "DOPLNTE"),
                createHeading("II. PREDMET DOHODY"),
                createField("Pracovni ukol: ", "POPIS PRACE"),
                createHeading("III. ROZSAH PRACE"),
                createText("Prace bude provedena v rozsahu maximalne 300 hodin za kalendarni rok."),
                createField("Predpokladany rozsah: ", "POCET"),
                createText(" hodin"),
                createHeading("IV. DOBA TRVANI"),
                createField("Dohoda se uzavira na dobu od ", "DATUM"),
                createField(" do ", "DATUM"),
                createHeading("V. MISTO VYKONU"),
                createField("", "MISTO VYKONU PRACE"),
                createHeading("VI. ODMENA"),
                createField("Hodinova odmena: ", "CASTKA"),
                createText(" Kc"),
                createField("Odmena je splatna do ", "DNI"),
                createText(" dni od provedeni prace."),
                createField("Cislo uctu: ", "CISLO UCTU"),
                createHeading("VII. PROHLASENI"),
                createText("Zamestnanec prohlasuje, ze neprekroci limit 300 hodin u tohoto zamestnavatele v kalendarnim roce."),
                createDateLine(),
                ...createSignature("Zamestnavatel", "Zamestnanec")
            ]
        }]
    });
    await saveDoc(doc, 'dpp.docx');
}

async function createDPC() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("DOHODA O PRACOVNI CINNOSTI"),
                createSubtitle("uzavrena dle par. 76 zakona c. 262/2006 Sb., zakoniku prace"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Zamestnavatel:"),
                createField("Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createText(""),
                createText("Zamestnanec:"),
                createField("Jmeno: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Bydliste: ", "DOPLNTE"),
                createHeading("II. DRUH PRACE"),
                createField("Druh prace: ", "POPIS PRACE"),
                createHeading("III. ROZSAH PRACE"),
                createText("Rozsah prace nesmi prekrocit v prumeru polovinu stanovene tydenni pracovni doby (max. 20 hodin tydne)."),
                createField("Sjednany rozsah: ", "POCET"),
                createText(" hodin tydne"),
                createHeading("IV. DOBA TRVANI"),
                createField("Dohoda se uzavira na dobu od ", "DATUM"),
                createField(" do ", "DATUM"),
                createText("[ ] na dobu neurcitou"),
                createHeading("V. MISTO VYKONU"),
                createField("", "MISTO VYKONU PRACE"),
                createHeading("VI. ODMENA"),
                createField("Hodinova odmena: ", "CASTKA"),
                createText(" Kc"),
                createField("Splatnost: k ", "DEN"),
                createText(". dni nasledujiciho mesice"),
                createHeading("VII. VYPOVED"),
                createText("Dohodu lze zrusit dohodou nebo vypovedi s 15denni vypovedni dobou."),
                createDateLine(),
                ...createSignature("Zamestnavatel", "Zamestnanec")
            ]
        }]
    });
    await saveDoc(doc, 'dpc.docx');
}

async function createFakturaDPH() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("FAKTURA - DANOVY DOKLAD"),
                createText(""),
                createField("Cislo faktury: ", "CISLO"),
                createField("Datum vystaveni: ", "DATUM"),
                createField("Datum uskutecneni zdanitelneho plneni: ", "DATUM"),
                createField("Datum splatnosti: ", "DATUM"),
                createText(""),
                createHeading("DODAVATEL:"),
                createField("", "NAZEV FIRMY"),
                createField("", "ADRESA"),
                createField("", "PSC MESTO"),
                createField("ICO: ", "ICO"),
                createField("DIC: CZ", "DIC"),
                createText(""),
                createHeading("ODBERATEL:"),
                createField("", "NAZEV FIRMY"),
                createField("", "ADRESA"),
                createField("", "PSC MESTO"),
                createField("ICO: ", "ICO"),
                createField("DIC: CZ", "DIC"),
                createText(""),
                createHeading("PLATEBNI UDAJE:"),
                createField("Bankovni spojeni: ", "NAZEV BANKY"),
                createField("Cislo uctu: ", "CISLO UCTU"),
                createField("Variabilni symbol: ", "VS"),
                createText(""),
                createHeading("FAKTUROVANE POLOZKY:"),
                createText("-------------------------------------------------------------"),
                createText("Popis                           Mnozstvi    Cena/ks    Celkem"),
                createText("-------------------------------------------------------------"),
                createField("", "POLOZKA 1                       X           XXX        XXX"),
                createField("", "POLOZKA 2                       X           XXX        XXX"),
                createText("-------------------------------------------------------------"),
                createText(""),
                createField("Zaklad DPH 21%:                                      ", "CASTKA"),
                createText(" Kc"),
                createField("DPH 21%:                                             ", "CASTKA"),
                createText(" Kc"),
                createText("-------------------------------------------------------------"),
                createField("CELKEM K UHRADE:                                     ", "CASTKA"),
                createText(" Kc", true),
                createText(""),
                createField("Vystavil: ", "JMENO"),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(40), size: 22 })],
                    alignment: AlignmentType.RIGHT
                }),
                new Paragraph({
                    children: [new TextRun({ text: "razitko a podpis", size: 20 })],
                    alignment: AlignmentType.RIGHT
                })
            ]
        }]
    });
    await saveDoc(doc, 'faktura-dph.docx');
}

async function createFakturaBezDPH() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("FAKTURA"),
                createText(""),
                createField("Cislo faktury: ", "CISLO"),
                createField("Datum vystaveni: ", "DATUM"),
                createField("Datum splatnosti: ", "DATUM"),
                createText(""),
                createHeading("DODAVATEL:"),
                createField("", "JMENO A PRIJMENI"),
                createField("", "ADRESA"),
                createField("", "PSC MESTO"),
                createField("ICO: ", "ICO"),
                createText("Nejsem platce DPH.", true),
                createText(""),
                createHeading("ODBERATEL:"),
                createField("", "NAZEV / JMENO"),
                createField("", "ADRESA"),
                createField("", "PSC MESTO"),
                createField("ICO: ", "ICO"),
                createText(""),
                createHeading("PLATEBNI UDAJE:"),
                createField("Cislo uctu: ", "CISLO UCTU"),
                createField("Variabilni symbol: ", "VS"),
                createText(""),
                createHeading("FAKTUROVANE POLOZKY:"),
                createText("-------------------------------------------------------------"),
                createText("Popis                                      Mnozstvi    Cena"),
                createText("-------------------------------------------------------------"),
                createField("", "POLOZKA 1                                 X          XXX Kc"),
                createField("", "POLOZKA 2                                 X          XXX Kc"),
                createText("-------------------------------------------------------------"),
                createField("CELKEM K UHRADE:                                     ", "CASTKA"),
                createText(" Kc", true),
                createText(""),
                createField("Vystavil: ", "JMENO"),
                createField("          Dne: ", "DATUM"),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(30), size: 22 })],
                    alignment: AlignmentType.RIGHT
                }),
                new Paragraph({
                    children: [new TextRun({ text: "podpis", size: 20 })],
                    alignment: AlignmentType.RIGHT
                })
            ]
        }]
    });
    await saveDoc(doc, 'faktura-bez-dph.docx');
}

async function createNDA() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("SMLOUVA O ZACHOVANI DUVERNOSTI"),
                createSubtitle("(Non-Disclosure Agreement - NDA)"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Poskytovatel duvernych informaci:"),
                createField("Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createText('(dale jen "Poskytovatel")'),
                createText(""),
                createText("Prijemce duvernych informaci:"),
                createField("Nazev/Jmeno: ", "DOPLNTE"),
                createField("ICO/RC: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createText('(dale jen "Prijemce")'),
                createHeading("II. UCEL SMLOUVY"),
                createField("Strany uzaviraji tuto smlouvu za ucelem: ", "POPIS SPOLUPRACE"),
                createHeading("III. DUVERNE INFORMACE"),
                createText("Za duverne informace se povazuji zejmena:"),
                createText("- obchodni tajemstvi a know-how"),
                createText("- technicke a technologicke informace"),
                createText("- financni udaje a cenove kalkulace"),
                createText("- seznamy zakazniku a dodavatelu"),
                createText("- strategicke a obchodni plany"),
                createText("- veskere dalsi informace oznacene jako duverne"),
                createHeading("IV. POVINNOSTI PRIJEMCE"),
                createText("Prijemce se zavazuje:"),
                createText("1. zachovavat mlcenlivost o vsech duvernych informacich"),
                createText("2. pouzit duverne informace pouze pro sjednany ucel"),
                createText("3. neposkytovat duverne informace tretim osobam"),
                createText("4. prijmout primerena opatreni k ochrane informaci"),
                createText("5. na zadost vratit nebo znicit veskere duverne informace"),
                createHeading("V. VYJIMKY"),
                createText("Za duverne se nepovazuji informace, ktere:"),
                createText("- jsou nebo se stanou verejne dostupnymi"),
                createText("- Prijemce ziskal od treti strany opravnene"),
                createText("- musi byt sdeleny na zaklade pravniho predpisu"),
                createHeading("VI. DOBA TRVANI"),
                createField("Povinnost zachovavat mlcenlivost trva po dobu ", "POCET"),
                createText(" let od ukonceni spoluprace."),
                createHeading("VII. SMLUVNI POKUTA"),
                createField("Za poruseni povinnosti se sjednava smluvni pokuta ve vysi ", "CASTKA"),
                createText(" Kc."),
                createDateLine(),
                ...createSignature("Poskytovatel", "Prijemce")
            ]
        }]
    });
    await saveDoc(doc, 'nda.docx');
}

async function createZadostGDPR() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("ZADOST O VYMAZ OSOBNICH UDAJU"),
                createSubtitle("dle cl. 17 Narizeni (EU) 2016/679 (GDPR)"),
                createText(""),
                createHeading("ADRESAT (spravce osobnich udaju):"),
                createField("", "NAZEV SPOLECNOSTI"),
                createField("", "ADRESA"),
                createText(""),
                createHeading("ZADATEL (subjekt udaju):"),
                createField("Jmeno a prijmeni: ", "DOPLNTE"),
                createField("E-mail: ", "DOPLNTE"),
                createField("Telefon: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createText(""),
                createText("Vec: Zadost o vymaz osobnich udaju", true),
                createText(""),
                createText("Na zaklade clanku 17 Narizeni Evropskeho parlamentu a Rady (EU) 2016/679 (GDPR) zadam o vymaz vsech mych osobnich udaju, ktere o mne zpracovavate."),
                createText(""),
                createText("Tuto zadost oduvodnuji tim, ze:"),
                createText("[ ] osobni udaje jiz nejsou potrebne pro ucely, pro ktere byly shromazdeny"),
                createText("[ ] odvolavam souhlas se zpracovanim a neexistuje jiny pravni duvod"),
                createText("[ ] osobni udaje byly zpracovany protipravne"),
                createField("[ ] jiny duvod: ", "UPRESNETE"),
                createText(""),
                createText("Konkretne zadam o vymaz techto udaju:"),
                createField("", "SEZNAM UDAJU - E-MAIL, TELEFON, ZAKAZNICKY UCET, ATD."),
                createText(""),
                createText("Soucasne zadam o potvrzeni provedeni vymazu."),
                createText(""),
                createText("Beru na vedomi, ze mate povinnost odpovedbet na tuto zadost do jednoho mesice od jejiho obdrzeni."),
                createText(""),
                createDateLine(),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(40), size: 22 })]
                }),
                createText("podpis zadatele")
            ]
        }]
    });
    await saveDoc(doc, 'zadost-gdpr.docx');
}

async function createZadostInformace() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("ZADOST O POSKYTNUTI INFORMACE"),
                createSubtitle("dle zakona c. 106/1999 Sb., o svobodnem pristupu k informacim"),
                createText(""),
                createHeading("ADRESAT:"),
                createField("", "NAZEV URADU/INSTITUCE"),
                createField("", "ADRESA"),
                createText(""),
                createHeading("ZADATEL:"),
                createField("Jmeno a prijmeni: ", "DOPLNTE"),
                createField("Datum narozeni: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createField("E-mail: ", "DOPLNTE"),
                createField("Telefon: ", "DOPLNTE"),
                createText(""),
                createText("Vec: Zadost o poskytnuti informace", true),
                createText(""),
                createText("Na zaklade zakona c. 106/1999 Sb., o svobodnem pristupu k informacim, zadam o poskytnuti nasledujici informace:"),
                createText(""),
                createField("", "PRESNY POPIS POZADOVANE INFORMACE - BUDTE KONKRETNI"),
                createText(""),
                createText(""),
                createText("Informaci zadam poskytnout:"),
                createText("[ ] v elektronicke podobe na e-mail uvedeny vyse"),
                createText("[ ] v listinne podobe na adresu uvedenou vyse"),
                createText("[ ] k osobnimu vyzvednuti"),
                createText(""),
                createText("Jsem si vedom/a, ze lhuta pro vyrizeni zadosti je 15 dni ode dne prijeti zadosti, pripadne muze byt prodlouzena o dalsich 10 dni za podminek stanovenych zakonem."),
                createText(""),
                createDateLine(),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(40), size: 22 })]
                }),
                createText("podpis zadatele")
            ]
        }]
    });
    await saveDoc(doc, 'zadost-informace.docx');
}

async function createSmlouvaOSpolupraci() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("SMLOUVA O SPOLUPRACI"),
                createSubtitle("uzavrena dle par. 1746 odst. 2 zakona c. 89/2012 Sb., obcanskeho zakoniku"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Partner 1:"),
                createField("Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createField("Zastoupeny: ", "DOPLNTE"),
                createText(""),
                createText("Partner 2:"),
                createField("Nazev: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createField("Zastoupeny: ", "DOPLNTE"),
                createHeading("II. PREDMET SPOLUPRACE"),
                createField("Smluvni strany se dohodly na spolupraci v oblasti: ", "POPIS OBLASTI SPOLUPRACE"),
                createText(""),
                createText("Cilem spoluprace je:"),
                createField("", "KONKRETNI CILE SPOLUPRACE"),
                createHeading("III. PRAVA A POVINNOSTI STRAN"),
                createText("Partner 1 se zavazuje:"),
                createField("", "POVINNOSTI PARTNERA 1"),
                createText(""),
                createText("Partner 2 se zavazuje:"),
                createField("", "POVINNOSTI PARTNERA 2"),
                createHeading("IV. FINANCNI PODMINKY"),
                createField("", "POPIS FINANCNICH PODMINEK - ODMENY, DELENI NAKLADU, ATD."),
                createHeading("V. DOBA TRVANI"),
                createField("Smlouva se uzavira na dobu od ", "DATUM"),
                createField(" do ", "DATUM"),
                createText("[ ] na dobu neurcitou s vypovedni dobou _____ mesicu"),
                createHeading("VI. DUVERNOST"),
                createText("Smluvni strany se zavazuji zachovavat mlcenlivost o vsech skutecnostech, ktere se dozvedely v souvislosti s touto smlouvou."),
                createHeading("VII. ZAVERECNA USTANOVENI"),
                createText("Smlouva je vyhotovena ve dvou stejnopisech."),
                createDateLine(),
                ...createSignature("Partner 1", "Partner 2")
            ]
        }]
    });
    await saveDoc(doc, 'smlouva-o-spolupraci.docx');
}

async function createSmlouvaOPujcce() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("SMLOUVA O ZAPUJCCE"),
                createSubtitle("uzavrena dle par. 2390 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Zapujcitel:"),
                createField("Jmeno: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createField("Cislo uctu: ", "DOPLNTE"),
                createText('(dale jen "Zapujcitel")'),
                createText(""),
                createText("Vydluzitel:"),
                createField("Jmeno: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createText('(dale jen "Vydluzitel")'),
                createHeading("II. PREDMET SMLOUVY"),
                createField("Zapujcitel prenechava Vydluziteli penezni prostredky ve vysi ", "CASTKA"),
                createText(" Kc"),
                createField("(slovy: ", "CASTKA SLOVY"),
                createText(" korun ceskych)"),
                createHeading("III. PREDANI PENEZ"),
                createText("Penize budou predany:"),
                createText("[ ] v hotovosti pri podpisu teto smlouvy"),
                createField("[ ] prevodem na ucet c. ", "CISLO UCTU"),
                createField(" do ", "DNI"),
                createText(" dni od podpisu"),
                createHeading("IV. SPLATNOST"),
                createField("Vydluzitel se zavazuje vratit zapujcku nejpozdeji do ", "DATUM"),
                createText(""),
                createText("[ ] Jednorazove"),
                createField("[ ] Ve splatkach po ", "CASTKA"),
                createField(" Kc mesicne, splatnych k ", "DEN"),
                createText(". dni mesice"),
                createHeading("V. UROK"),
                createText("[ ] Zapujcka je bezurocna"),
                createField("[ ] Urok cini ", "PROCENTO"),
                createText(" % rocne"),
                createHeading("VI. PRODLENI"),
                createText("V pripade prodleni s vracenim zapujcky je Vydluzitel povinen zaplatit urok z prodleni ve vysi 0,05% z dluzne castky za kazdy den prodleni."),
                createHeading("VII. PROHLASENI VYDLUZITELE"),
                createText("Vydluzitel prohlasuje, ze si je plne vedom svych zavazku vyplyvajicich z teto smlouvy a ze je schopen zapujcku ve sjednanem terminu vratit."),
                createHeading("VIII. ZAVERECNA USTANOVENI"),
                createText("Smlouva je vyhotovena ve dvou stejnopisech."),
                createDateLine(),
                ...createSignature("Zapujcitel", "Vydluzitel")
            ]
        }]
    });
    await saveDoc(doc, 'smlouva-o-pujcce.docx');
}

async function createPrikazniSmlouva() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("PRIKAZNI SMLOUVA"),
                createSubtitle("uzavrena dle par. 2430 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku"),
                createHeading("I. SMLUVNI STRANY"),
                createText("Prikazce:"),
                createField("Nazev/Jmeno: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo/Adresa: ", "DOPLNTE"),
                createText('(dale jen "Prikazce")'),
                createText(""),
                createText("Prikaznik:"),
                createField("Nazev/Jmeno: ", "DOPLNTE"),
                createField("ICO: ", "DOPLNTE"),
                createField("Sidlo/Adresa: ", "DOPLNTE"),
                createText('(dale jen "Prikaznik")'),
                createHeading("II. PREDMET SMLOUVY"),
                createText("Prikaznik se zavazuje pro Prikazce obstarat nasledujici zalezitost:"),
                createField("", "PODROBNY POPIS ZALEZITOSTI, KTEROU MA PRIKAZNIK OBSTARAT"),
                createHeading("III. POKYNY PRIKAZCE"),
                createText("Prikaznik je povinen ridit se pokyny Prikazce."),
                createText("Od pokynu se muze odchylit pouze v nezbytnych pripadech a je povinen o tom Prikazce neprodlene informovat."),
                createHeading("IV. ODMENA"),
                createField("Za obstarani zalezitosti nalezi Prikaznikovi odmena ve vysi ", "CASTKA"),
                createText(" Kc."),
                createField("Odmena je splatna do ", "DNI"),
                createText(" dni od splneni prikazu."),
                createHeading("V. NAKLADY"),
                createText("Prikazce nahradi Prikaznikovi ucelne vynalozene naklady spojene s obstaranim zalezitosti."),
                createHeading("VI. DOBA PLNENI"),
                createField("Prikaznik se zavazuje zalezitost obstarat nejpozdeji do ", "DATUM"),
                createHeading("VII. ZAVERECNA USTANOVENI"),
                createText("Smlouva je vyhotovena ve dvou stejnopisech."),
                createDateLine(),
                ...createSignature("Prikazce", "Prikaznik")
            ]
        }]
    });
    await saveDoc(doc, 'prikazni-smlouva.docx');
}

async function createZalohovaFaktura() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("ZALOHOVA FAKTURA (PROFORMA)"),
                createText(""),
                createField("Cislo: ", "CISLO"),
                createField("Datum vystaveni: ", "DATUM"),
                createField("Datum splatnosti: ", "DATUM"),
                createText(""),
                createText("TOTO NENI DANOVY DOKLAD", true),
                createText(""),
                createHeading("DODAVATEL:"),
                createField("", "NAZEV FIRMY"),
                createField("", "ADRESA"),
                createField("ICO: ", "ICO"),
                createField("DIC: ", "DIC"),
                createText(""),
                createHeading("ODBERATEL:"),
                createField("", "NAZEV / JMENO"),
                createField("", "ADRESA"),
                createField("ICO: ", "ICO"),
                createText(""),
                createHeading("PLATEBNI UDAJE:"),
                createField("Cislo uctu: ", "CISLO UCTU"),
                createField("Variabilni symbol: ", "VS"),
                createText(""),
                createHeading("ZALOHA ZA:"),
                createField("", "POPIS ZBOZI/SLUZBY"),
                createText(""),
                createField("Vyse zalohy: ", "CASTKA"),
                createText(" Kc", true),
                createText(""),
                createText("Po prijeti zalohy Vam bude vystaven radny danovy doklad."),
                createText(""),
                createField("Vystavil: ", "JMENO")
            ]
        }]
    });
    await saveDoc(doc, 'zalohova-faktura.docx');
}

async function createDobropis() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("DOBROPIS"),
                createSubtitle("Opravny danovy doklad"),
                createText(""),
                createField("Cislo dobropisu: ", "CISLO"),
                createField("K fakture c.: ", "CISLO PUVODNI FAKTURY"),
                createField("Datum vystaveni: ", "DATUM"),
                createField("Datum uskutecneni opravy: ", "DATUM"),
                createText(""),
                createHeading("DODAVATEL:"),
                createField("", "NAZEV FIRMY"),
                createField("", "ADRESA"),
                createField("ICO: ", "ICO"),
                createField("DIC: CZ", "DIC"),
                createText(""),
                createHeading("ODBERATEL:"),
                createField("", "NAZEV FIRMY"),
                createField("", "ADRESA"),
                createField("ICO: ", "ICO"),
                createField("DIC: CZ", "DIC"),
                createText(""),
                createHeading("DUVOD OPRAVY:"),
                createField("", "POPIS DUVODU - VRACENI ZBOZI, SLEVA, CHYBA V PUVODNI FAKTURE"),
                createText(""),
                createHeading("OPRAVOVANE POLOZKY:"),
                createText("-------------------------------------------------------------"),
                createText("Popis                                          Castka"),
                createText("-------------------------------------------------------------"),
                createField("", "POLOZKA                              -XXX Kc"),
                createText("-------------------------------------------------------------"),
                createField("Zaklad DPH 21%:                               -", "CASTKA"),
                createText(" Kc"),
                createField("DPH 21%:                                      -", "CASTKA"),
                createText(" Kc"),
                createField("CELKEM K VRACENI:                             -", "CASTKA"),
                createText(" Kc", true),
                createText(""),
                createField("Vystavil: ", "JMENO")
            ]
        }]
    });
    await saveDoc(doc, 'dobropis.docx');
}

async function createZadostStavebni() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("ZADOST O STAVEBNI POVOLENI"),
                createSubtitle("dle zakona c. 183/2006 Sb., o uzemnim planovani a stavebnim radu"),
                createText(""),
                createHeading("ADRESAT:"),
                createField("Mestsky/Obecni urad ", "NAZEV OBCE"),
                createText("Odbor vystavby"),
                createField("", "ADRESA URADU"),
                createText(""),
                createHeading("ZADATEL:"),
                createField("Jmeno a prijmeni: ", "DOPLNTE"),
                createField("Datum narozeni: ", "DOPLNTE"),
                createField("Adresa: ", "DOPLNTE"),
                createField("Telefon: ", "DOPLNTE"),
                createField("E-mail: ", "DOPLNTE"),
                createText(""),
                createText("Vec: Zadost o vydani stavebniho povoleni", true),
                createText(""),
                createText("Na zaklade stavebniho zakona zadam o vydani stavebniho povoleni pro stavbu:"),
                createText(""),
                createField("Nazev stavby: ", "DOPLNTE"),
                createField("Misto stavby: ", "ADRESA NEBO PARCELA"),
                createField("Katastralni uzemi: ", "DOPLNTE"),
                createField("Parcelni cislo: ", "DOPLNTE"),
                createText(""),
                createHeading("STRUCNY POPIS STAVBY:"),
                createField("", "POPIS STAVBY - TYP, UCEL, ROZMERY"),
                createText(""),
                createField("Predpokladany termin zahajeni stavby: ", "DATUM"),
                createField("Predpokladany termin dokonceni stavby: ", "DATUM"),
                createText(""),
                createHeading("PRILOHY:"),
                createText("[ ] Projektova dokumentace ve 2 vyhotoveninich"),
                createText("[ ] Doklad o vlastnickem pravu k pozemku"),
                createText("[ ] Situacni vykresy"),
                createText("[ ] Stanoviska dotcenych organu"),
                createText("[ ] Souhlasy vlastniku sousednich pozemku"),
                createText("[ ] Plna moc (pokud je zadatel zastoupen)"),
                createText(""),
                createText("Prohlasuji, ze vsechny udaje uvedene v teto zadosti jsou pravdive."),
                createDateLine(),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(40), size: 22 })]
                }),
                createText("podpis zadatele")
            ]
        }]
    });
    await saveDoc(doc, 'zadost-stavebni.docx');
}

async function createZadostZivnost() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("OHLASENI ZIVNOSTI"),
                createSubtitle("dle zakona c. 455/1991 Sb., o zivnostenskem podnikani"),
                createText(""),
                createHeading("ADRESAT:"),
                createField("Zivnostensky urad ", "NAZEV OBCE"),
                createField("", "ADRESA"),
                createText(""),
                createHeading("I. UDAJE O FYZICKE OSOBE"),
                createField("Jmeno a prijmeni: ", "DOPLNTE"),
                createField("Rodne prijmeni: ", "DOPLNTE"),
                createField("Datum narozeni: ", "DOPLNTE"),
                createField("Misto narozeni: ", "DOPLNTE"),
                createField("Rodne cislo: ", "DOPLNTE"),
                createField("Statni obcanstvi: ", "DOPLNTE"),
                createText(""),
                createText("Adresa trvaleho pobytu:"),
                createField("Ulice: ", "DOPLNTE"),
                createField("Cislo popisne: ", "DOPLNTE"),
                createField("Obec: ", "DOPLNTE"),
                createField("PSC: ", "DOPLNTE"),
                createText(""),
                createHeading("II. UDAJE O ZIVNOSTI"),
                createField("Predmet podnikani: ", "DOPLNTE"),
                createText(""),
                createText("Druh zivnosti:"),
                createText("[ ] Volna"),
                createText("[ ] Remeslna"),
                createText("[ ] Vazana"),
                createText("[ ] Koncesovana"),
                createText(""),
                createField("Sidlo: ", "DOPLNTE"),
                createField("Provozovna: ", "ADRESA NEBO 'BEZ PROVOZOVNY'"),
                createText(""),
                createHeading("III. PRILOHY"),
                createText("[ ] Doklad o odborne zpusobilosti (u vazane zivnosti)"),
                createText("[ ] Doklad o praxi (u remeslne zivnosti)"),
                createText("[ ] Souhlas vlastnika nemovitosti s umistenim sidla"),
                createText("[ ] Doklad o zaplaceni spravniho poplatku 1000 Kc"),
                createText(""),
                createDateLine(),
                createText(""),
                new Paragraph({
                    children: [new TextRun({ text: "_".repeat(40), size: 22 })]
                }),
                createText("podpis zadatele")
            ]
        }]
    });
    await saveDoc(doc, 'zadost-zivnost.docx');
}

async function createObchodniPodminky() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("OBCHODNI PODMINKY"),
                createSubtitle("pro nakup zbozi prostrednictvim internetoveho obchodu"),
                createText(""),
                createHeading("I. ZAKLADNI USTANOVENI"),
                createField("Provozovatel e-shopu: ", "NAZEV FIRMY"),
                createField("ICO: ", "ICO"),
                createField("DIC: ", "DIC"),
                createField("Sidlo: ", "ADRESA"),
                createField("E-mail: ", "EMAIL"),
                createField("Telefon: ", "TELEFON"),
                createText(""),
                createText("Tyto obchodni podminky upravuji vzajemna prava a povinnosti prodavajiciho a kupujiciho pri prodeji zbozi prostrednictvim internetoveho obchodu."),
                createText(""),
                createHeading("II. OBJEDNAVKA A UZAVRENI SMLOUVY"),
                createText("1. Kupujici vybere zbozi, vlozi ho do kosiku a vyplni objednavkovy formular."),
                createText("2. Pred odeslanim objednavky ma kupujici moznost zkontrolovat a menit udaje."),
                createText("3. Objednavka odeslana kupujicim je zavaznym navrhem na uzavreni kupni smlouvy."),
                createText("4. Prodavajici potvrdi prijeti objednavky e-mailem."),
                createText("5. Kupni smlouva je uzavrena okamzikem potvrzeni objednavky."),
                createText(""),
                createHeading("III. CENY A PLATBY"),
                createText("1. Ceny zbozi jsou uvedeny vcetne DPH."),
                createText("2. Zpusoby platby:"),
                createText("   - platebni kartou online"),
                createText("   - bankovnim prevodem"),
                createText("   - dobirkou pri prevzeti"),
                createText(""),
                createHeading("IV. DODANI ZBOZI"),
                createField("1. Zbozi je dorucovano prostrednictvim: ", "NAZEV DOPRAVCE"),
                createField("2. Dodaci lhuta je ", "POCET"),
                createText(" pracovnich dnu."),
                createField("3. Dopravne cini: ", "CASTKA"),
                createText(" Kc"),
                createText(""),
                createHeading("V. ODSTOUPENI OD SMLOUVY"),
                createText("1. Spotrebitel ma pravo odstoupit od smlouvy do 14 dnu od prevzeti zbozi."),
                createText("2. Zbozi musi byt vraceno neposkozene, v puvodnim obalu."),
                createText("3. Penize budou vraceny do 14 dnu od obdrzeni vraceneho zbozi."),
                createText(""),
                createHeading("VI. ZARUKA A REKLAMACE"),
                createText("1. Zaruka na zbozi cini 24 mesicu."),
                createText("2. Reklamace bude vyrizena do 30 dnu."),
                createText(""),
                createHeading("VII. OCHRANA OSOBNICH UDAJU"),
                createText("Zpracovani osobnich udaju se ridi dokumentem Zasady ochrany osobnich udaju."),
                createText(""),
                createField("Tyto obchodni podminky jsou platne od: ", "DATUM")
            ]
        }]
    });
    await saveDoc(doc, 'obchodni-podminky.docx');
}

async function createGDPRPolicy() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("ZASADY OCHRANY OSOBNICH UDAJU"),
                createSubtitle("dle Narizeni (EU) 2016/679 (GDPR)"),
                createText(""),
                createHeading("I. SPRAVCE OSOBNICH UDAJU"),
                createField("Nazev: ", "NAZEV SPOLECNOSTI"),
                createField("ICO: ", "ICO"),
                createField("Sidlo: ", "ADRESA"),
                createField("E-mail: ", "EMAIL"),
                createText(""),
                createHeading("II. JAKE OSOBNI UDAJE SHROMAZDUJEME"),
                createText("Muzeme shromazdovat nasledujici kategorie osobnich udaju:"),
                createText("- Identifikacni udaje (jmeno, prijmeni, datum narozeni)"),
                createText("- Kontaktni udaje (adresa, telefon, e-mail)"),
                createText("- Fakturacni udaje (ICO, DIC, bankovni spojeni)"),
                createText("- Udaje o objednavkach a platbach"),
                createText("- Technicke udaje (IP adresa, cookies)"),
                createText(""),
                createHeading("III. UCELY ZPRACOVANI"),
                createText("Osobni udaje zpracovavame pro tyto ucely:"),
                createText("- Plneni smlouvy a dodani zbozi/sluzeb"),
                createText("- Komunikace se zakazniky"),
                createText("- Zasilani obchodnich sdeleni (se souhlasem)"),
                createText("- Plneni pravnich povinnosti"),
                createText("- Ochrana nasich opravnenych zajmu"),
                createText(""),
                createHeading("IV. PRAVNI ZAKLADY ZPRACOVANI"),
                createText("Zpracovani je zalozeno na:"),
                createText("- Plneni smlouvy (cl. 6 odst. 1 pism. b) GDPR)"),
                createText("- Pravni povinnosti (cl. 6 odst. 1 pism. c) GDPR)"),
                createText("- Opravnene zajmy (cl. 6 odst. 1 pism. f) GDPR)"),
                createText("- Souhlasu (cl. 6 odst. 1 pism. a) GDPR)"),
                createText(""),
                createHeading("V. DOBA UCHOVANI UDAJU"),
                createText("- Po dobu trvani smluvniho vztahu"),
                createText("- Po dobu stanovenou pravnimi predpisy"),
                createText("- Po dobu nezbytnou pro uplatneni nasich navrhu"),
                createText(""),
                createHeading("VI. VASE PRAVA"),
                createText("Mate pravo na:"),
                createText("- pristup k osobnim udajum"),
                createText("- opravu nepresnych udaju"),
                createText("- vymaz udaju (pravo byt zapomenut)"),
                createText("- omezeni zpracovani"),
                createText("- prenositelnost udaju"),
                createText("- podani namitky proti zpracovani"),
                createText("- podani stiznosti u dozoroveho uradu (UOOU)"),
                createText(""),
                createHeading("VII. KONTAKT"),
                createField("Pro uplatneni Vasich prav nas kontaktujte: ", "EMAIL"),
                createText(""),
                createField("Posledni aktualizace: ", "DATUM")
            ]
        }]
    });
    await saveDoc(doc, 'gdpr-policy.docx');
}

async function createPodnikatelskyPlan() {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                createTitle("PODNIKATELSKY PLAN"),
                createText(""),
                createHeading("1. TITULNI STRANA"),
                createField("Nazev projektu: ", "DOPLNTE"),
                createField("Jmeno podnikatele/firmy: ", "DOPLNTE"),
                createField("Sidlo: ", "DOPLNTE"),
                createField("Kontakt: ", "DOPLNTE"),
                createField("Datum: ", "DOPLNTE"),
                createText(""),
                createHeading("2. EXEKUTIVNI SOUHRN"),
                createField("", "STRUCNY PREHLED PROJEKTU - 1-2 ODSTAVCE O VIZI, PRODUKTU A CILOVEM TRHU"),
                createText(""),
                createHeading("3. POPIS PODNIKU"),
                createField("Pravni forma: ", "OSVC, S.R.O., A.S., ATD."),
                createField("Predmet podnikani: ", "DOPLNTE"),
                createField("Mise spolecnosti: ", "DOPLNTE"),
                createField("Vize spolecnosti: ", "DOPLNTE"),
                createText(""),
                createHeading("4. PRODUKTY A SLUZBY"),
                createText("Nabizene produkty/sluzby:"),
                createField("", "PODROBNY POPIS NABIDKY"),
                createText(""),
                createText("Konkurencni vyhody:"),
                createField("", "CO VAS ODLISUJE OD KONKURENCE"),
                createText(""),
                createHeading("5. ANALYZA TRHU"),
                createField("Cilovy trh: ", "POPIS CILOVEHO TRHU"),
                createField("Velikost trhu: ", "ODHAD V KC NEBO POCTU ZAKAZNIKU"),
                createText(""),
                createText("Cilovy zakaznik:"),
                createField("", "PROFIL IDEALNIHO ZAKAZNIKA"),
                createText(""),
                createText("Hlavni konkurenti:"),
                createField("", "SEZNAM A STRUCNA CHARAKTERISTIKA"),
                createText(""),
                createHeading("6. MARKETINGOVA STRATEGIE"),
                createField("Cenova politika: ", "DOPLNTE"),
                createField("Distribucni kanaly: ", "DOPLNTE"),
                createField("Propagace: ", "DOPLNTE"),
                createText(""),
                createHeading("7. ORGANIZACNI STRUKTURA"),
                createField("Management: ", "DOPLNTE"),
                createField("Pocet zamestnancu: ", "DOPLNTE"),
                createField("Klicove pozice: ", "DOPLNTE"),
                createText(""),
                createHeading("8. FINANCNI PLAN"),
                createField("Pocatecni investice: ", "CASTKA"),
                createText(" Kc"),
                createText("Zdroje financovani:"),
                createField("- Vlastni zdroje: ", "CASTKA"),
                createText(" Kc"),
                createField("- Cizi zdroje (uver): ", "CASTKA"),
                createText(" Kc"),
                createText(""),
                createField("Predpokladane trzby (1. rok): ", "CASTKA"),
                createText(" Kc"),
                createField("Predpokladane naklady (1. rok): ", "CASTKA"),
                createText(" Kc"),
                createField("Predpokladany zisk (1. rok): ", "CASTKA"),
                createText(" Kc"),
                createText(""),
                createField("Bod zvratu: ", "MESIC/ROK"),
                createText(""),
                createHeading("9. RIZIKA A JEJICH MINIMALIZACE"),
                createText("Identifikovana rizika:"),
                createField("", "SEZNAM RIZIK"),
                createText(""),
                createText("Opatreni k minimalizaci:"),
                createField("", "JAK RIZIKA SNIZIT"),
                createText(""),
                createHeading("10. CASOVY HARMONOGRAM"),
                createField("", "KLICOVE MILNIKY A TERMINY"),
                createText(""),
                createHeading("11. PRILOHY"),
                createText("- Zivotopis podnikatele"),
                createText("- Detailni financni projekce"),
                createText("- Reference"),
                createText("- Dalsi relevantni dokumenty")
            ]
        }]
    });
    await saveDoc(doc, 'podnikatelsky-plan.docx');
}

async function main() {
    console.log('Generuji DOCX sablony...\n');

    try {
        await createKupniSmlouva();
        await createNajemniSmlouva();
        await createSmlouvaODilo();
        await createPracovniSmlouva();
        await createVypoved();
        await createDPP();
        await createDPC();
        await createFakturaDPH();
        await createFakturaBezDPH();
        await createNDA();
        await createZadostGDPR();
        await createZadostInformace();
        await createSmlouvaOSpolupraci();
        await createSmlouvaOPujcce();
        await createPrikazniSmlouva();
        await createZalohovaFaktura();
        await createDobropis();
        await createZadostStavebni();
        await createZadostZivnost();
        await createObchodniPodminky();
        await createGDPRPolicy();
        await createPodnikatelskyPlan();

        console.log('\nVsechny sablony byly uspesne vygenerovany!');
        console.log('Umisteni: ' + outputDir);
    } catch (error) {
        console.error('Chyba:', error);
    }
}

main();

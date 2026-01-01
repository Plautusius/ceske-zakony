// ===== Template Content Data =====
const templates = {
    'kupni-smlouva': {
        title: 'Kupní smlouva',
        content: `KUPNÍ SMLOUVA
uzavřená dle § 2079 a násl. zákona č. 89/2012 Sb., občanského zákoníku

I. Smluvní strany

Prodávající:
Jméno/Název: [DOPLNIT]
IČO: [DOPLNIT]
Sídlo/Adresa: [DOPLNIT]
Bankovní spojení: [DOPLNIT]

Kupující:
Jméno/Název: [DOPLNIT]
IČO/RČ: [DOPLNIT]
Sídlo/Adresa: [DOPLNIT]

II. Předmět smlouvy

1. Prodávající se touto smlouvou zavazuje odevzdat kupujícímu následující věc:
   [DOPLNIT POPIS PŘEDMĚTU]

2. Kupující se zavazuje předmět koupě převzít a zaplatit za něj kupní cenu.

III. Kupní cena a platební podmínky

1. Kupní cena předmětu koupě činí: [DOPLNIT] Kč
   (slovy: [DOPLNIT] korun českých)

2. Kupní cena bude zaplacena:
   [ ] v hotovosti při podpisu této smlouvy
   [ ] převodem na účet prodávajícího do [DOPLNIT] dnů

IV. Předání předmětu koupě

1. Prodávající předá předmět koupě kupujícímu dne [DOPLNIT]
   na adrese [DOPLNIT].

2. O předání bude sepsán předávací protokol.

V. Prohlášení prodávajícího

1. Prodávající prohlašuje, že je oprávněným vlastníkem předmětu koupě.
2. Na předmětu koupě neváznou žádná práva třetích osob.
3. Předmět koupě nemá žádné vady, které by bránily jeho užívání.

VI. Závěrečná ustanovení

1. Tato smlouva je vyhotovena ve dvou stejnopisech, z nichž každá
   smluvní strana obdrží po jednom.

2. Smlouva nabývá platnosti a účinnosti dnem podpisu oběma stranami.

3. Změny této smlouvy jsou možné pouze písemnou formou.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
    Prodávající                      Kupující`
    },

    'najemni-smlouva': {
        title: 'Nájemní smlouva na byt',
        content: `NÁJEMNÍ SMLOUVA
uzavřená dle § 2235 a násl. zákona č. 89/2012 Sb., občanského zákoníku

I. Smluvní strany

Pronajímatel:
Jméno: [DOPLNIT]
RČ: [DOPLNIT]
Trvalé bydliště: [DOPLNIT]

Nájemce:
Jméno: [DOPLNIT]
RČ: [DOPLNIT]
Trvalé bydliště: [DOPLNIT]

II. Předmět nájmu

1. Pronajímatel je vlastníkem bytu č. [DOPLNIT] o velikosti [DOPLNIT]
   nacházejícího se v [DOPLNIT] patře domu na adrese:
   [DOPLNIT ADRESA]

2. Byt sestává z: [DOPLNIT - např. 2 pokojů, kuchyně, koupelny, WC]

3. Celková podlahová plocha bytu činí: [DOPLNIT] m²

III. Účel nájmu

Byt je pronajímán výhradně k bydlení nájemce a těchto osob:
[DOPLNIT JMÉNA OSOB]

IV. Doba nájmu

1. Nájem se sjednává na dobu:
   [ ] určitou od [DOPLNIT] do [DOPLNIT]
   [ ] neurčitou s počátkem od [DOPLNIT]

V. Nájemné a úhrady za služby

1. Nájemné činí: [DOPLNIT] Kč měsíčně

2. Zálohy na služby (energie, voda, teplo): [DOPLNIT] Kč měsíčně

3. Celková měsíční platba: [DOPLNIT] Kč

4. Nájemné a zálohy jsou splatné vždy k [DOPLNIT]. dni měsíce
   na účet č.: [DOPLNIT]

VI. Kauce

1. Nájemce skládá při podpisu smlouvy kauci ve výši: [DOPLNIT] Kč
   (odpovídá [DOPLNIT] měsíčním nájmům)

2. Kauce slouží k zajištění pohledávek pronajímatele.

VII. Práva a povinnosti

1. Nájemce je povinen užívat byt řádně a udržovat jej v čistotě.
2. Nájemce nesmí bez souhlasu pronajímatele provádět stavební úpravy.
3. Nájemce nesmí byt podnajímat bez písemného souhlasu pronajímatele.

VIII. Skončení nájmu

1. Nájem může být ukončen:
   - dohodou smluvních stran
   - výpovědí s výpovědní dobou 3 měsíce
   - okamžitou výpovědí při hrubém porušení povinností

IX. Předání bytu

Pronajímatel předá nájemci byt dne [DOPLNIT].
O stavu bytu bude sepsán předávací protokol.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
    Pronajímatel                     Nájemce`
    },

    'smlouva-o-dilo': {
        title: 'Smlouva o dílo',
        content: `SMLOUVA O DÍLO
uzavřená dle § 2586 a násl. zákona č. 89/2012 Sb., občanského zákoníku

I. Smluvní strany

Zhotovitel:
Název/Jméno: [DOPLNIT]
IČO: [DOPLNIT]
Sídlo: [DOPLNIT]
Zastoupený: [DOPLNIT]

Objednatel:
Název/Jméno: [DOPLNIT]
IČO/RČ: [DOPLNIT]
Sídlo/Adresa: [DOPLNIT]

II. Předmět smlouvy

1. Zhotovitel se zavazuje provést pro objednatele dílo spočívající v:
   [DOPLNIT PODROBNÝ POPIS DÍLA]

2. Dílo bude provedeno v souladu s technickou specifikací,
   která tvoří přílohu č. 1 této smlouvy.

III. Cena díla

1. Cena díla činí: [DOPLNIT] Kč bez DPH
   DPH [DOPLNIT]%: [DOPLNIT] Kč
   Cena celkem včetně DPH: [DOPLNIT] Kč

2. Cena je stanovena jako:
   [ ] pevná
   [ ] maximální s možností snížení

IV. Platební podmínky

1. Záloha ve výši [DOPLNIT]% ceny: [DOPLNIT] Kč
   splatná do [DOPLNIT] dnů od podpisu smlouvy

2. Doplatek ve výši [DOPLNIT] Kč
   splatný do [DOPLNIT] dnů od předání díla

V. Termín provedení díla

1. Zhotovitel se zavazuje dílo provést a předat nejpozději do [DOPLNIT].

2. Místo provedení díla: [DOPLNIT]

VI. Předání a převzetí díla

1. O předání díla bude sepsán předávací protokol.
2. Dílo se považuje za řádně předané po podpisu protokolu oběma stranami.

VII. Odpovědnost za vady

1. Zhotovitel poskytuje záruku na dílo v délce [DOPLNIT] měsíců.
2. Záruční doba počíná běžet dnem předání díla.

VIII. Smluvní pokuty

1. Za prodlení s předáním díla: [DOPLNIT]% z ceny díla za každý den prodlení
2. Za prodlení s platbou: [DOPLNIT]% z dlužné částky za každý den prodlení

IX. Závěrečná ustanovení

Tato smlouva je vyhotovena ve dvou stejnopisech.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
    Zhotovitel                      Objednatel`
    },

    'faktura-dph': {
        title: 'Faktura - plátce DPH',
        content: `                         FAKTURA - DAŇOVÝ DOKLAD
                         ========================

Číslo faktury: [DOPLNIT]
Datum vystavení: [DOPLNIT]
Datum uskutečnění zdanitelného plnění: [DOPLNIT]
Datum splatnosti: [DOPLNIT]

DODAVATEL:                              ODBĚRATEL:
[DOPLNIT NÁZEV]                         [DOPLNIT NÁZEV]
[DOPLNIT ADRESA]                        [DOPLNIT ADRESA]
[DOPLNIT PSČ MĚSTO]                     [DOPLNIT PSČ MĚSTO]
IČO: [DOPLNIT]                          IČO: [DOPLNIT]
DIČ: CZ[DOPLNIT]                        DIČ: CZ[DOPLNIT]

Bankovní spojení: [DOPLNIT]
Číslo účtu: [DOPLNIT]
Variabilní symbol: [DOPLNIT]

═══════════════════════════════════════════════════════════════════
Popis                          Množství    Cena/ks    Celkem bez DPH
═══════════════════════════════════════════════════════════════════
[DOPLNIT POLOŽKU 1]            [x]         [x] Kč     [x] Kč
[DOPLNIT POLOŽKU 2]            [x]         [x] Kč     [x] Kč
───────────────────────────────────────────────────────────────────

Základ DPH 21%:                                       [DOPLNIT] Kč
DPH 21%:                                              [DOPLNIT] Kč
───────────────────────────────────────────────────────────────────
CELKEM K ÚHRADĚ:                                      [DOPLNIT] Kč
═══════════════════════════════════════════════════════════════════

Způsob úhrady: bankovním převodem
Konstantní symbol: 0308

Vystavil: [DOPLNIT]

                    ___________________________
                         razítko a podpis`
    },

    'faktura-bez-dph': {
        title: 'Faktura - neplátce DPH',
        content: `                              FAKTURA
                              =======

Číslo faktury: [DOPLNIT]
Datum vystavení: [DOPLNIT]
Datum splatnosti: [DOPLNIT]

DODAVATEL:                              ODBĚRATEL:
[DOPLNIT JMÉNO]                         [DOPLNIT NÁZEV/JMÉNO]
[DOPLNIT ADRESA]                        [DOPLNIT ADRESA]
[DOPLNIT PSČ MĚSTO]                     [DOPLNIT PSČ MĚSTO]
IČO: [DOPLNIT]                          IČO: [DOPLNIT]

Nejsem plátce DPH.

Bankovní spojení: [DOPLNIT]
Číslo účtu: [DOPLNIT]
Variabilní symbol: [DOPLNIT]

═══════════════════════════════════════════════════════════════════
Popis                                   Množství        Cena celkem
═══════════════════════════════════════════════════════════════════
[DOPLNIT POLOŽKU 1]                     [x]             [x] Kč
[DOPLNIT POLOŽKU 2]                     [x]             [x] Kč
───────────────────────────────────────────────────────────────────
CELKEM K ÚHRADĚ:                                        [DOPLNIT] Kč
═══════════════════════════════════════════════════════════════════

Způsob úhrady: bankovním převodem

Vystavil: [DOPLNIT]                     Datum: [DOPLNIT]

                    ___________________________
                              podpis`
    },

    'pracovni-smlouva': {
        title: 'Pracovní smlouva',
        content: `PRACOVNÍ SMLOUVA
uzavřená dle § 33 a násl. zákona č. 262/2006 Sb., zákoníku práce

I. Smluvní strany

Zaměstnavatel:
Název: [DOPLNIT]
IČO: [DOPLNIT]
Sídlo: [DOPLNIT]
Zastoupený: [DOPLNIT]

Zaměstnanec:
Jméno a příjmení: [DOPLNIT]
Datum narození: [DOPLNIT]
Rodné číslo: [DOPLNIT]
Trvalé bydliště: [DOPLNIT]

II. Druh práce

Zaměstnanec bude vykonávat práci na pozici: [DOPLNIT]

III. Místo výkonu práce

Místem výkonu práce je: [DOPLNIT]

IV. Den nástupu do práce

Zaměstnanec nastoupí do práce dne: [DOPLNIT]

V. Doba trvání pracovního poměru

Pracovní poměr se sjednává na dobu:
[ ] neurčitou
[ ] určitou do [DOPLNIT]

VI. Zkušební doba

Zkušební doba se sjednává v délce [DOPLNIT] měsíců.

VII. Mzda

1. Měsíční hrubá mzda: [DOPLNIT] Kč
2. Mzda je splatná pozadu, vždy k [DOPLNIT]. dni následujícího měsíce.
3. Mzda bude vyplácena bezhotovostně na účet č.: [DOPLNIT]

VIII. Pracovní doba

1. Týdenní pracovní doba činí [DOPLNIT] hodin.
2. Pracovní doba je rozvržena: [DOPLNIT - např. Po-Pá 8:00-16:30]

IX. Dovolená

Zaměstnanec má nárok na dovolenou v rozsahu [DOPLNIT] týdnů ročně.

X. Závěrečná ustanovení

1. Zaměstnanec byl před podpisem smlouvy seznámen s právy a povinnostmi,
   pracovním řádem a předpisy BOZP.

2. Tato smlouva je vyhotovena ve dvou stejnopisech.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
   Zaměstnavatel                    Zaměstnanec`
    },

    'vypoved': {
        title: 'Výpověď z pracovního poměru',
        content: `                    VÝPOVĚĎ Z PRACOVNÍHO POMĚRU
                    ============================

Zaměstnavatel:
[DOPLNIT NÁZEV SPOLEČNOSTI]
[DOPLNIT ADRESA]
IČO: [DOPLNIT]


Věc: Výpověď z pracovního poměru

Já, níže podepsaný/á [DOPLNIT JMÉNO A PŘÍJMENÍ], narozen/a [DOPLNIT],
bytem [DOPLNIT ADRESA],

tímto dávám výpověď z pracovního poměru založeného pracovní smlouvou
ze dne [DOPLNIT], a to z jakéhokoliv důvodu nebo bez udání důvodu.

Pracovní poměr skončí uplynutím zákonné výpovědní doby, která činí
2 měsíce a počíná běžet prvním dnem kalendářního měsíce následujícího
po doručení této výpovědi.

Žádám o vystavení potvrzení o zaměstnání (zápočtového listu)
a o vyplacení všech dosud nevyčerpaných nároků.



V [DOPLNIT] dne [DOPLNIT]



                              _____________________
                                    podpis


Výpověď převzal dne: _______________

Jméno a podpis přebírajícího: _____________________`
    },

    'dpp': {
        title: 'Dohoda o provedení práce',
        content: `DOHODA O PROVEDENÍ PRÁCE
uzavřená dle § 75 zákona č. 262/2006 Sb., zákoníku práce

I. Smluvní strany

Zaměstnavatel:
Název: [DOPLNIT]
IČO: [DOPLNIT]
Sídlo: [DOPLNIT]

Zaměstnanec:
Jméno: [DOPLNIT]
RČ: [DOPLNIT]
Bydliště: [DOPLNIT]

II. Předmět dohody

Zaměstnanec se zavazuje provést pro zaměstnavatele následující práci:
[DOPLNIT POPIS PRÁCE]

III. Rozsah práce

Práce bude provedena v rozsahu maximálně 300 hodin za kalendářní rok.
Předpokládaný rozsah: [DOPLNIT] hodin.

IV. Doba trvání

Dohoda se uzavírá na dobu od [DOPLNIT] do [DOPLNIT].

V. Místo výkonu práce

[DOPLNIT]

VI. Odměna

1. Hodinová odměna: [DOPLNIT] Kč
2. Celková odměna: [DOPLNIT] Kč

3. Odměna je splatná do [DOPLNIT] dnů od provedení práce
   na účet č.: [DOPLNIT]

VII. Další ujednání

1. Zaměstnanec prohlašuje, že nepřekročí limit 300 hodin u tohoto
   zaměstnavatele v kalendářním roce.

2. Zaměstnanec odpovídá za škodu způsobenou při výkonu práce.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
   Zaměstnavatel                    Zaměstnanec`
    },

    'zadost-informace': {
        title: 'Žádost o informace dle zákona 106/1999 Sb.',
        content: `                    ŽÁDOST O POSKYTNUTÍ INFORMACE
        dle zákona č. 106/1999 Sb., o svobodném přístupu k informacím

Adresát:
[DOPLNIT NÁZEV ÚŘADU/INSTITUCE]
[DOPLNIT ADRESA]

Žadatel:
Jméno a příjmení: [DOPLNIT]
Datum narození: [DOPLNIT]
Adresa: [DOPLNIT]
E-mail: [DOPLNIT]
Telefon: [DOPLNIT]


Věc: Žádost o poskytnutí informace

Na základě zákona č. 106/1999 Sb., o svobodném přístupu k informacím,
žádám o poskytnutí následující informace:

[DOPLNIT PŘESNÝ POPIS POŽADOVANÉ INFORMACE]

Informaci žádám poskytnout:
[ ] v elektronické podobě na e-mail uvedený výše
[ ] v listinné podobě na adresu uvedenou výše
[ ] k osobnímu vyzvednutí

Jsem si vědom/a, že lhůta pro vyřízení žádosti je 15 dnů ode dne
přijetí žádosti, případně může být prodloužena o dalších 10 dnů
za podmínek stanovených zákonem.

V [DOPLNIT] dne [DOPLNIT]


                              _____________________
                                    podpis`
    },

    'zadost-gdpr': {
        title: 'Žádost o výmaz osobních údajů (GDPR)',
        content: `                    ŽÁDOST O VÝMAZ OSOBNÍCH ÚDAJŮ
                dle čl. 17 Nařízení (EU) 2016/679 (GDPR)

Adresát (správce osobních údajů):
[DOPLNIT NÁZEV SPOLEČNOSTI]
[DOPLNIT ADRESA]

Žadatel (subjekt údajů):
Jméno a příjmení: [DOPLNIT]
E-mail: [DOPLNIT]
Telefon: [DOPLNIT]
Adresa: [DOPLNIT]


Věc: Žádost o výmaz osobních údajů

Na základě článku 17 Nařízení Evropského parlamentu a Rady (EU)
2016/679 (GDPR) žádám o výmaz všech mých osobních údajů, které
o mně zpracováváte.

Tuto žádost odůvodňuji tím, že:
[ ] osobní údaje již nejsou potřebné pro účely, pro které byly shromážděny
[ ] odvolávám souhlas se zpracováním a neexistuje jiný právní důvod
[ ] osobní údaje byly zpracovány protiprávně
[ ] jiný důvod: [DOPLNIT]

Konkrétně žádám o výmaz těchto údajů:
[DOPLNIT SEZNAM ÚDAJŮ, NAPŘ. E-MAIL, TELEFON, ZÁKAZNICKÝ ÚČET]

Současně žádám o potvrzení provedení výmazu.

Beru na vědomí, že máte povinnost odpovědět na tuto žádost
do jednoho měsíce od jejího obdržení.

V [DOPLNIT] dne [DOPLNIT]


                              _____________________
                                    podpis`
    },

    'obchodni-podminky': {
        title: 'Obchodní podmínky e-shop',
        content: `                    OBCHODNÍ PODMÍNKY
                    ==================

[DOPLNIT NÁZEV E-SHOPU]
provozovatel: [DOPLNIT]
IČO: [DOPLNIT]
sídlo: [DOPLNIT]

1. ÚVODNÍ USTANOVENÍ

1.1 Tyto obchodní podmínky upravují vzájemná práva a povinnosti
    prodávajícího a kupujícího při prodeji zboží prostřednictvím
    internetového obchodu [DOPLNIT URL].

1.2 Obchodní podmínky jsou nedílnou součástí kupní smlouvy.

2. OBJEDNÁVKA A UZAVŘENÍ KUPNÍ SMLOUVY

2.1 Kupující vybere zboží a vloží ho do košíku.
2.2 Kupující vyplní objednávkový formulář.
2.3 Kupní smlouva je uzavřena okamžikem potvrzení objednávky.

3. CENA A PLATEBNÍ PODMÍNKY

3.1 Ceny jsou uvedeny včetně DPH.
3.2 Platba je možná:
    - platební kartou
    - bankovním převodem
    - dobírkou

4. DODÁNÍ ZBOŽÍ

4.1 Zboží je doručováno prostřednictvím [DOPLNIT DOPRAVCE].
4.2 Dodací lhůta je [DOPLNIT] pracovních dnů.
4.3 Dopravné činí: [DOPLNIT] Kč

5. ODSTOUPENÍ OD SMLOUVY

5.1 Spotřebitel má právo odstoupit od smlouvy do 14 dnů
    od převzetí zboží bez udání důvodu.

5.2 Zboží musí být vráceno nepoškozené, v původním obalu.

5.3 Peníze budou vráceny do 14 dnů od doručení vráceného zboží.

6. REKLAMACE

6.1 Záruka na zboží činí 24 měsíců.
6.2 Reklamaci lze uplatnit e-mailem nebo písemně.
6.3 Reklamace bude vyřízena do 30 dnů.

7. OCHRANA OSOBNÍCH ÚDAJŮ

Zpracování osobních údajů se řídí samostatným dokumentem
"Zásady ochrany osobních údajů".

8. ZÁVĚREČNÁ USTANOVENÍ

8.1 Tyto obchodní podmínky jsou platné od [DOPLNIT].
8.2 Spory řeší příslušný soud ČR.

Kontakt: [DOPLNIT E-MAIL]`
    },

    'nda': {
        title: 'Smlouva o mlčenlivosti (NDA)',
        content: `SMLOUVA O ZACHOVÁNÍ DŮVĚRNOSTI INFORMACÍ
(Non-Disclosure Agreement - NDA)

I. Smluvní strany

Poskytovatel:
Název: [DOPLNIT]
IČO: [DOPLNIT]
Sídlo: [DOPLNIT]
Zastoupený: [DOPLNIT]

Příjemce:
Název/Jméno: [DOPLNIT]
IČO/RČ: [DOPLNIT]
Sídlo/Adresa: [DOPLNIT]

II. Účel smlouvy

Smluvní strany uzavírají tuto smlouvu za účelem ochrany důvěrných
informací sdělených v rámci: [DOPLNIT ÚČEL SPOLUPRÁCE]

III. Vymezení důvěrných informací

Za důvěrné informace se považují zejména:
- obchodní tajemství
- know-how a technické informace
- finanční údaje
- seznamy zákazníků a dodavatelů
- cenové kalkulace
- strategické plány
- [DOPLNIT DALŠÍ]

IV. Povinnosti příjemce

Příjemce se zavazuje:
1. Zachovávat důvěrnost všech důvěrných informací
2. Použít důvěrné informace pouze pro sjednaný účel
3. Neposkytovat důvěrné informace třetím osobám
4. Přijmout opatření k ochraně důvěrných informací
5. Na žádost vrátit nebo zničit veškeré důvěrné informace

V. Výjimky z důvěrnosti

Za důvěrné se nepovažují informace, které:
- jsou veřejně dostupné
- příjemce získal od třetí strany oprávněně
- musí být sděleny na základě zákona

VI. Doba trvání

Povinnost zachovávat důvěrnost trvá po dobu [DOPLNIT] let
od ukončení spolupráce.

VII. Smluvní pokuta

Za porušení povinností dle této smlouvy sjednávají strany
smluvní pokutu ve výši [DOPLNIT] Kč.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
    Poskytovatel                     Příjemce`
    }
};

// Additional templates
templates['dpc'] = {
    title: 'Dohoda o pracovní činnosti',
    content: `DOHODA O PRACOVNI CINNOSTI
uzavrena dle § 76 zakona c. 262/2006 Sb., zakoniku prace

I. Smluvni strany

Zamestnavatel:
Nazev: [DOPLNIT]
ICO: [DOPLNIT]
Sidlo: [DOPLNIT]

Zamestnanec:
Jmeno: [DOPLNIT]
RC: [DOPLNIT]
Bydliste: [DOPLNIT]

II. Predmet dohody

Zamestnanec bude vykonavat pro zamestnavatele nasledujici praci:
[DOPLNIT POPIS PRACE]

III. Rozsah prace

Prace bude vykonavana v rozsahu maximalne 20 hodin tydne.
Prumerny tydenni rozsah: [DOPLNIT] hodin.

IV. Doba trvani

Dohoda se uzavira na dobu od [DOPLNIT] do [DOPLNIT].

V. Misto vykonu prace

[DOPLNIT]

VI. Odmena

1. Hodinova odmena: [DOPLNIT] Kc
2. Odmena je splatna mesicne, vzdy k [DOPLNIT]. dni nasledujiciho mesice
   na ucet c.: [DOPLNIT]

VII. Dalsi ujednani

1. Zamestnanec je povinen dodrzovat pracovni povinnosti.
2. Zamestnavatel je povinen vytvorit podminky pro vykon prace.
3. Dohodu lze ukoncit dohodou nebo vypovedi s 15denni vypovedi dobou.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
   Zamestnavatel                    Zamestnanec`
};

templates['prikazni-smlouva'] = {
    title: 'Prikazni smlouva',
    content: `PRIKAZNI SMLOUVA
uzavrena dle § 2430 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku

I. Smluvni strany

Prikazce:
Nazev/Jmeno: [DOPLNIT]
ICO/RC: [DOPLNIT]
Sidlo/Adresa: [DOPLNIT]

Prikaznik:
Nazev/Jmeno: [DOPLNIT]
ICO/RC: [DOPLNIT]
Sidlo/Adresa: [DOPLNIT]

II. Predmet smlouvy

Prikaznik se zavazuje obstarat pro prikazce nasledujici zalezitost:
[DOPLNIT POPIS CINNOSTI]

III. Odmena

1. Za provedeni prikazu naslusi prikaznikovi odmena ve vysi: [DOPLNIT] Kc
2. Odmena je splatna do [DOPLNIT] dnu od splneni prikazu.

IV. Lhuta pro provedeni

Prikaznik provede prikaz nejpozdeji do [DOPLNIT].

V. Prava a povinnosti

1. Prikaznik je povinen jednat osobne a peclive.
2. Prikaznik je povinen ridit se pokyny prikazce.
3. Prikaznik je povinen informovat prikazce o prubehu.
4. Prikazce je povinen poskytnout potrebnou soucinnost.

VI. Ukonceni smlouvy

1. Prikazce muze prikaz kdykoliv odvolat.
2. Prikaznik muze prikaz vypovedet s primerenou vypovedi dobou.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
      Prikazce                       Prikaznik`
};

templates['smlouva-o-spolupraci'] = {
    title: 'Smlouva o spolupraci',
    content: `SMLOUVA O SPOLUPRACI
uzavrena dle § 1746 odst. 2 zakona c. 89/2012 Sb., obcanskeho zakoniku

I. Smluvni strany

Partner A:
Nazev: [DOPLNIT]
ICO: [DOPLNIT]
Sidlo: [DOPLNIT]
Zastoupeny: [DOPLNIT]

Partner B:
Nazev: [DOPLNIT]
ICO: [DOPLNIT]
Sidlo: [DOPLNIT]
Zastoupeny: [DOPLNIT]

II. Predmet smlouvy

1. Smluvni strany se dohodly na spolupraci v oblasti:
   [DOPLNIT OBLAST SPOLUPRACE]

2. Cilem spoluprace je: [DOPLNIT CIL]

III. Rozsah spoluprace

Partner A se zavazuje:
- [DOPLNIT POVINNOSTI]

Partner B se zavazuje:
- [DOPLNIT POVINNOSTI]

IV. Financni podminky

1. Odmena/podil: [DOPLNIT]
2. Naklady nese: [DOPLNIT]

V. Doba trvani

Tato smlouva se uzavira na dobu:
[ ] urcitou od [DOPLNIT] do [DOPLNIT]
[ ] neurcitou s ucinnosti od [DOPLNIT]

VI. Ukonceni spoluprace

1. Dohodou smluvnich stran.
2. Vypovedi s [DOPLNIT] mesicni vypovedi dobou.

VII. Duverna ustanoveni

Strany se zavazuji zachovavat mlcenlivost o vsech
skutecnostech ziskanych pri spolupraci.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
     Partner A                       Partner B`
};

templates['smlouva-o-pujcce'] = {
    title: 'Smlouva o zapujcce',
    content: `SMLOUVA O ZAPUJCCE
uzavrena dle § 2390 a nasl. zakona c. 89/2012 Sb., obcanskeho zakoniku

I. Smluvni strany

Zapujcitel:
Jmeno: [DOPLNIT]
RC: [DOPLNIT]
Bydliste: [DOPLNIT]

Vydluzitel:
Jmeno: [DOPLNIT]
RC: [DOPLNIT]
Bydliste: [DOPLNIT]

II. Predmet smlouvy

1. Zapujcitel pujcuje vydluziteli penezni castku ve vysi:
   [DOPLNIT] Kc (slovy: [DOPLNIT] korun ceskych)

2. Castka byla predana:
   [ ] v hotovosti pri podpisu teto smlouvy
   [ ] prevodem na ucet c. [DOPLNIT]

III. Urok

1. Zapujcka je:
   [ ] bezurocna
   [ ] urocena urokovou sazbou [DOPLNIT]% rocne

IV. Splatnost

1. Vydluzitel se zavazuje vratit celou castku nejpozdeji do [DOPLNIT].

2. Splaceni bude provedeno:
   [ ] jednorrazove
   [ ] v mesicnich splatkach po [DOPLNIT] Kc

V. Zajisteni

[ ] Zapujcka neni zajistena
[ ] Zapujcka je zajistena: [DOPLNIT ZPUSOB ZAJISTENI]

VI. Smluvni pokuta

Za prodleni se splacenim sjednava se smluvni pokuta ve vysi
[DOPLNIT]% z dluzne castky za kazdy den prodleni.

VII. Zaverecna ustanoveni

Smlouva je vyhotovena ve dvou stejnopisech.

V [DOPLNIT] dne [DOPLNIT]


_____________________          _____________________
    Zapujcitel                      Vydluzitel`
};

templates['zalohova-faktura'] = {
    title: 'Zalohova faktura',
    content: `                    ZALOHOVA FAKTURA (PROFORMA)
                    ============================

Cislo: [DOPLNIT]
Datum vystaveni: [DOPLNIT]
Datum splatnosti: [DOPLNIT]

DODAVATEL:                              ODBERATEL:
[DOPLNIT NAZEV]                         [DOPLNIT NAZEV]
[DOPLNIT ADRESA]                        [DOPLNIT ADRESA]
ICO: [DOPLNIT]                          ICO: [DOPLNIT]
DIC: [DOPLNIT]                          DIC: [DOPLNIT]

Bankovni spojeni: [DOPLNIT]
Cislo uctu: [DOPLNIT]
Variabilni symbol: [DOPLNIT]

===================================================================
Popis                                              Castka
===================================================================
Zaloha na: [DOPLNIT POPIS ZBOZI/SLUZBY]           [DOPLNIT] Kc

-------------------------------------------------------------------
CELKEM K UHRADE:                                   [DOPLNIT] Kc
===================================================================

Upozorneni:
Toto neni danovy doklad. Danovy doklad bude vystaven
po uhrade zalohy a dodani zbozi/sluzby.

Vystavil: [DOPLNIT]`
};

templates['dobropis'] = {
    title: 'Dobropis',
    content: `                    DOBROPIS - OPRAVNY DANOVY DOKLAD
                    =================================

Cislo dobropisu: [DOPLNIT]
Datum vystaveni: [DOPLNIT]
Puvodni faktura c.: [DOPLNIT]
Datum puvodni faktury: [DOPLNIT]

DODAVATEL:                              ODBERATEL:
[DOPLNIT NAZEV]                         [DOPLNIT NAZEV]
[DOPLNIT ADRESA]                        [DOPLNIT ADRESA]
ICO: [DOPLNIT]                          ICO: [DOPLNIT]
DIC: CZ[DOPLNIT]                        DIC: CZ[DOPLNIT]

===================================================================
Duvod vystaveni dobropisu:
[DOPLNIT DUVOD - napr. vraceni zbozi, sleva, oprava chyby]
===================================================================

Popis                          Mnozstvi    Cena/ks    Celkem
-------------------------------------------------------------------
[DOPLNIT POLOZKU]              [x]         [x] Kc     -[x] Kc

-------------------------------------------------------------------
Zaklad DPH 21%:                                       -[DOPLNIT] Kc
DPH 21%:                                              -[DOPLNIT] Kc
-------------------------------------------------------------------
CELKEM K VRACENI:                                     -[DOPLNIT] Kc
===================================================================

Castka bude vracena:
[ ] na ucet c.: [DOPLNIT]
[ ] zapoctenim proti budoucim pohledavkam
[ ] v hotovosti

Vystavil: [DOPLNIT]                Datum: [DOPLNIT]`
};

templates['zadost-stavebni'] = {
    title: 'Zadost o stavebni povoleni',
    content: `                    ZADOST O STAVEBNI POVOLENI
                    ===========================

Mestsky/Obecni urad [DOPLNIT]
Odbor vystavby
[DOPLNIT ADRESA]


Zadatel:
Jmeno a prijmeni: [DOPLNIT]
Datum narozeni: [DOPLNIT]
Adresa: [DOPLNIT]
Telefon: [DOPLNIT]
E-mail: [DOPLNIT]


Vec: Zadost o vydani stavebniho povoleni

Na zaklade zakona c. 183/2006 Sb., o uzemnim planovani a stavebnim
radu (stavebni zakon), zadam o vydani stavebniho povoleni pro stavbu:

Nazev stavby: [DOPLNIT]
Misto stavby: [DOPLNIT ADRESA/PARCELA]
Katastralni uzemi: [DOPLNIT]
Parcelni cislo: [DOPLNIT]

Popis stavby:
[DOPLNIT STRUCNY POPIS STAVBY]

Predpokladany termin zahajeni: [DOPLNIT]
Predpokladany termin dokonceni: [DOPLNIT]

Prilohy:
[ ] Projektova dokumentace (2x)
[ ] Doklad o vlastnictvi pozemku
[ ] Situacni vykresy
[ ] Stanoviska dotcenych organu
[ ] Souhlasy sousedu

Prohlasuji, ze vsechny udaje jsou pravdive.


V [DOPLNIT] dne [DOPLNIT]


                              _____________________
                                    podpis`
};

templates['zadost-zivnost'] = {
    title: 'Ohlaseni zivnosti',
    content: `                    JEDNOTNY REGISTRACNI FORMULAR
                    OHLASENI ZIVNOSTI
                    ====================

Zivnostensky urad [DOPLNIT]
[DOPLNIT ADRESA]


I. Udaje o fyzicke osobe

Jmeno a prijmeni: [DOPLNIT]
Rodne prijmeni: [DOPLNIT]
Datum narozeni: [DOPLNIT]
Misto narozeni: [DOPLNIT]
Rodne cislo: [DOPLNIT]
Statni obcanstvi: [DOPLNIT]

Adresa trvaleho pobytu:
Ulice: [DOPLNIT]
Cislo popisne: [DOPLNIT]
Obec: [DOPLNIT]
PSC: [DOPLNIT]

II. Udaje o zivnosti

Predmet podnikani: [DOPLNIT]

Druh zivnosti:
[ ] Volna
[ ] Remeslna
[ ] Vazana
[ ] Koncesovana

Sidlo: [DOPLNIT]

Provozovna: [DOPLNIT ADRESU NEBO "BEZ PROVOZOVNY"]

III. Udaje o odpoved. zastupcich (pokud se vyzaduje)

Jmeno: [DOPLNIT]
Vztah k podnikateli: [DOPLNIT]

IV. Prilohy

[ ] Doklad o odborne zpusobilosti
[ ] Doklad o bezuhonnosti (pouze cizinci)
[ ] Souhlas vlastnika provozovny
[ ] Doklad o zaplaceni spravniho poplatku (1000 Kc)


V [DOPLNIT] dne [DOPLNIT]


                              _____________________
                                    podpis`
};

templates['gdpr-policy'] = {
    title: 'Zasady ochrany osobnich udaju',
    content: `ZASADY OCHRANY OSOBNICH UDAJU
==============================

Spravce osobnich udaju:
[DOPLNIT NAZEV SPOLECNOSTI]
ICO: [DOPLNIT]
Sidlo: [DOPLNIT]
E-mail: [DOPLNIT]

1. ZAKLADNI USTANOVENI

Tyto zasady upravuji zpracovani osobnich udaju v souladu s Narizenim
Evropskeho parlamentu a Rady (EU) 2016/679 (GDPR).

2. JAKE UDAJE SHROMAZDUJEME

Muzeme shromazdovat nasledujici osobni udaje:
- Identifikacni udaje (jmeno, prijmeni)
- Kontaktni udaje (e-mail, telefon, adresa)
- Fakturacni udaje (ICO, DIC, bankovni spojeni)
- Udaje o objednavkach a transakci

3. UCELY ZPRACOVANI

Osobni udaje zpracovavame pro tyto ucely:
- Plneni smlouvy a poskytovani sluzeb
- Komunikace se zakazniky
- Plneni pravnich povinnosti
- Oprávnene zajmy spravce

4. PRAVNI ZAKLAD

Zpracovani je zalozeno na:
- Plneni smlouvy (cl. 6 odst. 1 pism. b GDPR)
- Pravni povinnosti (cl. 6 odst. 1 pism. c GDPR)
- Opravnenych zajmech (cl. 6 odst. 1 pism. f GDPR)
- Souhlasu (cl. 6 odst. 1 pism. a GDPR)

5. DOBA UCHOVAVANI

Osobni udaje uchvavame po dobu:
- Trvani smluvniho vztahu
- [DOPLNIT] let po ukonceni spoluprace
- Dle pozadavku pravnich predpisu

6. PRAVA SUBJEKTU UDAJU

Mate pravo na:
- Pristup k osobnim udajum
- Opravu nepresnych udaju
- Vymaz udaju
- Omezeni zpracovani
- Prenositelnost udaju
- Podani namitky

7. KONTAKT

Pro uplatneni prav kontaktujte:
[DOPLNIT E-MAIL]

Posledni aktualizace: [DOPLNIT DATUM]`
};

templates['podnikatelsky-plan'] = {
    title: 'Podnikatelsky plan',
    content: `                    PODNIKATELSKY PLAN
                    ==================

1. TITULNI STRANA

Nazev projektu: [DOPLNIT]
Jmeno podnikatele: [DOPLNIT]
Sidlo: [DOPLNIT]
Kontakt: [DOPLNIT]
Datum: [DOPLNIT]


2. EXEKUTIVNI SOUHRN

[DOPLNIT STRUCNY PREHLED PROJEKTU - 1 ODSTAVEC]


3. POPIS PODNIKU

Pravni forma: [DOPLNIT - OSVC, s.r.o., a.s., atd.]
Predmet podnikani: [DOPLNIT]
Mise: [DOPLNIT]
Vize: [DOPLNIT]


4. PRODUKTY A SLUZBY

Nabizene produkty/sluzby:
- [DOPLNIT]

Konkurencni vyhody:
- [DOPLNIT]


5. ANALYZA TRHU

Cilovy trh: [DOPLNIT]
Velikost trhu: [DOPLNIT]
Cilovy zakaznik: [DOPLNIT]

Hlavni konkurenti:
- [DOPLNIT]


6. MARKETINGOVA STRATEGIE

Cenova politika: [DOPLNIT]
Distribucni kanaly: [DOPLNIT]
Propagace: [DOPLNIT]


7. ORGANIZACNI STRUKTURA

Majitel/Jednatel: [DOPLNIT]
Zamestnanci: [DOPLNIT POCET]
Klicove pozice: [DOPLNIT]


8. FINANCNI PLAN

Pocatecni investice: [DOPLNIT] Kc
Zdroje financovani:
- Vlastni zdroje: [DOPLNIT] Kc
- Cizi zdroje: [DOPLNIT] Kc

Predpokladane trzby (1. rok): [DOPLNIT] Kc
Predpokladane naklady (1. rok): [DOPLNIT] Kc
Predpokladany zisk (1. rok): [DOPLNIT] Kc

Bod zvratu: [DOPLNIT]


9. RIZIKA A JEJICH MINIMALIZACE

Identifikovana rizika:
- [DOPLNIT]

Opatreni:
- [DOPLNIT]


10. CASOVY HARMONOGRAM

[DOPLNIT KLICOVE MILNIKY]


11. PRILOHY

- Zivotopis podnikatele
- Financni projekce
- Reference`
};

// ===== Theme Toggle =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== Filter Templates =====
function filterTemplates(category) {
    const cards = document.querySelectorAll('.template-card');
    const tags = document.querySelectorAll('.filter-tag');

    tags.forEach(tag => {
        tag.classList.toggle('active', tag.dataset.category === category);
    });

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ===== Preview Template =====
function previewTemplate(templateId) {
    const template = templates[templateId];
    if (!template) return;

    document.getElementById('previewTitle').textContent = template.title;
    document.getElementById('previewBody').textContent = template.content;
    document.getElementById('previewDownloadBtn').onclick = () => downloadTemplate(templateId);

    document.getElementById('previewModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
    document.getElementById('previewModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Download Template =====
// List of templates available as DOCX
const docxTemplates = [
    'kupni-smlouva', 'najemni-smlouva', 'smlouva-o-dilo', 'pracovni-smlouva',
    'vypoved', 'dpp', 'dpc', 'faktura-dph', 'faktura-bez-dph', 'nda',
    'zadost-gdpr', 'zadost-informace', 'smlouva-o-spolupraci',
    'smlouva-o-pujcce', 'prikazni-smlouva', 'zalohova-faktura', 'dobropis',
    'zadost-stavebni', 'zadost-zivnost', 'obchodni-podminky', 'gdpr-policy',
    'podnikatelsky-plan'
];

function downloadTemplate(templateId) {
    const template = templates[templateId];
    if (!template) return;

    // Check if DOCX version exists
    if (docxTemplates.includes(templateId)) {
        // Download DOCX file
        const a = document.createElement('a');
        a.href = `sablony-docx/${templateId}.docx`;
        a.download = `${templateId}.docx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        // Fallback to text download
        const BOM = '\uFEFF';
        const content = BOM + template.content;
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${templateId}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            filterTemplates(tag.dataset.category);
        });
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Preview modal close
    const previewModalClose = document.getElementById('previewModalClose');
    const previewModal = document.getElementById('previewModal');
    if (previewModalClose) {
        previewModalClose.addEventListener('click', closePreviewModal);
    }
    if (previewModal) {
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) closePreviewModal();
        });
    }

    // ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePreviewModal();
    });
});

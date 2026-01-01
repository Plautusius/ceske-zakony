// ===== Data: Czech Laws - Real Laws =====
const lawsData = [
    {
        id: 1,
        number: "89/2012",
        title: "Občanský zákoník",
        type: "zakon",
        category: "obcanske",
        published: "2012-03-22",
        effective: "2014-01-01",
        description: "Základní kodex soukromého práva upravující právní postavení osob, rodinné právo, věcná práva, dědické právo a závazkové právo.",
        keywords: ["občanské právo", "smlouvy", "dědictví", "vlastnictví", "rodina"],
        keyPoints: [
            "§ 1 - Soukromé právo chrání důstojnost a svobodu člověka",
            "§ 118 - Právnické osoby veřejného a soukromého práva",
            "§ 655 - Manželství vzniká svobodným souhlasným projevem vůle",
            "§ 1475 - Dědické právo, dědění ze zákona a ze závěti",
            "§ 2079 - Kupní smlouva - základní náležitosti"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2012-89"
    },
    {
        id: 2,
        number: "262/2006",
        title: "Zákoník práce",
        type: "zakon",
        category: "prace",
        published: "2006-06-07",
        effective: "2007-01-01",
        description: "Základní právní předpis upravující pracovněprávní vztahy mezi zaměstnavateli a zaměstnanci.",
        keywords: ["práce", "zaměstnání", "mzda", "dovolená", "výpověď"],
        keyPoints: [
            "§ 33 - Pracovní poměr vzniká pracovní smlouvou",
            "§ 50-54 - Výpověď z pracovního poměru a výpovědní doba",
            "§ 79 - Délka pracovní doby 40 hodin týdně",
            "§ 111 - Minimální mzda",
            "§ 211 - Nárok na dovolenou nejméně 4 týdny"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2006-262"
    },
    {
        id: 3,
        number: "586/1992",
        title: "Zákon o daních z příjmů",
        type: "zakon",
        category: "dane",
        published: "1992-12-18",
        effective: "1993-01-01",
        description: "Zákon upravující daň z příjmů fyzických osob a daň z příjmů právnických osob.",
        keywords: ["daně", "příjmy", "DPFO", "DPPO", "sleva na dani"],
        keyPoints: [
            "§ 6 - Příjmy ze závislé činnosti (zaměstnání)",
            "§ 7 - Příjmy ze samostatné činnosti (OSVČ)",
            "§ 16 - Sazba daně 15% a 23% nad limit",
            "§ 35ba - Sleva na poplatníka 30 840 Kč",
            "§ 21 - Sazba daně právnických osob 21%"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1992-586"
    },
    {
        id: 4,
        number: "235/2004",
        title: "Zákon o dani z přidané hodnoty",
        type: "zakon",
        category: "dane",
        published: "2004-04-23",
        effective: "2004-05-01",
        description: "Zákon upravující daň z přidané hodnoty, registraci plátců a náležitosti daňových dokladů.",
        keywords: ["DPH", "daň", "faktura", "plátce", "odpočet"],
        keyPoints: [
            "§ 6 - Registrace plátce při obratu nad 2 mil. Kč",
            "§ 47 - Základní sazba 21%, snížená 12%",
            "§ 29 - Náležitosti daňového dokladu",
            "§ 72-79 - Nárok na odpočet daně",
            "§ 101a - Kontrolní hlášení"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2004-235"
    },
    {
        id: 5,
        number: "90/2012",
        title: "Zákon o obchodních korporacích",
        type: "zakon",
        category: "obchodni",
        published: "2012-03-22",
        effective: "2014-01-01",
        description: "Zákon upravující založení, vznik, organizaci a zrušení obchodních korporací (s.r.o., a.s., družstva).",
        keywords: ["s.r.o.", "a.s.", "společnost", "jednatel", "valná hromada"],
        keyPoints: [
            "§ 132 - Založení s.r.o. jedním zakladatelem",
            "§ 142 - Minimální vklad do s.r.o. 1 Kč",
            "§ 194 - Jednatel s.r.o. - práva a povinnosti",
            "§ 250 - Akciová společnost - základní kapitál min. 2 mil. Kč",
            "§ 51-53 - Pravidla o střetu zájmů"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2012-90"
    },
    {
        id: 6,
        number: "455/1991",
        title: "Živnostenský zákon",
        type: "zakon",
        category: "podnikani",
        published: "1991-11-15",
        effective: "1992-01-01",
        description: "Zákon upravující podmínky živnostenského podnikání a druhy živností.",
        keywords: ["živnost", "podnikání", "OSVČ", "licence", "řemeslo"],
        keyPoints: [
            "§ 2 - Živnost je soustavná činnost za účelem zisku",
            "§ 6 - Všeobecné podmínky provozování živnosti",
            "§ 19-27 - Živnosti volné, vázané, řemeslné, koncesované",
            "§ 45 - Ohlášení živnosti živnostenskému úřadu",
            "§ 58 - Povinnosti podnikatele"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1991-455"
    },
    {
        id: 7,
        number: "634/1992",
        title: "Zákon o ochraně spotřebitele",
        type: "zakon",
        category: "obchodni",
        published: "1992-12-16",
        effective: "1993-01-01",
        description: "Zákon stanovující práva spotřebitelů a povinnosti prodávajících při prodeji zboží a služeb.",
        keywords: ["spotřebitel", "reklamace", "záruka", "e-shop", "odstoupení"],
        keyPoints: [
            "§ 13 - Právo na informace o vlastnostech zboží",
            "§ 19 - Vyřízení reklamace do 30 dnů",
            "§ 1829 OZ - Právo odstoupit od smlouvy do 14 dnů (e-shop)",
            "§ 24 - Zákaz klamavé reklamy",
            "§ 3 - Zákaz diskriminace spotřebitele"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1992-634"
    },
    {
        id: 8,
        number: "500/2004",
        title: "Správní řád",
        type: "zakon",
        category: "sprava",
        published: "2004-09-24",
        effective: "2006-01-01",
        description: "Zákon upravující postup orgánů veřejné správy při vydávání rozhodnutí a vedení správního řízení.",
        keywords: ["správní řízení", "úřad", "rozhodnutí", "odvolání", "lhůty"],
        keyPoints: [
            "§ 27 - Účastníci správního řízení",
            "§ 36 - Právo nahlížet do spisu",
            "§ 71 - Lhůta pro vydání rozhodnutí 30 dnů",
            "§ 81-93 - Odvolací řízení",
            "§ 68 - Náležitosti rozhodnutí"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2004-500"
    },
    {
        id: 9,
        number: "40/2009",
        title: "Trestní zákoník",
        type: "zakon",
        category: "trestni",
        published: "2009-02-09",
        effective: "2010-01-01",
        description: "Základní trestněprávní předpis definující trestné činy a tresty.",
        keywords: ["trestný čin", "trest", "vězení", "pokuta", "krádež"],
        keyPoints: [
            "§ 12 - Zásada subsidiarity trestní represe",
            "§ 205 - Krádež - trest odnětí svobody až 2 roky",
            "§ 209 - Podvod - trest až 10 let",
            "§ 240 - Zkrácení daně - trest až 10 let",
            "§ 52-54 - Druhy trestů"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2009-40"
    },
    {
        id: 10,
        number: "99/1963",
        title: "Občanský soudní řád",
        type: "zakon",
        category: "procesni",
        published: "1963-12-04",
        effective: "1964-04-01",
        description: "Procesní předpis upravující řízení před soudy v občanskoprávních věcech.",
        keywords: ["soud", "žaloba", "důkazy", "rozsudek", "exekuce"],
        keyPoints: [
            "§ 79 - Náležitosti žaloby",
            "§ 114b - Kvalifikovaná výzva s 30denní lhůtou",
            "§ 153 - Rozsudek soudu",
            "§ 201 - Odvolání proti rozhodnutí",
            "§ 251 - Výkon rozhodnutí (exekuce)"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1963-99"
    },
    {
        id: 11,
        number: "183/2006",
        title: "Stavební zákon",
        type: "zakon",
        category: "stavebnictvi",
        published: "2006-05-11",
        effective: "2007-01-01",
        description: "Zákon o územním plánování a stavebním řádu.",
        keywords: ["stavba", "povolení", "územní plán", "kolaudace", "demolice"],
        keyPoints: [
            "§ 103 - Stavby nevyžadující stavební povolení",
            "§ 104 - Ohlášení stavby",
            "§ 109 - Stavební povolení",
            "§ 119 - Kolaudace stavby",
            "§ 178-183 - Sankce za černé stavby"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2006-183"
    },
    {
        id: 12,
        number: "256/2013",
        title: "Katastrální zákon",
        type: "zakon",
        category: "nemovitosti",
        published: "2013-08-08",
        effective: "2014-01-01",
        description: "Zákon o katastru nemovitostí, zápisech vlastnických práv a vedení evidence.",
        keywords: ["katastr", "nemovitost", "vlastnictví", "vklad", "LV"],
        keyPoints: [
            "§ 6 - Obsah katastru nemovitostí",
            "§ 11 - Zápis vkladu vlastnického práva",
            "§ 14 - Lhůta pro vyřízení vkladu 30 dnů",
            "§ 51 - Nahlížení do katastru zdarma",
            "§ 8 - List vlastnictví"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2013-256"
    },
    {
        id: 13,
        number: "563/1991",
        title: "Zákon o účetnictví",
        type: "zakon",
        category: "ucetnictvi",
        published: "1991-12-12",
        effective: "1992-01-01",
        description: "Zákon stanovující pravidla vedení účetnictví pro podnikatele a organizace.",
        keywords: ["účetnictví", "účetní závěrka", "rozvaha", "audit", "archivace"],
        keyPoints: [
            "§ 1 - Kdo je účetní jednotkou",
            "§ 7 - Účetní období",
            "§ 18 - Účetní závěrka - rozvaha, výkaz zisku a ztráty",
            "§ 20 - Povinnost ověření auditorem",
            "§ 31-32 - Archivace účetních dokladů 5-10 let"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1991-563"
    },
    {
        id: 14,
        number: "110/2019",
        title: "Zákon o zpracování osobních údajů",
        type: "zakon",
        category: "gdpr",
        published: "2019-04-24",
        effective: "2019-04-24",
        description: "Adaptační zákon k nařízení GDPR upravující ochranu osobních údajů v ČR.",
        keywords: ["GDPR", "osobní údaje", "souhlas", "ÚOOÚ", "ochrana"],
        keyPoints: [
            "§ 4 - Úřad pro ochranu osobních údajů",
            "§ 7 - Zpracování osobních údajů bez souhlasu",
            "§ 44 - Pokuty až 10 mil. Kč nebo 2% obratu",
            "§ 5 - Pověřenec pro ochranu osobních údajů",
            "§ 8 - Zpracování rodného čísla"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2019-110"
    },
    {
        id: 15,
        number: "182/2006",
        title: "Insolvenční zákon",
        type: "zakon",
        category: "insolvence",
        published: "2006-05-09",
        effective: "2008-01-01",
        description: "Zákon upravující řešení úpadku a hrozícího úpadku dlužníka.",
        keywords: ["insolvence", "úpadek", "konkurz", "oddlužení", "věřitel"],
        keyPoints: [
            "§ 3 - Definice úpadku (platební neschopnost, předlužení)",
            "§ 389 - Oddlužení fyzických osob",
            "§ 244 - Konkurz",
            "§ 136 - Přihláška pohledávky",
            "§ 412 - Oddlužení splátkovým kalendářem"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2006-182"
    },
    {
        id: 16,
        number: "372/2011",
        title: "Zákon o zdravotních službách",
        type: "zakon",
        category: "zdravotnictvi",
        published: "2011-11-08",
        effective: "2012-04-01",
        description: "Zákon upravující poskytování zdravotních služeb a práva pacientů.",
        keywords: ["zdravotnictví", "pacient", "lékař", "nemocnice", "informovaný souhlas"],
        keyPoints: [
            "§ 28 - Práva pacienta",
            "§ 34 - Informovaný souhlas pacienta",
            "§ 53 - Zdravotnická dokumentace",
            "§ 11 - Druhy zdravotních služeb",
            "§ 45 - Právo odmítnout léčbu"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2011-372"
    },
    {
        id: 17,
        number: "561/2004",
        title: "Školský zákon",
        type: "zakon",
        category: "vzdelavani",
        published: "2004-11-10",
        effective: "2005-01-01",
        description: "Zákon o předškolním, základním, středním a vyšším odborném vzdělávání.",
        keywords: ["škola", "vzdělávání", "maturita", "učitel", "žák"],
        keyPoints: [
            "§ 36 - Povinná školní docházka 9 let",
            "§ 44 - Hodnocení výsledků vzdělávání",
            "§ 78-79 - Maturitní zkouška",
            "§ 22 - Práva a povinnosti žáků",
            "§ 164 - Ředitel školy"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2004-561"
    },
    {
        id: 18,
        number: "361/2000",
        title: "Zákon o silničním provozu",
        type: "zakon",
        category: "doprava",
        published: "2000-10-14",
        effective: "2001-01-01",
        description: "Zákon o pravidlech provozu na pozemních komunikacích, řidičských průkazech a bodovém systému.",
        keywords: ["doprava", "řidičský průkaz", "body", "pokuta", "rychlost"],
        keyPoints: [
            "§ 4 - Povinnosti řidiče",
            "§ 18 - Rychlost v obci 50 km/h, mimo obec 90 km/h",
            "§ 5 - Zákaz řízení pod vlivem alkoholu",
            "§ 123a-123f - Bodový systém (max. 12 bodů)",
            "§ 125c - Přestupky a pokuty"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2000-361"
    },
    {
        id: 19,
        number: "169/1999",
        title: "Zákon o výkonu trestu odnětí svobody",
        type: "zakon",
        category: "vezenstvi",
        published: "1999-07-30",
        effective: "2000-01-01",
        description: "Zákon upravující výkon trestu odnětí svobody ve věznicích.",
        keywords: ["vězení", "trest", "odsouzený", "propuštění", "práva vězňů"],
        keyPoints: [
            "§ 2 - Účel výkonu trestu",
            "§ 16-27 - Práva a povinnosti odsouzených",
            "§ 8 - Typy věznic (s dohledem, s dozorem, s ostrahou, se zvýšenou ostrahou)",
            "§ 52 - Podmíněné propuštění",
            "§ 28 - Návštěvy odsouzených"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1999-169"
    },
    {
        id: 20,
        number: "187/2006",
        title: "Zákon o nemocenském pojištění",
        type: "zakon",
        category: "socialni",
        published: "2006-05-09",
        effective: "2009-01-01",
        description: "Zákon upravující nemocenské pojištění zaměstnanců a OSVČ.",
        keywords: ["nemocenská", "ošetřovné", "mateřská", "pojištění", "dávky"],
        keyPoints: [
            "§ 23 - Nemocenské od 15. dne nemoci",
            "§ 39 - Peněžitá pomoc v mateřství (28 týdnů)",
            "§ 39a - Otcovská (2 týdny)",
            "§ 41 - Ošetřovné (9/16 dnů)",
            "§ 29 - Výše nemocenského 60% redukovaného příjmu"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2006-187"
    },
    {
        id: 21,
        number: "155/1995",
        title: "Zákon o důchodovém pojištění",
        type: "zakon",
        category: "socialni",
        published: "1995-08-30",
        effective: "1996-01-01",
        description: "Zákon upravující starobní, invalidní, vdovské a sirotčí důchody.",
        keywords: ["důchod", "penze", "starobní", "invalidní", "vdovský"],
        keyPoints: [
            "§ 29 - Důchodový věk (postupně 65 let)",
            "§ 32 - Potřebná doba pojištění 35 let",
            "§ 39 - Invalidní důchod I., II., III. stupně",
            "§ 49 - Vdovský a vdovecký důchod",
            "§ 36 - Výpočet výše důchodu"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1995-155"
    },
    {
        id: 22,
        number: "117/1995",
        title: "Zákon o státní sociální podpoře",
        type: "zakon",
        category: "socialni",
        published: "1995-06-26",
        effective: "1995-10-01",
        description: "Zákon o dávkách státní sociální podpory - přídavek na dítě, rodičovský příspěvek apod.",
        keywords: ["přídavky", "rodičovská", "příspěvek na bydlení", "dávky", "rodina"],
        keyPoints: [
            "§ 17-19 - Přídavek na dítě",
            "§ 30-32 - Rodičovský příspěvek (až 350 000 Kč)",
            "§ 24-27 - Příspěvek na bydlení",
            "§ 36-38 - Porodné (13 000 Kč první, 10 000 Kč druhé dítě)",
            "§ 47-48 - Pohřebné (5 000 Kč)"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1995-117"
    },
    {
        id: 23,
        number: "127/2005",
        title: "Zákon o elektronických komunikacích",
        type: "zakon",
        category: "technicke",
        published: "2005-03-22",
        effective: "2005-05-01",
        description: "Zákon upravující podmínky podnikání v elektronických komunikacích.",
        keywords: ["telekomunikace", "internet", "operátor", "ČTÚ", "čísla"],
        keyPoints: [
            "§ 63 - Smlouva s operátorem max. 24 měsíců",
            "§ 34 - Přenositelnost telefonního čísla",
            "§ 64 - Práva účastníka při reklamaci",
            "§ 118 - ČTÚ jako regulátor",
            "§ 129 - Správní delikty a pokuty"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2005-127"
    },
    {
        id: 24,
        number: "106/1999",
        title: "Zákon o svobodném přístupu k informacím",
        type: "zakon",
        category: "sprava",
        published: "1999-05-11",
        effective: "2000-01-01",
        description: "Zákon upravující právo občanů na informace od veřejných institucí.",
        keywords: ["informace", "úřad", "žádost", "transparentnost", "povinný subjekt"],
        keyPoints: [
            "§ 2 - Povinné subjekty (úřady, obce, kraje)",
            "§ 14 - Lhůta pro vyřízení žádosti 15 dnů",
            "§ 17 - Úhrada nákladů za poskytnutí informace",
            "§ 16 - Odvolání proti odmítnutí",
            "§ 8-11 - Omezení práva na informace"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/1999-106"
    },
    {
        id: 25,
        number: "128/2000",
        title: "Zákon o obcích (obecní zřízení)",
        type: "zakon",
        category: "samosprava",
        published: "2000-04-12",
        effective: "2000-11-12",
        description: "Zákon upravující postavení obcí, jejich orgány a samostatnou i přenesenou působnost.",
        keywords: ["obec", "starosta", "zastupitelstvo", "rada", "samospráva"],
        keyPoints: [
            "§ 67-98 - Zastupitelstvo obce",
            "§ 99-102 - Rada obce",
            "§ 103-108 - Starosta",
            "§ 35 - Samostatná působnost obce",
            "§ 61 - Přenesená působnost"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2000-128"
    },
    {
        id: 26,
        number: "253/2008",
        title: "Zákon o některých opatřeních proti legalizaci výnosů z trestné činnosti",
        type: "zakon",
        category: "finance",
        published: "2008-07-04",
        effective: "2008-09-01",
        description: "AML zákon proti praní špinavých peněz a financování terorismu.",
        keywords: ["AML", "praní peněz", "identifikace", "podezřelý obchod", "FAÚ"],
        keyPoints: [
            "§ 2 - Povinné osoby (banky, notáři, účetní, realitky)",
            "§ 7-8 - Identifikace a kontrola klienta",
            "§ 18 - Oznámení podezřelého obchodu",
            "§ 4 - Limit 10 000 EUR pro identifikaci",
            "§ 44 - Sankce za porušení"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2008-253"
    },
    {
        id: 27,
        number: "340/2015",
        title: "Zákon o registru smluv",
        type: "zakon",
        category: "transparentnost",
        published: "2015-12-14",
        effective: "2016-07-01",
        description: "Zákon o povinném zveřejňování smluv veřejných institucí.",
        keywords: ["registr smluv", "transparentnost", "veřejné zakázky", "zveřejnění"],
        keyPoints: [
            "§ 2 - Povinné subjekty (stát, kraje, obce, státní firmy)",
            "§ 3 - Smlouvy nad 50 000 Kč bez DPH",
            "§ 6 - Smlouva bez uveřejnění je neplatná",
            "§ 5 - Lhůta 30 dnů pro uveřejnění",
            "§ 3 odst. 2 - Výjimky z povinnosti"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2015-340"
    },
    {
        id: 28,
        number: "134/2016",
        title: "Zákon o zadávání veřejných zakázek",
        type: "zakon",
        category: "verejne_zakazky",
        published: "2016-04-19",
        effective: "2016-10-01",
        description: "Zákon upravující zadávání veřejných zakázek veřejnými zadavateli.",
        keywords: ["veřejná zakázka", "soutěž", "nabídka", "ÚOHS", "profil zadavatele"],
        keyPoints: [
            "§ 27 - Nadlimitní zakázka (nad 3,6 mil. Kč služby, 14 mil. Kč stavby)",
            "§ 26 - Podlimitní veřejná zakázka",
            "§ 129 - Zjednodušené podlimitní řízení",
            "§ 241-250 - Přezkum u ÚOHS",
            "§ 48 - Vyloučení nabídky"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2016-134"
    },
    {
        id: 29,
        number: "111/2006",
        title: "Zákon o pomoci v hmotné nouzi",
        type: "zakon",
        category: "socialni",
        published: "2006-03-14",
        effective: "2007-01-01",
        description: "Zákon o dávkách pomoci v hmotné nouzi pro osoby s nedostatečnými příjmy.",
        keywords: ["hmotná nouze", "příspěvek na živobytí", "doplatek na bydlení", "chudoba"],
        keyPoints: [
            "§ 2 - Osoba v hmotné nouzi",
            "§ 21-32 - Příspěvek na živobytí",
            "§ 33-35 - Doplatek na bydlení",
            "§ 36-37 - Mimořádná okamžitá pomoc",
            "§ 3 - Částka živobytí"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2006-111"
    },
    {
        id: 30,
        number: "121/2000",
        title: "Autorský zákon",
        type: "zakon",
        category: "dusevni_vlastnictvi",
        published: "2000-04-07",
        effective: "2000-12-01",
        description: "Zákon o právu autorském, o právech souvisejících s právem autorským.",
        keywords: ["autorské právo", "copyright", "licence", "software", "hudba"],
        keyPoints: [
            "§ 2 - Autorské dílo (literární, umělecké, vědecké)",
            "§ 9 - Vznik autorského práva okamžikem vytvoření",
            "§ 27 - Trvání autorských práv 70 let po smrti autora",
            "§ 30 - Volné užití (citace, osobní potřeba)",
            "§ 40 - Licenční smlouva"
        ],
        eSbirkaUrl: "https://www.zakonyprolidi.cz/cs/2000-121"
    }
];

// ===== App State =====
let currentFilter = 'all';
let currentSort = 'newest';
let searchQuery = '';
let displayedLaws = 10;

// ===== DOM Elements =====
const lawsGrid = document.getElementById('lawsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterTags = document.querySelectorAll('.filter-tag');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const modal = document.getElementById('lawModal');
const modalClose = document.getElementById('modalClose');

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

// ===== Filter and Sort =====
function getFilteredLaws() {
    let filtered = lawsData;

    // Category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(law => law.category === currentFilter);
    }

    // Search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(law =>
            law.title.toLowerCase().includes(query) ||
            law.description.toLowerCase().includes(query) ||
            law.keywords.some(kw => kw.toLowerCase().includes(query)) ||
            law.number.includes(query)
        );
    }

    // Sort
    switch (currentSort) {
        case 'newest':
            filtered.sort((a, b) => new Date(b.published) - new Date(a.published));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.published) - new Date(b.published));
            break;
        case 'alphabetical':
            filtered.sort((a, b) => a.title.localeCompare(b.title, 'cs'));
            break;
    }

    return filtered;
}

function handleSearch() {
    searchQuery = searchInput.value.trim();
    displayedLaws = 10;
    renderLaws();
}

// ===== Render =====
function renderLaws() {
    const filtered = getFilteredLaws();
    const toShow = filtered.slice(0, displayedLaws);

    loading.style.display = 'none';

    if (filtered.length === 0) {
        lawsGrid.innerHTML = '';
        noResults.style.display = 'block';
        loadMoreBtn.style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    loadMoreBtn.style.display = displayedLaws < filtered.length ? 'block' : 'none';

    lawsGrid.innerHTML = toShow.map(law => createLawCard(law)).join('');

    // Add click handlers
    document.querySelectorAll('.law-card').forEach(card => {
        card.addEventListener('click', () => {
            const lawId = parseInt(card.dataset.id);
            openLawModal(lawId);
        });
    });
}

function createLawCard(law) {
    const typeLabels = {
        'zakon': 'Zákon',
        'vyhlaska': 'Vyhláška',
        'narizeni': 'Nařízení vlády',
        'nalez': 'Nález ÚS'
    };

    const categoryLabels = {
        'obcanske': 'Občanské právo',
        'prace': 'Pracovní právo',
        'dane': 'Daně',
        'obchodni': 'Obchodní právo',
        'podnikani': 'Podnikání',
        'sprava': 'Veřejná správa',
        'trestni': 'Trestní právo',
        'procesni': 'Procesní právo',
        'stavebnictvi': 'Stavebnictví',
        'nemovitosti': 'Nemovitosti',
        'ucetnictvi': 'Účetnictví',
        'gdpr': 'GDPR',
        'insolvence': 'Insolvence',
        'zdravotnictvi': 'Zdravotnictví',
        'vzdelavani': 'Vzdělávání',
        'doprava': 'Doprava',
        'vezenstvi': 'Vězeňství',
        'socialni': 'Sociální',
        'technicke': 'Technické',
        'samosprava': 'Samospráva',
        'finance': 'Finance',
        'transparentnost': 'Transparentnost',
        'verejne_zakazky': 'Veřejné zakázky',
        'dusevni_vlastnictvi': 'Duševní vlastnictví'
    };

    const effectiveDate = new Date(law.effective);
    const publishedDate = new Date(law.published);
    const now = new Date();
    const isEffective = effectiveDate <= now;

    return `
        <article class="law-card" data-id="${law.id}">
            <div class="law-header">
                <span class="law-number">${law.number} Sb.</span>
                <span class="law-type">${typeLabels[law.type] || 'Zákon'}</span>
            </div>
            <h3 class="law-title">${law.title}</h3>
            <div class="law-meta">
                <span class="law-meta-item">
                    📅 ${formatDate(publishedDate)}
                </span>
                <span class="law-meta-item">
                    ${isEffective ? '✅' : '⏳'} Účinnost: ${formatDate(effectiveDate)}
                </span>
            </div>
            <div class="law-tags">
                <span class="law-tag">${categoryLabels[law.category] || law.category}</span>
            </div>
        </article>
    `;
}

function formatDate(date) {
    return date.toLocaleDateString('cs-CZ', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });
}

// ===== Modal =====
function openLawModal(lawId) {
    const law = lawsData.find(l => l.id === lawId);
    if (!law) return;

    const typeLabels = {
        'zakon': 'Zákon',
        'vyhlaska': 'Vyhláška',
        'narizeni': 'Nařízení vlády',
        'nalez': 'Nález ÚS'
    };

    document.getElementById('modalBadge').textContent = typeLabels[law.type] || 'Zákon';
    document.getElementById('modalTitle').textContent = law.title;

    const effectiveDate = new Date(law.effective);
    const publishedDate = new Date(law.published);
    const now = new Date();
    const isEffective = effectiveDate <= now;

    // Generate key points HTML
    let keyPointsHtml = '';
    if (law.keyPoints && law.keyPoints.length > 0) {
        keyPointsHtml = `
            <div class="key-points-section">
                <h4 class="key-points-title">Klíčové paragrafy</h4>
                <ul class="key-points-list">
                    ${law.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-info">
            <div class="modal-info-item">
                <div class="modal-info-label">Číslo předpisu</div>
                <div class="modal-info-value">${law.number} Sb.</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Publikováno</div>
                <div class="modal-info-value">${formatDate(publishedDate)}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Účinnost</div>
                <div class="modal-info-value">${formatDate(effectiveDate)} ${isEffective ? '(platný)' : '(dosud neúčinný)'}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">Klíčová slova</div>
                <div class="modal-info-value">${law.keywords.join(', ')}</div>
            </div>
        </div>
        <p class="modal-description">${law.description}</p>
        ${keyPointsHtml}
    `;

    // Use the direct eSbirkaUrl
    document.getElementById('modalLinkFull').href = law.eSbirkaUrl;
    document.getElementById('modalLinkPdf').href = law.eSbirkaUrl;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLawModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====
function initEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Search
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Filter tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentFilter = tag.dataset.category;
            displayedLaws = 10;
            renderLaws();
        });
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderLaws();
    });

    // Load more
    loadMoreBtn.addEventListener('click', () => {
        displayedLaws += 10;
        renderLaws();
    });

    // Modal close
    modalClose.addEventListener('click', closeLawModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLawModal();
    });

    // Back to top
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLawModal();
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    renderLaws();
});

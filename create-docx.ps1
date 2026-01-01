# Script to create DOCX templates using Word COM
$ErrorActionPreference = "Stop"

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    Write-Host "Word is available - creating templates..."

    $templatesDir = "C:\Users\Plautus\Desktop\TestClaude\CeskeZakony\sablony-docx"

    # Function to create a document
    function Create-Template {
        param($filename, $title, $content)

        $doc = $word.Documents.Add()
        $selection = $word.Selection

        # Title
        $selection.Font.Size = 16
        $selection.Font.Bold = $true
        $selection.ParagraphFormat.Alignment = 1 # Center
        $selection.TypeText($title)
        $selection.TypeParagraph()
        $selection.TypeParagraph()

        # Content
        $selection.Font.Size = 11
        $selection.Font.Bold = $false
        $selection.ParagraphFormat.Alignment = 0 # Left

        foreach ($line in $content -split "`n") {
            if ($line -match "^\[.*\]$") {
                $selection.Font.Color = 255 # Red for placeholders
                $selection.Font.Bold = $true
            } else {
                $selection.Font.Color = 0 # Black
                $selection.Font.Bold = $false
            }
            $selection.TypeText($line)
            $selection.TypeParagraph()
        }

        $filepath = Join-Path $templatesDir $filename
        $doc.SaveAs([ref]$filepath, [ref]16) # 16 = wdFormatDocumentDefault (.docx)
        $doc.Close()
        Write-Host "Created: $filename"
    }

    # ========== SMLOUVY ==========

    # 1. Kupni smlouva
    $content = @"
uzavřená dle § 2079 a násl. zákona č. 89/2012 Sb., občanského zákoníku

I. SMLUVNÍ STRANY

Prodávající:
Jméno/Název firmy: [DOPLŇTE NÁZEV]
IČO: [DOPLŇTE IČO]
DIČ: [DOPLŇTE DIČ]
Sídlo/Adresa: [DOPLŇTE ADRESU]
Zastoupený: [DOPLŇTE JMÉNO JEDNATELE]
Bankovní spojení: [DOPLŇTE NÁZEV BANKY]
Číslo účtu: [DOPLŇTE ČÍSLO ÚČTU]
(dále jen "Prodávající")

Kupující:
Jméno/Název firmy: [DOPLŇTE NÁZEV]
IČO: [DOPLŇTE IČO]
DIČ: [DOPLŇTE DIČ]
Sídlo/Adresa: [DOPLŇTE ADRESU]
Zastoupený: [DOPLŇTE JMÉNO]
(dále jen "Kupující")


II. PŘEDMĚT SMLOUVY

1. Prodávající se touto smlouvou zavazuje odevzdat Kupujícímu následující předmět koupě a umožnit mu nabýt vlastnické právo k němu:

Popis předmětu: [DOPLŇTE PODROBNÝ POPIS VĚCI]
Výrobní číslo/identifikace: [DOPLŇTE POKUD EXISTUJE]
Stav předmětu: [NOVÝ/POUŽITÝ - UPŘESNĚTE]
Příslušenství: [DOPLŇTE SEZNAM PŘÍSLUŠENSTVÍ]

2. Kupující se zavazuje předmět koupě převzít a zaplatit za něj sjednanou kupní cenu.


III. KUPNÍ CENA A PLATEBNÍ PODMÍNKY

1. Smluvní strany se dohodly na kupní ceně ve výši:
   [DOPLŇTE ČÁSTKU] Kč bez DPH
   DPH [DOPLŇTE SAZBU] %: [DOPLŇTE ČÁSTKU] Kč
   Celkem včetně DPH: [DOPLŇTE ČÁSTKU] Kč
   (slovy: [DOPLŇTE ČÁSTKU SLOVY] korun českých)

2. Kupní cena bude uhrazena následujícím způsobem:
   [ ] Hotově při podpisu této smlouvy
   [ ] Bankovním převodem na účet Prodávajícího do [DOPLŇTE POČET] dnů od podpisu smlouvy
   [ ] Záloha ve výši [DOPLŇTE] Kč při podpisu, doplatek při předání

3. V případě prodlení s úhradou kupní ceny je Kupující povinen zaplatit Prodávajícímu smluvní úrok z prodlení ve výši 0,05 % z dlužné částky za každý den prodlení.


IV. PŘEDÁNÍ PŘEDMĚTU KOUPĚ

1. Prodávající předá předmět koupě Kupujícímu dne [DOPLŇTE DATUM] na adrese [DOPLŇTE MÍSTO PŘEDÁNÍ].

2. O předání předmětu koupě bude sepsán předávací protokol podepsaný oběma smluvními stranami, který bude obsahovat:
   - popis předávaného předmětu
   - jeho stav v okamžiku předání
   - seznam příslušenství
   - případné zjištěné vady

3. Nebezpečí škody na předmětu koupě přechází na Kupujícího okamžikem jeho převzetí.

4. Vlastnické právo k předmětu koupě přechází na Kupujícího okamžikem úplného zaplacení kupní ceny.


V. PROHLÁŠENÍ PRODÁVAJÍCÍHO

1. Prodávající prohlašuje, že:
   a) je výlučným vlastníkem předmětu koupě a je oprávněn s ním volně nakládat
   b) na předmětu koupě neváznou žádná práva třetích osob, zejména zástavní práva, věcná břemena ani jiné právní vady
   c) předmět koupě nemá žádné vady, které by bránily jeho řádnému užívání k účelu, k němuž je určen
   d) předmět koupě odpovídá popisu uvedenému v článku II. této smlouvy

2. Prodávající upozorňuje Kupujícího na následující skutečnosti týkající se předmětu koupě: [DOPLŇTE PŘÍPADNÁ UPOZORNĚNÍ NEBO NAPIŠTE "ŽÁDNÉ"]


VI. ODPOVĚDNOST ZA VADY

1. Prodávající odpovídá za vady, které má předmět koupě v okamžiku přechodu nebezpečí škody na Kupujícího, i když se projeví až později.

2. Kupující je povinen prohlédnout předmět koupě při jeho převzetí a oznámit Prodávajícímu bez zbytečného odkladu zjištěné vady.

3. Skryté vady je Kupující povinen oznámit Prodávajícímu bez zbytečného odkladu poté, co je mohl při dostatečné péči zjistit, nejpozději však do dvou let od převzetí předmětu koupě.

4. Při zjištění vady má Kupující právo požadovat:
   a) odstranění vady opravou
   b) přiměřenou slevu z kupní ceny
   c) odstoupení od smlouvy, je-li vada podstatným porušením smlouvy


VII. ODSTOUPENÍ OD SMLOUVY

1. Od této smlouvy může odstoupit:
   a) Kupující, pokud Prodávající nepředá předmět koupě ani v dodatečně poskytnuté přiměřené lhůtě
   b) Prodávající, pokud Kupující nezaplatí kupní cenu ani v dodatečně poskytnuté přiměřené lhůtě
   c) kterákoli strana při podstatném porušení smlouvy druhou stranou

2. Odstoupení od smlouvy musí být učiněno písemně a doručeno druhé smluvní straně.


VIII. ZÁVĚREČNÁ USTANOVENÍ

1. Tato smlouva nabývá platnosti a účinnosti dnem podpisu oběma smluvními stranami.

2. Změny a doplňky této smlouvy jsou možné pouze písemnou formou jako číslované dodatky podepsané oběma stranami.

3. Smlouva je vyhotovena ve dvou stejnopisech, z nichž každá smluvní strana obdrží po jednom.

4. Právní vztahy touto smlouvou výslovně neupravené se řídí příslušnými ustanoveními občanského zákoníku a dalších právních předpisů České republiky.

5. Smluvní strany prohlašují, že si smlouvu přečetly, jejímu obsahu rozumějí a na důkaz svobodné a vážné vůle připojují své podpisy.


V [DOPLŇTE MÍSTO] dne [DOPLŇTE DATUM]



_______________________________          _______________________________
         Prodávající                              Kupující
"@
    Create-Template "kupni-smlouva.docx" "KUPNÍ SMLOUVA" $content

    # 2. Najemni smlouva
    $content = @"
uzavřená dle § 2235 a násl. zákona č. 89/2012 Sb., občanského zákoníku

I. SMLUVNÍ STRANY

Pronajímatel:
Jméno a příjmení: [DOPLŇTE JMÉNO]
Datum narození: [DOPLŇTE DATUM NAROZENÍ]
Rodné číslo: [DOPLŇTE RODNÉ ČÍSLO]
Trvalé bydliště: [DOPLŇTE ADRESU]
Telefon: [DOPLŇTE TELEFON]
E-mail: [DOPLŇTE E-MAIL]
Číslo účtu: [DOPLŇTE ČÍSLO ÚČTU]
(dále jen "Pronajímatel")

Nájemce:
Jméno a příjmení: [DOPLŇTE JMÉNO]
Datum narození: [DOPLŇTE DATUM NAROZENÍ]
Rodné číslo: [DOPLŇTE RODNÉ ČÍSLO]
Trvalé bydliště: [DOPLŇTE ADRESU]
Telefon: [DOPLŇTE TELEFON]
E-mail: [DOPLŇTE E-MAIL]
(dále jen "Nájemce")


II. PŘEDMĚT NÁJMU

1. Pronajímatel je vlastníkem nemovitosti na adrese:
   [DOPLŇTE ULICI A ČÍSLO POPISNÉ]
   [DOPLŇTE PSČ A MĚSTO]

   zapsané v katastru nemovitostí vedeném Katastrálním úřadem pro [DOPLŇTE KRAJ], Katastrální pracoviště [DOPLŇTE MĚSTO], na LV č. [DOPLŇTE ČÍSLO LV], pro katastrální území [DOPLŇTE K.Ú.].

2. Předmětem nájmu je byt č. [DOPLŇTE ČÍSLO BYTU] nacházející se v [DOPLŇTE PATRO] nadzemním podlaží výše uvedeného domu.

3. Byt sestává z:
   - [DOPLŇTE POČET] obytných místností
   - kuchyně / kuchyňského koutu
   - koupelny
   - WC (samostatné / společné s koupelnou)
   - předsíně
   - [DOPLŇTE DALŠÍ MÍSTNOSTI]

4. Celková podlahová plocha bytu činí [DOPLŇTE] m².

5. Součástí předmětu nájmu je:
   - sklep č. [DOPLŇTE ČÍSLO]
   - parkovací místo č. [DOPLŇTE ČÍSLO] / není
   - balkon / lodžie / terasa / není

6. Vybavení bytu je uvedeno v předávacím protokolu, který tvoří přílohu č. 1 této smlouvy.


III. ÚČEL NÁJMU

1. Pronajímatel přenechává Nájemci byt uvedený v čl. II. do užívání výhradně za účelem bydlení.

2. Nájemce bude byt užívat společně s těmito osobami:
   [DOPLŇTE JMÉNO, PŘÍJMENÍ A VZTAH K NÁJEMCI]
   [DOPLŇTE DALŠÍ OSOBY]

3. Nájemce není oprávněn přijmout do bytu další osobu bez předchozího písemného souhlasu Pronajímatele, s výjimkou osob blízkých.


IV. DOBA NÁJMU

1. Nájem se sjednává na dobu:
   [ ] URČITOU od [DOPLŇTE DATUM] do [DOPLŇTE DATUM]
   [ ] NEURČITOU s počátkem od [DOPLŇTE DATUM]

2. V případě nájmu na dobu určitou se nájem automaticky prodlužuje za stejných podmínek na tutéž dobu, pokud Pronajímatel písemně neoznámí Nájemci nejpozději 3 měsíce před uplynutím sjednané doby, že nájem končí.


V. NÁJEMNÉ A ÚHRADY ZA SLUŽBY

1. Nájemné:
   Měsíční nájemné činí [DOPLŇTE ČÁSTKU] Kč
   (slovy: [DOPLŇTE SLOVY] korun českých)

2. Zálohy na služby spojené s užíváním bytu:
   - elektřina: [DOPLŇTE] Kč / je hrazena přímo dodavateli
   - plyn: [DOPLŇTE] Kč / je hrazen přímo dodavateli
   - vodné a stočné: [DOPLŇTE] Kč
   - teplo a teplá voda: [DOPLŇTE] Kč
   - odvoz odpadu: [DOPLŇTE] Kč
   - společná elektřina: [DOPLŇTE] Kč
   - internet/TV: [DOPLŇTE] Kč / není součástí
   Celkem zálohy na služby: [DOPLŇTE ČÁSTKU] Kč

3. Celková měsíční platba: [DOPLŇTE ČÁSTKU] Kč

4. Nájemné a zálohy na služby jsou splatné vždy do [DOPLŇTE DEN] dne příslušného kalendářního měsíce, a to bezhotovostním převodem na účet Pronajímatele uvedený v záhlaví této smlouvy. Jako variabilní symbol bude uvedeno číslo bytu.

5. Vyúčtování služeb provede Pronajímatel jednou ročně, nejpozději do 4 měsíců po skončení zúčtovacího období.


VI. JISTOTA (KAUCE)

1. Nájemce skládá při podpisu této smlouvy Pronajímateli jistotu (kauci) ve výši [DOPLŇTE ČÁSTKU] Kč, což odpovídá [DOPLŇTE POČET] měsíčním nájmům.

2. Jistota slouží k zajištění:
   - úhrady nájemného a služeb
   - náhrady škody na bytě nebo jeho vybavení
   - nákladů na uvedení bytu do původního stavu při skončení nájmu

3. Pronajímatel vrátí Nájemci jistotu nebo její část sníženou o případné pohledávky do 1 měsíce od skončení nájmu a předání bytu.


VII. PRÁVA A POVINNOSTI PRONAJÍMATELE

1. Pronajímatel je povinen:
   a) předat Nájemci byt ve stavu způsobilém k řádnému užívání
   b) zajistit Nájemci nerušené užívání bytu
   c) udržovat byt a dům ve stavu způsobilém k užívání
   d) provádět běžnou údržbu a opravy společných částí domu
   e) provádět na své náklady opravy bytu, nejde-li o drobné opravy

2. Pronajímatel má právo:
   a) navštívit byt za účelem kontroly po předchozí dohodě s Nájemcem
   b) vstoupit do bytu bez souhlasu Nájemce v případě nebezpečí z prodlení


VIII. PRÁVA A POVINNOSTI NÁJEMCE

1. Nájemce je povinen:
   a) užívat byt řádně v souladu s nájemní smlouvou
   b) dodržovat pravidla obvyklá pro chování v domě a rozumné pokyny Pronajímatele
   c) hradit řádně a včas nájemné a zálohy na služby
   d) provádět a hradit drobné opravy a běžnou údržbu bytu
   e) oznámit Pronajímateli bez zbytečného odkladu potřebu oprav
   f) umožnit Pronajímateli přístup do bytu za účelem provedení oprav
   g) pojistit svůj majetek v bytě

2. Nájemce nesmí bez písemného souhlasu Pronajímatele:
   a) provádět stavební úpravy ani jiné podstatné změny v bytě
   b) přenechat byt nebo jeho část do podnájmu
   c) chovat v bytě zvířata (s výjimkou drobných zvířat v klecích/akváriích)


IX. SKONČENÍ NÁJMU

1. Nájem končí:
   a) uplynutím doby, na kterou byl sjednán
   b) písemnou dohodou smluvních stran
   c) písemnou výpovědí
   d) smrtí Nájemce, nepřejde-li nájem na člena domácnosti

2. Výpovědní doba činí 3 měsíce a počíná běžet prvním dnem kalendářního měsíce následujícího po měsíci, v němž byla výpověď doručena druhé straně.

3. Pronajímatel může vypovědět nájem pouze z důvodů stanovených zákonem.

4. Při skončení nájmu je Nájemce povinen:
   a) byt vyklidit a předat Pronajímateli ve stavu odpovídajícím běžnému opotřebení
   b) odstranit změny, které v bytě provedl, pokud o to Pronajímatel požádá
   c) předat všechny klíče od bytu a domu


X. ZÁVĚREČNÁ USTANOVENÍ

1. Tato smlouva nabývá platnosti a účinnosti dnem podpisu oběma smluvními stranami.

2. Nedílnou součástí této smlouvy jsou přílohy:
   - Příloha č. 1: Předávací protokol
   - Příloha č. 2: Fotodokumentace bytu

3. Tato smlouva je vyhotovena ve dvou stejnopisech s platností originálu, z nichž každá strana obdrží jeden.

4. Vztahy neupravené touto smlouvou se řídí občanským zákoníkem.


V [DOPLŇTE MÍSTO] dne [DOPLŇTE DATUM]



_______________________________          _______________________________
         Pronajímatel                              Nájemce
"@
    Create-Template "najemni-smlouva.docx" "NÁJEMNÍ SMLOUVA NA BYT" $content

    Write-Host "`nFirst 2 templates created. Creating more..."

    $word.Quit()
    Write-Host "Templates created successfully!"

} catch {
    Write-Host "Error: $_"
    if ($word) { $word.Quit() }
}

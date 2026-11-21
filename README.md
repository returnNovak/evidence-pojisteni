# Evidence pojištění

Jednoduchá webová aplikace pro evidenci pojištěných osob. Projekt vznikl jako praktické procvičení JavaScriptu, objektově orientovaného programování (OOP) a architektury MVC.

## Funkce aplikace

- vytvoření nového pojištěnce,
- evidence jména, příjmení, věku a telefonního čísla,
- zobrazení seznamu všech evidovaných pojištěnců,
- základní validace zadaných údajů,
- zobrazení aktuálního počtu pojištěnců.

Údaje se ukládají do pole v paměti JavaScriptu. Aplikace zatím nepoužívá databázi ani trvalé úložiště, takže po obnovení stránky se nově přidané záznamy ztratí. Po spuštění se načtou tři ukázkové záznamy ze souboru `sampleData.js`.

## Použité technologie

- HTML5
- CSS3
- JavaScript – ES Modules a třídy
- lokálně uložené písmo Inter
- SVG favicon

Aplikace nevyžaduje instalaci npm balíčků ani backendový server. Pro správné načítání JavaScriptových ES modulů ji spusťte přes lokální webový server, například rozšíření Live Server ve Visual Studio Code.

## Struktura projektu

```text
evidence-pojisteni_zaklad/
├── index.html
├── README.md
├── POSTUP.txt
├── .gitignore
├── assets/
│   └── fonts/
│       └── Inter/
│           ├── Inter-VariableFont_opsz,wght.ttf
│           ├── Inter-Italic-VariableFont_opsz,wght.ttf
│           └── OFL.txt
├── css/
│   └── style.css
├── img/
│   └── favicon.svg
└── js/
    ├── app.js
    ├── controllers/
    │   └── InsuredPersonController.js
    ├── data/
    │   └── sampleData.js
    ├── models/
    │   ├── InsuredPerson.js
    │   └── InsuredPersonRepository.js
    └── views/
        └── InsuredPersonView.js
```

## Architektura a odpovědnosti tříd

### Model – `InsuredPerson`

Reprezentuje jednu pojištěnou osobu. Konstruktor inicializuje vlastnosti `firstName`, `lastName`, `age` a `phone`. Metoda `toString()` vrací textovou podobu pojištěnce.

### Repository – `InsuredPersonRepository`

Spravuje kolekci pojištěnců uloženou v poli `persons`. Metoda `add()` vytvoří instanci `InsuredPerson` a vloží ji do kolekce. Metoda `getAll()` vrací kopii pole a `getCount()` vrací počet záznamů.

### View – `InsuredPersonView`

Zodpovídá za zobrazení seznamu pojištěnců a aktualizaci počítadla v HTML. Dostává identifikátory potřebných HTML elementů v konstruktoru.

### Controller – `InsuredPersonController`

Zpracovává odeslání formuláře, načítá hodnoty, kontroluje vstupy a propojuje Repository s View. Repository a View dostává jako závislosti v konstruktoru.

### Composition a sestavení aplikace

Soubor `js/app.js` vytváří jednotlivé objekty a propojuje je. Controller dostává již vytvořené instance Repository a View – jejich spolupráce je tak sestavena z menších samostatných částí.

## Spuštění

1. Otevřete složku projektu ve Visual Studio Code.
2. Spusťte `index.html` pomocí lokálního webového serveru, například Live Server.
3. V aplikaci vyplňte formulář a stiskněte **Přidat pojištěnce**.
4. Nový záznam se zobrazí v tabulce a aktualizuje se počítadlo.

## Rozsah verze 1.0

Verze 1.0 pokrývá minimální požadavky zadání: vytvoření pojištěného, evidenci požadovaných údajů, zobrazení seznamu a ukládání objektů do kolekce v paměti JavaScriptu. Rozšířené funkce, například úprava a mazání záznamů, databáze nebo trvalé ukládání dat, nejsou součástí této základní verze.


export class InsuredPersonView {
    constructor(containerId, countElementId) {
        // Uložíme si HTML element pro tabulku.
        this.container = document.getElementById(containerId);

        // Uložíme si HTML element pro statistickou kartu.
        this.countElement = document.getElementById(countElementId);

        if (!this.container) {
            throw new Error(`HTML element "${containerId}" nebyl nalezen.`);
        }

        if (!this.countElement) {
            throw new Error(`HTML element "${countElementId}" nebyl nalezen.`);
        }
    }

    render(persons) {
        // Aktualizujeme počet pojištěnců.
        this.countElement.textContent = persons.length;

        // Odstraníme předchozí obsah kontejneru.
        this.container.replaceChildren();

        // Pokud nejsou žádná data, zobrazíme informační zprávu.
        if (persons.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'Zatím nejsou evidováni žádní pojištěnci.';

            this.container.append(message);
            return;
        }

        // Vytvoříme tabulku pomocí bezpečného DOM API.
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Hlavička tabulky.
        const headerRow = document.createElement('tr');

        const headers = ['#', 'Jméno a příjmení', 'Věk', 'Telefon'];

        headers.forEach((headerText) => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.append(th);
        });

        thead.append(headerRow);

        // Vytvoříme řádky jednotlivých pojištěnců.
        persons.forEach((person, index) => {
            const row = document.createElement('tr');

            // Každá hodnota se vkládá jako text, nikoliv HTML.
            const values = [
                index + 1,
                `${person.firstName} ${person.lastName}`,
                `${person.age} let`,
                person.phone
            ];

            values.forEach((value) => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.append(cell);
            });

            tbody.append(row);
        });

        table.append(thead, tbody);
        this.container.append(table);
    }
}

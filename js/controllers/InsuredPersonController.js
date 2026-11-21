
export class InsuredPersonController {
    constructor(repository, view) {
        this.repository = repository;
        this.view = view;

        // Formulář získáme podle jeho ID z HTML.
        this.form = document.getElementById('person-form');

        if (!this.form) {
            throw new Error('Formulář person-form nebyl nalezen.');
        }

        this.init();
    }

    init() {
        // Controller reaguje na odeslání formuláře.
        this.form.addEventListener('submit', (event) => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(this.form);

            const firstName = formData.get('firstName').trim();
            const lastName = formData.get('lastName').trim();
            const age = Number(formData.get('age'));
            const phone = formData.get('phone').trim();

            // Před uložením ověříme správnost vstupních údajů.
            if (!this.validate(firstName, lastName, age, phone)) {
                return;
            }

            // Repository vytvoří pojištěnce a vrátí jeho instanci.
            const person = this.repository.add(firstName, lastName, age, phone);
            // Ověříme textový výpis objektu pomocí jeho metody toString().
            console.log(person.toString());

            // Aktualizujeme seznam i statistickou kartu.
            this.view.render(this.repository.getAll());

            // Po úspěšném přidání vyčistíme formulář.
            this.form.reset();

            console.log('Pojištěnec byl úspěšně přidán.');

        } catch (error) {
            console.error('Chyba při přidávání pojištěnce:', error);
            alert('Pojištěnce se nepodařilo přidat.');
        }
    }

    validate(firstName, lastName, age, phone) {
        if (!firstName || !lastName) {
            alert('Vyplňte jméno a příjmení.');
            return false;
        }

        if (!Number.isInteger(age) || age < 1 || age > 120) {
            alert('Věk musí být celé číslo od 1 do 120.');
            return false;
        }

        // Povolíme mezinárodní předvolbu, číslice a mezery.
        const phonePattern = /^\+?[0-9][0-9\s]{7,18}$/;

        if (!phonePattern.test(phone)) {
            alert('Zadejte platné telefonní číslo.');
            return false;
        }

        return true;
    }
}

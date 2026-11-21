import { InsuredPersonRepository } from './models/InsuredPersonRepository.js';
import { sampleData } from './data/sampleData.js';
import { InsuredPersonView } from './views/InsuredPersonView.js';
import { InsuredPersonController } from './controllers/InsuredPersonController.js';

// Vytvoříme Repository, které spravuje kolekci pojištěnců.
const repository = new InsuredPersonRepository();

// Načteme ukázková data do kolekce.
sampleData.forEach(({ firstName, lastName, age, phone }) => {
    repository.add(firstName, lastName, age, phone);
});

// Vytvoříme View a předáme mu oba HTML elementy.
const personView = new InsuredPersonView(
    'persons-container',
    'persons-count'
);

// Zobrazíme počáteční seznam a aktualizujeme statistiku.
personView.render(repository.getAll());

// Controller propojí formulář, Repository a View.
const personController = new InsuredPersonController(
    repository,
    personView
);
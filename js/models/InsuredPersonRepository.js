import { InsuredPerson } from './InsuredPerson.js';

export class InsuredPersonRepository {
    constructor() {
        // Kolekce uchovává objekty pouze v paměti aplikace.
        this.persons = [];
    }

    add(firstName, lastName, age, phone) {
        const person = new InsuredPerson(firstName, lastName, age, phone);

        this.persons.push(person);

        return person;
    }

    getAll() {
        // Vracíme kopii pole, aby vnější kód nemohl měnit interní kolekci.
        return [...this.persons];
    }

    getCount() {
        return this.persons.length;
    }
}
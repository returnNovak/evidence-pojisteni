export class InsuredPerson {
    constructor(firstName, lastName, age, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
    }

    // Vrací čitelný textový zápis pojištěnce.
    toString() {
        return `${this.firstName} ${this.lastName}, ${this.age} let, tel. ${this.phone}`;
    }
}
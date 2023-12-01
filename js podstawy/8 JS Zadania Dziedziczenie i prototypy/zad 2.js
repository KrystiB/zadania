class Person {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Teacher extends Person {
    constructor(name, surname) {
        super(name, surname);
    }
    teach(subject) {
        return `${this.name} ${this.surname} is now teaching ${subject}`;
    }
}
const teacher = new Teacher('Natalia', 'Jakas');
console.log(teacher.teach('Angielski'));

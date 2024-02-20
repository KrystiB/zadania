"use strict";
class User {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}
const people = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Scientist'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}`);
}
console.log('People:');
people.forEach(logPerson);

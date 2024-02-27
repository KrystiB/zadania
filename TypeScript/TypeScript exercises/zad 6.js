"use strict";
/*

Wprowadzenie:

    Czas na filtrowanie danych! Aby być elastycznym
    filtrujemy użytkowników za pomocą szeregu kryteriów i
    zwracamy tylko tych spełniających wszystkie kryteria.
    Nie potrzebujemy jeszcze administratorów, filtrujemy tylko użytkowników.

Ćwiczenie:

    Bez powielania struktur typów, zmodyfikuj definicję funkcji
    filterUsers tak, abyśmy mogli
    przekazywać tylko te kryteria, które są potrzebne,
    a nie całe informacje o użytkowniku, ponieważ jest to
    wymagane zgodnie z typowaniem.

Ćwiczenie bonusowe o wyższym poziomie trudności:

    Wyklucz "typ" z kryteriów filtrowania.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOfAge23 = exports.usersOfAge23 = exports.filterPersons = exports.logPerson = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' },
];
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}
exports.logPerson = logPerson;
function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        let criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

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
exports.filterUsers = exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball',
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator',
    },
];
const isAdmin = (person) => person.type === 'admin';
exports.isAdmin = isAdmin;
const isUser = (person) => person.type === 'user';
exports.isUser = isUser;
function logPerson(person) {
    let additionalInformation = '';
    if ((0, exports.isAdmin)(person)) {
        additionalInformation = person.role;
    }
    if ((0, exports.isUser)(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
function filterUsers(persons, criteria) {
    return persons.filter(exports.isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterUsers = filterUsers;
console.log('Users of age 23:');
filterUsers(exports.persons, {
    age: 23,
}).forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types

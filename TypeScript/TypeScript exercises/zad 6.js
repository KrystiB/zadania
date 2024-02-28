"use strict";
/*

Wprowadzenie:

    Wymagania dotyczące filtrowania wzrosły. Musimy być
    być w stanie filtrować każdy rodzaj osób.

Ćwiczenie:

    Popraw typowanie dla filterPersons tak, aby mógł filtrować użytkowników
    i zwracał User[] gdy personType='user' i zwracał Admin[]
    gdy personType='admin'. Również filterPersons powinien akceptować
    częściowy typ User/Admin zgodnie z personType.
    Argument `criteria` powinien zachowywać się zgodnie z wartością argumentu
    wartość argumentu `personType`. Pole `type` nie jest dozwolone w polu
    polu `criteria`.

Ćwiczenie bonusowe o wyższym poziomie trudności:

    Zaimplementuj funkcję `getObjectKeys()`, która zwraca bardziej
    dogodny wynik dla dowolnego podanego argumentu, tak aby nie trzeba było
    nie trzeba go rzutować.

    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOfAge23 = exports.usersOfAge23 = exports.filterPersons = exports.logPerson = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
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

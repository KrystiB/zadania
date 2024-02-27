"use strict";
/*

Wprowadzenie:

    Ponieważ wprowadziliśmy "typ" zarówno dla użytkownika, jak i administratora
    teraz łatwiej jest je rozróżnić.
    Po wyodrębnieniu logiki sprawdzania typu obiektu
    do oddzielnych funkcji isUser i isAdmin - funkcja
    funkcja logPerson otrzymała nowe błędy typu.

Ćwiczenie:

    Zastanów się, jak pomóc TypeScriptowi zrozumieć typy w tej sytuacji
    w tej sytuacji i zastosować niezbędne poprawki.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person) {
    return person.type === 'admin';
}
exports.isAdmin = isAdmin;
function isUser(person) {
    return person.type === 'user';
}
exports.isUser = isUser;
function logPerson(person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

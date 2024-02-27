/*

Wprowadzenie:

    Wszystkim 2 użytkownikom spodobał się pomysł społeczności. Powinniśmy pójść
    do przodu i wprowadzić jakiś porządek. W końcu jesteśmy w Niemczech.
    Dodajmy kilku administratorów.

    Początkowo mieliśmy tylko użytkowników w bazie danych in-memory. Po
    wprowadzeniu administratorów, musimy naprawić typy, tak aby
    wszystko dobrze ze sobą współpracowało.

Ćwiczenie:

    Brakuje typu "Person", zdefiniuj go i użyj w tablicy persons i funkcji logPerson.
    w tablicy osób i funkcji logPerson, aby naprawić wszystkie błędy TS.
    wszystkie błędy TS.

*/

interface User {
    name: string;
    age: number;
    occupation?: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

/*

Wprowadzenie:

    Ponieważ mamy już niektóre z dodatkowych
    informacje o naszych użytkownikach, dobrym pomysłem jest
    aby wyświetlić je w ładny sposób.

Ćwiczenie:

    Popraw błędy typu w funkcji logPerson.

    Funkcja logPerson powinna akceptować zarówno User jak i Admin
    i powinna wyświetlać odpowiednie informacje zgodnie z
    wejście: zawód dla użytkownika i rola dla administratora.

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
        occupation: 'Chimney sweep',
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
];

export function logPerson(person: Person) {
    let additionalInformation: unknown;
    if ('role' in person && person.role !== undefined) {
        additionalInformation = person.role;
    } else if ('occupation' in person && person.occupation !== undefined) {
        additionalInformation = person.occupation;
    }
    if (additionalInformation !== undefined) {
        console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
    } else {
        console.log(` - ${person.name}, ${person.age}`);
    }
}

persons.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

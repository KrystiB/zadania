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

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' },
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${
            person.type === 'admin' ? person.role : person.occupation
        }`
    );
}

export function filterPersons<T extends Person>(
    persons: T[],
    personType: 'user' | 'admin',
    criteria: Partial<User>,
): T[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

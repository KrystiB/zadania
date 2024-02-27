/*

Wprowadzenie:

    Filtrowanie zostało całkowicie usunięte z projektu.
    Okazało się, że ta funkcja po prostu nie była potrzebna
    dla użytkownika końcowego i spędziliśmy dużo czasu tylko dlatego, że
    nasz kierownik biura kazał nam to zrobić. Następnym razem powinniśmy
    zamiast tego posłuchać kierownictwa produktu.

    W każdym razie mamy nowy plan. Przyjaciel CEO, Nick, powiedział nam
    że jeśli od czasu do czasu będziemy losowo zamieniać nazwy użytkowników
    w społeczności, będzie to bardzo zabawne i projekt na pewno odniesie sukces!
    na pewno odniesie sukces!

Ćwiczenie:

    Zaimplementuj swap, który otrzymuje 2 osoby i zwraca je w odwrotnej kolejności.
    w odwrotnej kolejności. Sama funkcja już istnieje.
    już istnieje. Musimy tylko dostarczyć jej odpowiednie typy.
    Ta funkcja nie powinna być ograniczona tylko do typów
    Person, wpiszmy ją tak, aby działała z dowolnymi dwoma typami
    określony.

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
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
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
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// https://www.typescriptlang.org/docs/handbook/2/generics.html

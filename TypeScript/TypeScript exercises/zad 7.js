"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function logUser(user) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}
function logAdmin(admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}
const admins = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];
const users = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];
function swap(v1, v2) {
    return [v2, v1];
}
exports.swap = swap;
function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}
function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}
function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}
function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}
function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}
[test1, test2, test3, test4, test5].forEach((test) => test());
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// https://www.typescriptlang.org/docs/handbook/2/generics.html

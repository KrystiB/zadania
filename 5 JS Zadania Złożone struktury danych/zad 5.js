let names = new Map([['Kacper', '23'], ['Mateusz', '74'], ['Jakub', '21']]);

let names2 = new Map();
names2.set('Kacper', '23').set('Jakub', '21').set('Mateusz', '74');

for (let name of names.keys()) {
    console.log(name);
}
for (let age of names.values()) {
    console.log(age);
}
for (let entry of names.entries()) {
    console.log(...entry);
}
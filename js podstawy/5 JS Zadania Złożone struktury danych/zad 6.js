let map = new Map([
    ['Dagger', '04-06-1990'],
    ['Dev', '01-12-1999'],
    ['JS-coder', '09-09-2000'],
    ['Python-Coder', '01-01-2002'],
    ['Mike', '28-04-1960'],
]);

map.set('king', '07-06-2000').set('kong', '02-05-1997');
map.delete('king');

for (let date of map.values()) {
    console.log(date.replace(/-/g,'/'))
}

map.delete('JS-coder')
console.log(map);
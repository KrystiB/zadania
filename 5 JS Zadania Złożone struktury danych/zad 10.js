let numbers = new Set();

for (let i = 0; i <= 10; i++) {
    numbers.add(i)
}
console.log(numbers)

numbers.delete(5);
console.log(numbers)

numbers.clear()
console.log(numbers)

let nations = new Set(['Polska', 'Hiszpania', 'Włochy', 'Islania', 'Dania'])
console.log(nations)

let nationsMap = new Map();

let id = 1;

nations.forEach(nation => {
    nationsMap.set(id, nation);
    id++;
})

console.log(nationsMap)
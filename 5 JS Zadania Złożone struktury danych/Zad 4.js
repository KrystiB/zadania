const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAgesDescending = [...ages].sort((a, b) => b - a);
const sortedAgesAscending = [...ages].sort((a, b) => a - b);

console.log(sortedAgesAscending);
console.log(sortedAgesDescending);

function ageAverage(arr) {
    let sum = 0;
    let count = 0;

    arr.forEach(age => {
        sum += age;
        count ++;
    });
return sum / count;
}
console.log((ageAverage(ages)))

console.log(sortedAgesDescending[0]-sortedAgesAscending[0]);
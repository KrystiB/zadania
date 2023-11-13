let map = new Map([
    ['French:', 45],
    ['Arabic: ', 25],
    ['Spanish:', 24],
    ['Russian:', 9],
    ['Portuguese:', 9],
    ['Dutch:', '8'],
    ['German:', 7],
    ['Chinese:', 5],
    ['Swahili:', 4],
    ['Serbian:', 4],
    ['English:', 91],
]);
let maxValue = 0;
let countryWithMaxValue = '';

map.forEach((value, country) => {
    if (value > maxValue) {
        maxValue = value;
        countryWithMaxValue = country;
    }
});

console.log(
    `Najwięcej uczestników ma ${countryWithMaxValue.replace(/:/g, '')} ${maxValue} ludzi`
);

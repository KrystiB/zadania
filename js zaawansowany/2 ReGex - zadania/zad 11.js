function isValidHexColor(value) {
    const regex = /^#[0-9A-Fa-f]{3}(?:[0-9A-Fa-f]{3})?$/;
    return regex.test(value);
}

const string = '#ab4';
const string2 = '#AB4B72';
const string3 = '#ab43';
const string4 = '#aaaaaaaaa';
const string5 = '#ahl';

console.log(isValidHexColor(string));
console.log(isValidHexColor(string2));
console.log(isValidHexColor(string3));
console.log(isValidHexColor(string4));
console.log(isValidHexColor(string5));
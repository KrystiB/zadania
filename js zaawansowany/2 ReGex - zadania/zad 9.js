function isFloatNumber(value) {
    const regex = /^[+-]?\d+([,.]\d+)?$/;
    return regex.test(value);
}
const string = '123,2341515132135';
const string2 = '-10';
const string3 = '18-12';
const string4 = '123,';
console.log(isFloatNumber(string));
console.log(isFloatNumber(string2));
console.log(isFloatNumber(string3));
console.log(isFloatNumber(string4));

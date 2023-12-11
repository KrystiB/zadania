function regexCheck(value) {
    const regex = /^b|^0/gi;
    return regex.test(value);
}
const string = 'bsgfd';
const stringFalse = 'vbgfbfg';

console.log(regexCheck(string));
console.log(regexCheck(stringFalse));
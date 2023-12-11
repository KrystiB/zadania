function regexCheck(value) {
    const regex = /^(?!(.*a)).{6,}/i;
    return regex.test(value);
}
const string = 'unique New York';
const stringFalse = 'Regular Expressions';
const stringFalse2 = 'ALOHA';
const stringFalse3 = 'Python should match';

console.log(regexCheck(string));
console.log(regexCheck(stringFalse));
console.log(regexCheck(stringFalse2));
console.log(regexCheck(stringFalse3));

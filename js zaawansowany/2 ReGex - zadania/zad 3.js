function regexCheck(value) {
    const regex = /[a-z]+_[a-z]/gi;
    return regex.test(value);
}
const string = 'bsgfd_hhbh';
const stringFalse = 'vbgfbfg_766575';

console.log(regexCheck(string));
console.log(regexCheck(stringFalse));

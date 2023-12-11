function regexCheck(value) {
    const regex = /s{2,}$/gi;
    return regex.test(value);
}

console.log(regexCheck('hiss'));
console.log(regexCheck('hisssss'));
console.log(regexCheck('His'));

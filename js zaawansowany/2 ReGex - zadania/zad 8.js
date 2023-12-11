function extractNumbers(str) {
    let regex = /\d+/g;
    return str.match(regex);
}
const str = '2 cats and 3 dogs';
console.log(extractNumbers(str));
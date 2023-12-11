function regexCheck(value) {
    const regex = /<[a-z0-9]+>.*?<\/[a-z0-9]+>/g;
    return regex.test(value);
}
const string = '<p>Twój tekst</p>';
const stringFalse = '<h1>Twój tekst2</h1>';
const stringFalse2 = '<span>Yowza! Thats a great regular expression.</span>';
const stringFalse3 = '<p>Learn about regular expressions here.</p> <p>You\'re going to love them!</p>';

console.log(regexCheck(string));
console.log(regexCheck(stringFalse));
console.log(regexCheck(stringFalse2));
console.log(regexCheck(stringFalse3));

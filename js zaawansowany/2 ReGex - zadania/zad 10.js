function extractDate(string) {
    const regex = /\d{4}[.|-]+\d{2}[.|-]+\d{2}/g;
    return string.match(regex);
}
const string = '2019-03-11: 23.5, 19/03/12: 12.7, 2019.03.13: 11.1, 2019-marzec-14: 14.3';

console.log(extractDate(string));
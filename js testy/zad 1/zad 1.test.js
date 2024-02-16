const fizzBuzz = require('./zad 1');

test.each([
    {number: 3, expected: 'Fizz'},
    {number: 5, expected: 'Buzz'},
    {number: 15, expected: 'FizzBuzz'},
    {number: 7, expected: 7},
    {number: 'abc', expected: 'Przekazany argument nie jest liczbą lub nie jest możliwy do przekształcenia na liczbę'},
    {number: null, expected: 'Przekazany argument nie jest liczbą lub nie jest możliwy do przekształcenia na liczbę'}
])('Sprawdzanie poprawnych wersji testów', ({number, expected}) => {
    expect(fizzBuzz(number)).toEqual(expected);
});
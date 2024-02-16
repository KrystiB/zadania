const getSeason = require('./zad 2');

test.each([
    {month: 3, expected: 'Wiosna'},
    {month: 7, expected: 'Lato'},
    {month: 10, expected: 'Jesień'},
    {month: 1, expected: 'Zima'},
    {month: 14, expected: 'Nieprawidłowy miesiąc'},
    {month: 'Styczeń', expected: 'Nieprawidłowy miesiąc'},
    {month: null, expected: 'Nieprawidłowy miesiąc'},
])('Sprawdzanie poprawnych wersji testów', ({month, expected}) => {
    expect(getSeason(month)).toBe(expected)
});
const getSeason = require('./zad 2');

test('Sprawdzenie 2 miesiąca', () => {
    const result = getSeason(5);
    expect(result).toBe('Wiosna')
})
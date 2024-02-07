const fizzBuzz = require('./zad 1');

test('Liczba podzielna przez 3 i 5',()=> {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz')
})


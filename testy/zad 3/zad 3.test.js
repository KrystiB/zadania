const celsiusToFahrenheit = require('./zad 3').celsiusToFahrenheit;
const fahrenheitToCelsius = require('./zad 3').fahrenheitToCelsius;

test('Sprawdzenie przeliczania stopni Celsjusza na Fahrenheita', () => {
    const result = celsiusToFahrenheit(100);
    expect(result).toBe(212);
}
)

test('Sprawdzenie przeliczania stopni Fahrenheita na Celsjusza', () => {
    const result = fahrenheitToCelsius(212);
    expect(result).toBe(100);
}
)

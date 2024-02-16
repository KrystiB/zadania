const convertTemperature = require('./zad 3');

describe('convertTemperature function', () => {
    test.each([
        [0, 'C', 'F', 32],
        [100, 'C', 'F', 212],
        [-40, 'C', 'F', -40],
        [32, 'F', 'C', 0],
        [212, 'F', 'C', 100],
        [-40, 'F', 'C', -40],
        [25, 'C', 'C', 25],
        [75, 'F', 'F', 75]
    ])('Sprawdzanie pozytywnych wyników', (temperature, fromUnit, toUnit, expected) => {
        expect(convertTemperature(temperature, fromUnit, toUnit)).toBe(expected);
    });

    test.each([
        ['abc', 'C', 'F', TypeError],
        [25, 'K', 'C', Error],
        [75, 'F', 'K', Error],
        [25, 'K', 'K', Error],
        [null, 'F', 'C', TypeError],
        ['xcdvcx', 'K', 'K', TypeError && Error  ],
    ])('Sprawdzanie błedów', (temperature, fromUnit, toUnit, errorType) => {
        expect(() => {
            convertTemperature(temperature, fromUnit, toUnit);
        }).toThrow(errorType);
    });
});


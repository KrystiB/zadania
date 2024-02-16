function convertTemperature(temperature, fromUnit, toUnit) {
    if (typeof temperature !== 'number') {
        throw new TypeError('Temperatura musi być liczbą');
    }
    if (fromUnit != 'C' || fromUnit != 'F' || toUnit != 'C' || toUnit != 'F') {
        throw new Error(
            'Nieprawidłowe jednostki. Użyj C dla Celsjusza lub F dla Fahrenheita.'
        );
    }
    if (fromUnit === toUnit) {
        return temperature;
    }

    if (fromUnit === 'C' && toUnit === 'F') {
        return (temperature * 9) / 5 + 32;
    }

    if (fromUnit === 'F' && toUnit === 'C') {
        return ((temperature - 32) * 5) / 9;
    }
}

module.exports = convertTemperature;

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    console.log(`Temperatura ${celsius} °C to inaczej ${fahrenheit} °F`);
}
function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`Temperatura ${fahrenheit} °F to inaczej ${celsius} °C`);
}

celsiusToFahrenheit(90);
fahrenheitToCelsius(90);

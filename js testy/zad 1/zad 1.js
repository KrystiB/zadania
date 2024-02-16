const fizzBuzz = (number) => {
    const parsedNumber = Number.parseFloat(number);
    if (Number.isNaN(parsedNumber)) {
        return 'Przekazany argument nie jest liczbą lub nie jest możliwy do przekształcenia na liczbę';
    }
    if (parsedNumber % 3 === 0 && parsedNumber % 5 === 0) {
        return 'FizzBuzz';
    } else if (parsedNumber % 3 === 0) {
        return 'Fizz';
    } else if (parsedNumber % 5 === 0) {
        return 'Buzz';
    } else {
        return parsedNumber;
    }
};

module.exports = fizzBuzz;


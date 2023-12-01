function generateToString(lenght) {
    const characters = 'abcde';
    let result = '';
    for (let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result
}

const arrayOfStrings = [];
for (let i = 0; i < 1000; i++){
    arrayOfStrings.push(generateToString(3))
}

console.log(arrayOfStrings)

const setOfStrings = new Set(arrayOfStrings);

console.log(setOfStrings)
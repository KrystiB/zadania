function executeCallback(greeting, goodbay, command) {
    if (command === 'hi') return greeting();
    if (command === 'cya') return goodbay();
    return 'Nieznane polecenie!'
}

function greeting() {
    return 'Hi you too!'
}
function goodbay() {
    return 'See you later!'
}

console.log(executeCallback(greeting,goodbay, 'hi'))
console.log(executeCallback(greeting,goodbay, 'cya'))
function zadA() {
    let array = [];
    array.push('jeden', 'dwa', 'trzy', 'cztery', 'pięć');
    console.log(array.length);
    array.unshift('zero');
    console.log(array[0]);
    console.log(array[Math.floor(array.length) / 2]);
    console.log(array[array.length - 1]);
}

function zadB() {
    const companyNames = ['FirmaA', 'Devs-Mentoring.pl', 'FirmaC', 'FirmaD', 'FirmaE'];
    console.log('Firmy bez `o` w nazwie:');
    for (let i = 0; i < companyNames.length; i++) {
        if (!companyNames[i].includes('o')) {
            console.log(companyNames[i]);
        }
    }
    const searchName = 'Devs-Mentoring.pl';
    companyNames.includes(searchName)
        ? console.log(`${searchName} znajduje się na liście`)
        : console.log(`${searchName} nie znajduje się na liście`);

    companyNames.splice(1, 1);
    companyNames.forEach(function (company) {
        if (company.length > 8) {
            console.log(company);
        }
    });
    let reversedCompanies = [...companyNames];
    console.log(reversedCompanies.reverse());
}

function zadC() {
    function generateRandomStrings(numberOfStrings) {
        if (numberOfStrings <= 0) {
            return;
        }
        let randomChars = [];
        let stringLength = Math.floor(Math.random() * 2 + 5);
        for (let i = 0; i < stringLength; i++) {
            let randomChar = String.fromCharCode(Math.floor(Math.random() * 93 + 33));
            randomChars.push(randomChar);
        }
        if (randomChars.length % 2 == 0) {
            console.log(randomChars.join(''));
        }
        generateRandomStrings(numberOfStrings - 1);
    }
    generateRandomStrings(10);
}

zadB();
zadC();

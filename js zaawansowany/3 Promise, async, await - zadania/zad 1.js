const countriesAPI = 'https://restcountries.com/v3.1/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching data from ${url}`);
    }
    return response.json();
};

const printCountryInfo = (country) => {
    const population = country.population ? country.population : 'Brak informacji o populacji';
    const area = country.area ? country.area: 'Brak informacji o powierzchni';
    const capital = country.capital ? country.capital[0] : 'Brak informacji o stolicy';
    const languages = country.languages ? Object.values(country.languages).join(', ') : 'Brak informacji o językach';
    console.log(`${country.name.common} - ${capital} - ${area} - ${languages} - ${population}`);
};

const printCatNames = (cats) => {
    console.log('\nImiona kotów:');
    if (Array.isArray(cats)) {
        cats.forEach((cat) => console.log(cat.name));
    } else {
        console.log('Brak danych o kotach');
    }
};

fetchData(countriesAPI)
    .then((countries) => {
        if (Array.isArray(countries)) {
            countries.forEach((country) => printCountryInfo(country));
        } else {
            console.log('Brak danych o krajach');
        }
        console.log('\n\n10 największych krajów: ');
        countries.slice(0).sort((a,b) => b.area - a.area).slice(0,10).forEach((country) => console.log(`${country.name.common} o wielkości ${country.area} km2`));
        console.log('\n\n10 najbardziej zaludnionych krajów: ');
        countries.slice(0).sort((a,b) => b.population - a.population).slice(0,10).forEach((country) => console.log(`${country.name.common} o populacji ${country.population} osób`));
        return countries;
    })
    .then(() => {
        return fetchData(catsAPI);
    })
    .then((cats) => {
        printCatNames(cats);
        return cats;
    })
    .catch((error) => {
        console.error(error.message);
    });

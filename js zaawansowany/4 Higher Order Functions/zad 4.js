async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countriesData = await response.json();

        const filteredCountries = filterCountries(countriesData);
        const averagePopulationByContinent =
            calculateAveragePopulationByContinent(countriesData);
        const maxPopulationByContinent = calculateMaxPopulationByContinent(countriesData);
        const languagesFrequency = calculateLanguagesFrequency(countriesData);

        console.log(
            `Kraje od najmniejszej do największej liczby ludności - minimum 37 mln: `,
            filteredCountries
        );

        console.log('Średnie zaludnienie na kontynencie:');
        for (const continent in averagePopulationByContinent) {
            console.log(
                `${continent}: ${formatNumber(averagePopulationByContinent[continent])}`
            );
        }

        console.log('Kraje z największym zaludnieniem na kontynentach:');
        for (const continent in maxPopulationByContinent) {
            console.log(
                `${continent}: ${
                    maxPopulationByContinent[continent].name
                } - ${formatNumber(maxPopulationByContinent[continent].population)}`
            );
        }

        console.log('Najczęściej wykorzystywane języki i ich częstość:');
        const sortedLanguagesFrequency = Object.entries(languagesFrequency)
            .sort((a, b) => b[1] - a[1]);

        sortedLanguagesFrequency.forEach(([language, frequency]) => {
            console.log(`${language}: ${frequency} razy`);
        });
    } catch (error) {
        throw new Error(error);
    }
}

function formatNumber(number) {
    return new Intl.NumberFormat().format(number.toFixed(2));
}

function filterCountries(countries) {
    return countries
        .filter((country) => country.population > 37000000)
        .map((country) => ({ name: country.name.common, population: country.population }))
        .sort((a, b) => a.population - b.population)
        .map((country) => `${country.name} - ${formatNumber(country.population)}`);
}

function calculateAveragePopulationByContinent(countries) {
    const continentPopulation = {};
    const continentCount = {};

    countries.forEach((country) => {
        const continents = country.continents || ['Unknown'];

        continents.forEach((continent) => {
            if (country.population !== 0) {
                continentPopulation[continent] =
                    (continentPopulation[continent] || 0) + country.population;
                continentCount[continent] = (continentCount[continent] || 0) + 1;
            }
        });
    });

    const averagePopulation = {};
    for (const continent in continentPopulation) {
        averagePopulation[continent] =
            continentPopulation[continent] / continentCount[continent];
    }

    return averagePopulation;
}

function calculateMaxPopulationByContinent(countries) {
    const maxPopulationCountries = {};

    countries.forEach((country) => {
        const continents = country.continents || ['Unknown'];

        continents.forEach((continent) => {
            if (
                !maxPopulationCountries[continent] ||
                maxPopulationCountries[continent].population < country.population
            ) {
                maxPopulationCountries[continent] = {
                    name: country.name.common,
                    population: country.population,
                };
            }
        });
    });

    return maxPopulationCountries;
}

function calculateLanguagesFrequency(countries) {
    const languagesFrequency = {};

    countries.forEach((country) => {
        const languages = country.languages || {};

        for (const languageCode in languages) {
            const languageName = languages[languageCode];
            const languageKey = `${languageName}`;

            languagesFrequency[languageKey] = (languagesFrequency[languageKey] || 0) + 1;
        }
    });

    return languagesFrequency;
}

fetchData();

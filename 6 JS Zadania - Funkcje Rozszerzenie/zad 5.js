function checkDayWeek(date) {
    const selectedDate = new Date(date);
    if (selectedDate.getTime()) {
        const daysWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
        const dayWeek = daysWeek[selectedDate.getDay()];
        return `Dzień tygodnia dla podanej daty to: ${dayWeek}`;
    }
    return `Nieprawidłowa data. Podaj datę w poprawnym formacie`
}

const dateToCheck = '2023-01-06'
const result = checkDayWeek(dateToCheck);
console.log(result)
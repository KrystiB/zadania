function daysToNewYear() {
    const presentDate = new Date();
    const endYearDate = new Date(presentDate.getFullYear(), 11, 31, 23, 59, 59);
    const daysToNewYear = Math.floor((endYearDate - presentDate) / 1000 / 60 / 60 / 24);
    const hoursToNewYear = Math.floor(
        ((endYearDate - presentDate) / 1000 / 60 / 60) % 24
    );
    return `Do końca roku pozostało ${daysToNewYear} dni oraz ${hoursToNewYear} godzin`;
}

console.log(daysToNewYear());

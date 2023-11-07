function getSeason(month = 1) {
    if (month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            return 'Wiosna';
        } else if (month >= 6 && month <= 8) {
            return 'Lato';
        } else if (month >= 9 && month <= 11) {
            return 'Jesień';
        } else {
            return 'Zima';
        }
    } else {
        return 'Nieprawidłowy miesiąc';
    }
}

console.log(getSeason(3))
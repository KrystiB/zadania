function getSeason(month = 1) {
    if (month >= 1 && month <= 12) {
        switch (true) {
            case month >= 3 && month <= 5:
                return 'Wiosna';
            case month >= 6 && month <= 8:
                return 'Lato';
            case month >= 9 && month <= 11:
                return 'Jesień';
            default:
                return 'Zima';
        }
    } else {
        return 'Nieprawidłowy miesiąc';
    }
}

module.exports = getSeason;
class Cat {
    constructor(name, level_happiness = 100, level_hunger = 30, level_loneliness = 30) {
        this.name = name;
        this.level_happiness = level_happiness;
        this.level_hunger = level_hunger;
        this.level_loneliness = level_loneliness;
    }

    feed() {
        this.level_hunger -= 20;
        this.level_happiness += 10;
        this.level_loneliness + 10;
    }

    sleep() {
        this.level_hunger += 20;
        this.level_loneliness += 20;
        this.level_happiness += 20;
    }

    play() {
        this.level_happiness += 20;
        this.level_loneliness -= 20;
        this.level_hunger += 15;
    }

    status() {
        let happinessStatus, hungerStatus, lonelinessStatus;

        if (this.level_happiness >= 80) {
            happinessStatus = 'very happy';
        } else if (this.level_happiness >= 50) {
            happinessStatus = 'happy';
        } else {
            happinessStatus = 'not happy';
        }

        if (this.level_hunger <= 20) {
            hungerStatus = 'not hungry';
        } else if (this.level_hunger <= 50) {
            hungerStatus = 'a bit hungry';
        } else {
            hungerStatus = 'very hungry';
        }

        if (this.level_loneliness <= 20) {
            lonelinessStatus = 'not lonely';
        } else if (this.level_loneliness <= 50) {
            lonelinessStatus = 'a bit lonely';
        } else {
            lonelinessStatus = 'very lonely';
        }

        return `${this.name} is ${lonelinessStatus}, ${hungerStatus}, and ${happinessStatus}`;
    }
}

const pusia = new Cat('Pusia');
console.log(pusia.status());
pusia.feed();
pusia.feed();
pusia.feed();
pusia.feed();
pusia.play();
pusia.sleep();
pusia.feed();
pusia.feed();
pusia.feed();
pusia.sleep();
pusia.feed();
pusia.feed();
pusia.play();
console.log(pusia.status());

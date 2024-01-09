const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
];

class DataManipulator {
    people;
    comments;
    constructor(people, comments) {
        this.people = people;
        this.comments = comments;
    }

    isAtLeastSome19() {
        return this.people.some(
            (person) => new Date().getFullYear() - person.year >= 19
        );
    }

    isAtLeastEvery19() {
        return this.people.every(
            (person) => new Date().getFullYear() - person.year >= 19
        );
    }

    findBornInYear() {
        return this.people.find((person) => person.year > 2000);
    }

    combineOpinions() {
        const opinions = this.people.map((person, index) => ({
            name: person.name,
            year: person.year,
            opinion: this.comments[index].text,
            id: this.comments[index].id,
        }));
        return opinions;
    }
}

const dataManipulator = new DataManipulator(people, comments);
console.log('At least some 19: ', dataManipulator.isAtLeastSome19());
console.log('At least every 19: ', dataManipulator.isAtLeastEvery19());
console.log('Find born in year: ', dataManipulator.findBornInYear());
console.log('Combine opinions: ', dataManipulator.combineOpinions());
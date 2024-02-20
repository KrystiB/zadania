interface IPerson {
    name: string;
    age: number;
    occupation: string;
}

class User implements IPerson {
    name: string;
    age: number;
    occupation: string;
    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}

const people: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Scientist'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(person: IPerson) {
    console.log(` - ${person.name}, ${person.age}`);
}

console.log('People:');
people.forEach(logPerson)
class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        const possibleDistance = this.tank * this.milesPerGallon;

        if (possibleDistance < distance) {
            this.odometer += possibleDistance;
            this.tank = 0;
            return `I ran out of fuel at ${this.odometer} miles!`;
        } else {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
        }
    }
}

const myCar = new Car('Dodge', 30);
console.log(myCar);

myCar.fill(10);

myCar.drive(150);
console.log(myCar.drive(400));
console.log(myCar);

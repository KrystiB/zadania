class Airplane{
    name;
    isFlying;
    constructor(name, isFlying = false) {
        this.name = name;
        this.isFlying = isFlying;
    }
}

Airplane.prototype.takeOff = function () {
    if (this.isFlying) {
        return `${this.name} jest już w powietrzu`;
    } else {
        this.isFlying = true;
        return `${this.name} wzniósł się w powietrze`;
    }
};

Airplane.prototype.land = function () {
    if (!this.isFlying) {
        return `${this.name} jest już na ziemi`;
    } else {
        this.isFlying = false;
        return `${this.name} wylądował`;
    }
};

const firstAirplane = new Airplane('Boeing');
console.log(firstAirplane.takeOff())
console.log(firstAirplane.takeOff())
console.log(firstAirplane.land())
console.log(firstAirplane.land())


const secondAirplane = new Airplane('Airbus', true);
console.log(secondAirplane.takeOff())
console.log(secondAirplane.land())
console.log(secondAirplane.takeOff())
console.log(secondAirplane.land())
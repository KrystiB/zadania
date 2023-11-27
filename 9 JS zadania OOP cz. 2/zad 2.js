class WaterVessel {
    id;
    volume;
    waterVolume;
    constructor(id, volume, waterVolume = 0) {
        this.id = id;
        this.volume = volume;
        this.waterVolume = waterVolume;
    }
}

function getRandomCapacity(min, max) {
    return Math.random() * (max - min) + min;
}

function createRandomVessels() {
    const waterVessels = [];

    for (let i = 1; i <= 5; i++) {
        const randomCapacity = getRandomCapacity(50, 200);
        const vessel = new WaterVessel(i, Math.floor(randomCapacity));
        waterVessels.push(vessel);
    }
    return waterVessels;
}
function pourWater(waterVessels, waterCanister) {
    for 
}

const vesselsList = createRandomVessels();

let waterCanister = 1000;

console.log(vesselsList);

console.log(`Remaining water in the canister: ${waterCanister}`);

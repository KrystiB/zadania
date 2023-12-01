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

function pourWater(waterVessels) {
    let waterCanister = 1000;

    for (const vessel of waterVessels) {
        while (vessel.waterVolume < vessel.volume && waterCanister > 0) {
            const amountToAdd = Math.min(
                vessel.volume - vessel.waterVolume,
                waterCanister
            );
            vessel.waterVolume += amountToAdd;
            waterCanister -= amountToAdd;
        }
    }
    return waterCanister;
}

const vesselsList = createRandomVessels();
const remainingWater = pourWater(vesselsList);

console.log('Results:');
for (const vessel of vesselsList) {
    console.log(
        `Vessel ${vessel.id}: Capacity - ${vessel.volume}, Water - ${vessel.waterVolume}`
    );
}
console.log(`Remaining water in the canister: ${remainingWater}`);

const array = [];
function generatorZnakow() {
    for (let i = 0; i < 100; i++) {
        let random = ((Math.random() * 93 + 33));
        let floorRandom = Math.floor(random);
        let stringFloorRandom = String.fromCharCode(floorRandom);
        array.push(stringFloorRandom);
    }
}
generatorZnakow();
console.log(array.join(''));
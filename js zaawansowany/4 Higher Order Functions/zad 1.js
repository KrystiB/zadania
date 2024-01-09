const animals = [
	{name: 'Burek', eyes: 3, type: 'cat'},
	{name: 'Milelon', type: 'cat', eyes: 4},
	{name: 'Pusia', type: 'cat', eyes: 2},
	{name: 'Puszek', type: 'dog', eyes: 2},
	{name: 'Zorka', eyes: 2, type: 'dog'}
];

function animalsList(animals) {
	return animals.map(animal => `${animal.name} is a ${animal.type} has ${animal.eyes} eyes`)
}

function findDog(animals) {
	return animals.filter(animal => animal.type === 'dog')
}

function names(animals) {
	return animals.map(animal => animal.name).join(' ')
}

function namesDogs(animals) {
	return animals.filter(animal => animal.type === 'dog').map(animal => animal.name).join(' ')	
}

console.log(animalsList(animals));
console.log(findDog(animals));
console.log(names(animals));
console.log(namesDogs(animals));
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '10' },
];

function sumWithReduce(array) {
    return array.reduce((acc, current) => {
        if (!isNaN(parseFloat(current.price))) {
            return acc + parseFloat(current.price);
        }
        return acc;
    }, 0);
}

function sumWithForEach(array) {
    let sum = 0;
    array.forEach(element => {
        if (!isNaN(parseFloat(element.price))) {
            sum += parseFloat(element.price);
        }
    });
    return sum;
}

function nonPriceProducts(array) {
    return array.filter(element => {
        return isNaN(parseFloat(element.price));
    });
}

console.log(sumWithReduce(products));
console.log(sumWithForEach(products));
console.log(nonPriceProducts(products));
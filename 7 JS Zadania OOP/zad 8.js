class Order {
    price;
    name;
    static nextId = 1;
    constructor(price, name) {
        this.id = Order.nextId++;
        this.price = price;
        this.name = name;
    }
}

const orderMap = new Map();

for (let i = 0; i < 5; i++) {
    const order = new Order(50 + (50 * i), `Produkt ${i + 1}`);
    orderMap.set(order.id, order);
}

console.log(orderMap)
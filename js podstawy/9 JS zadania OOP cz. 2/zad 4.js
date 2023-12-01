class User {
    #id;
    username;
    email;
    #password;
    #createdAt;
    #isLoggedIn;
    constructor(id, username, email, password) {
        this.#id = id;
        this.username = username;
        this.email = email;
        this.#password = password;
        this.#createdAt = new Date();
        this.#isLoggedIn = false;
    }
    get id() {
        return this.#id;
    }
    get password() {
        return this.#password;
    }
    get createdAt() {
        return this.#createdAt;
    }
    get isLoggedIn() {
        return this.#isLoggedIn;
    }

    signIn(password) {
        if (this.#password === password) {
            this.#isLoggedIn = true;
            return `User ${this.username} is now logged in`;
        } else {
            return 'Invalid password. Please try again';
        }
    }

    countLikes(products) {
        if (!this.#isLoggedIn) {
            return `User ${this.username} is not logged in. Please log in to see liked products.`;
        }

        const likedProducts = [];

        products.forEach((product) => {
            if (product.likes && product.likes.includes(this.id)) {
                likedProducts.push(product.name);
            }
        });

        if (likedProducts.length > 0) {
            return `User ${
                this.username
            } likes the following products: ${likedProducts.join(', ')}`;
        } else {
            return `User ${this.username} has not liked any products yet.`;
        }
    }
    rateProduct(productId, rating, products) {
        if (!this.#isLoggedIn) {
            return `User ${this.username} is not logged in. Please log in to see liked products.`;
        }

        const product = products.find((product) => product.id === productId);

        if (!product) {
            return `Product with ID ${productId} not found.`;
        }

        const existingRating = product.ratings.find(
            (rating) => rating.userId === this.id
        );
        if (existingRating) {
            return `User ${this.username} has already rated this product.`;
        }
        if (!existingRating) {
            return `Product with ID ${productId} not found.`;
        }
        product.ratings.push({ userId: this.id, rate: rating });
        return `User ${this.username} has rated the product ${product.name} with ${rating} stars.`;
    }
}

const users = [
    new User('ab12ex', 'Alex', 'alex@alex.com', '123123'),
    new User('fg12cy', 'Asab', 'asab@asab.com', '123456'),
    new User('zwf8md', 'Brook', 'brook@brook.com', '13111'),
    new User('eefamr', 'Martha', 'martha@martha.com', '123222'),
    new User('ghderc', 'Thomas', 'thomas@thomas.com', '123333'),
];

const products = [
    {
        id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
];

const loggedInUser = users.find((user) => user.email === 'asab@asab.com');
console.log(loggedInUser.signIn('123456'));
console.log(loggedInUser.countLikes(products));
console.log(loggedInUser.rateProduct('eedfcf', 4.0, products));
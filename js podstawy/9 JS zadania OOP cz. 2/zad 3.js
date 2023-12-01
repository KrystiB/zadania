class User {
    #name;
    #surname;
    #email;
    #gender;
    #password;
    #dateJoined;
    constructor(name, surname, email, gender, password, dateJoined) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.#dateJoined = dateJoined || new Date();
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this.#name = value.trim();
        } else {
            throw new Error('Nieprawidłowa nazwa użytkownika');
        }
    }

    get surname() {
        return this.#surname;
    }
    set surname(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this.#surname = value.trim();
        } else {
            throw new Error('Nieprawidłowe nazwisko');
        }
    }

    get email() {
        return this.#email
    }
    set email(value) {
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (validEmail.test(value)) {
            this.#email = value;
        } else {
            throw new Error('Nieprawidłowy adres email')
        }
    }

    get gender() {
        return this.#gender;
    }
    set gender(value) {
        const validGender = ['male', 'female', 'other'];
        if (validGender.includes(value)) {
            this.#gender = value;
        } else {
            throw new Error('Nieprawidłowa płeć')
        }
    }

    get password() {
        return this.#password
    }
    set password(value) {
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (validPassword.test(value)) {
            this.#password = value;
        } else {
            throw new Error('Nieprawidłowe hasło')
        }
    }

    get dateJoined() {
        return this.#dateJoined;
    }
}

try {
    const user = new User('Jan', 'Kowalski', 'jankowalski@gmail.com', 'other', 'Password12!');
    console.log(user)
} catch (error) {
    console.error(error.message);
}
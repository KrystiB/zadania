class Account {
    #balance;
    #number;
    constructor(balance, number) {
        this.#balance = balance;
        this.#number = number;
    }

    get balance() {
        return this.#balance;
    }
    get number() {
        return this.#number;
    }
    set balance(value) {
        if (value >= 0) {
            this.#balance = value;
        } else {
            return `Wartość salda nie może być ujemna.`;
        }
    }
    set number(value) {
        this.#number = value;
    }

    deposit(value) {
        if (value < 0) {
            return `Wpłacona wartość musi być większa od 0.`;
        }
        this.#balance += value;
        return `Wpłacono ${value} zł. Aktualne saldo: ${this.#balance} zł.`;
    }

    withdraw(value) {
        if (value <= 0) {
            return `Wypłacona wartość musi być większa niż 0.`;
        }
        if (value > this.#balance) {
            return `Niewystarczające saldo`;
        }
        this.#balance -= value;
        return `Wypłacono ${value} zł. Aktualne saldo: ${this.#balance} zł`;
    }
}

class SavingAccount extends Account {
    #interest;
    constructor(balance, number, interest) {
        super(balance, number);
        this.#interest = interest;
    }

    get interest() {
        return this.#interest;
    }
    set interest(value) {
        if (value <= 0) {
            return `Oprocentowanie nie może być mniejsze bądź równe 0`;
        }
        this.#interest = value;
    }

    addInterest() {
        this.#interest += 5;
        return `Dodano odsetki. Aktualnie oprocentowanie wynosi: ${this.#interest}%.`;
    }

    getAccountInfo() {
        return {
            balance: this.balance,
            number: this.number,
            overdraftLimit: this.overdraftLimit,
        }
    }
}

class CurrentAccount extends Account {
    #overdraftLimit;
    constructor(balance, number, overdraftLimit) {
        super(balance, number);
        this.#overdraftLimit = overdraftLimit;
    }

    get overdraftLimit() {
        return this.#overdraftLimit;
    }
    set overdraftLimit(value) {
        this.#overdraftLimit = value;
    }

    increaseOverdraftLimit() {
        this.#overdraftLimit += 10;
        return `Limit debetu został ziwększony. Aktualny limit wynosi: ${this.#overdraftLimit
            }`;
    }

    getAccountInfo() {
        return {
            balance: this.balance,
            number: this.number,
            overdraftLimit: this.overdraftLimit,
        }
    }
}

class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
        return 'Konto dodane do banku.';
    }

    update() {
        const updatedAccountsInfo = [];
        this.accounts.forEach((account) => {
            account.deposit(Math.random() * 1000);

            if (account instanceof SavingAccount) {
                account.addInterest();
            } else if (account instanceof CurrentAccount) {
                account.increaseOverdraftLimit(10);
            }

            updatedAccountsInfo.push({
                balance: account.balance,
                number: account.number,
                interest: account.interest,
                overdraftLimit: account.overdraftLimit,
            });
        });

        return updatedAccountsInfo;
    }
}

const bank = new Bank();
const savingAccount = new SavingAccount(5000, '1234567899032', 10);
const currentAccount = new CurrentAccount(7500, '23143655467', 2000);

console.log(bank.addAccount(savingAccount));
console.log(bank.addAccount(currentAccount));

console.log('Stan przed aktualizacją:');
console.log('Saving Account:', savingAccount);
console.log('Current Account:', currentAccount);

console.log('\nAktualizacja:');
const updatedAccountsInfo = bank.update();

console.log('\nStan po aktualizacji:');
console.log('Updated Accounts Info:', updatedAccountsInfo);
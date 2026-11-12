"use strict";

class BankAccount {
    // Private field
    #balance;

    constructor(accountHolder, initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.#balance += amount;
        console.log(`Deposited ₹${amount}. Updated Balance: ₹${this.#balance}`);
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error(`Insufficient balance! Available: ₹${this.#balance}, Requested: ₹${amount}`);
        }
        this.#balance -= amount;
        console.log(`Withdrew ₹${amount}. Remaining Balance: ₹${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

console.log("--- Q7: Banking Application ---");

const account = new BankAccount("Chaitanya Pandey", 5000);
console.log(`Account Holder: ${account.accountHolder} | Initial Balance: ₹${account.getBalance()}`);

// Valid deposits & withdrawals
try {
    account.deposit(2500);
    account.withdraw(1500);
} catch (error) {
    console.error("Transaction Error:", error.message);
}

// Invalid withdrawal (exceeds available balance)
try {
    console.log("Attempting to withdraw ₹10000...");
    account.withdraw(10000);
} catch (error) {
    console.error("Transaction Failed:", error.message);
}

console.log(`Final Verified Balance: ₹${account.getBalance()}`);
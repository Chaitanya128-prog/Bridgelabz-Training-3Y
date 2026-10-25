"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// 1. Loop through each transaction
transactions.forEach((tx, index) => {
    try {
        // 2. Throw custom errors
        if (tx === null) throw new Error("Null entry found.");
        if (tx.id === undefined || tx.amount === undefined) throw new Error("Missing amount or id.");
        if (tx.amount < 0) throw new Error("Negative amount detected.");

        validTransactions.push(tx);
    } catch (error) {
        // 3. Catch and categorize
        invalidTransactions.push({ index, transaction: tx, error: error.message });
    }
});

// 4. Print final reports
console.log(`=== TRANSACTION REPORT ===`);
console.log(`Successful Transactions: ${validTransactions.length}`, validTransactions);
console.log(`Failed Transactions: ${invalidTransactions.length}`, invalidTransactions);

// 5. Debugging note: Use VS Code breakpoints here to watch 'tx' and 'error.message'
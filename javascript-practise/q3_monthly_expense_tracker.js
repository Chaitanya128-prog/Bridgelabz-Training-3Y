/**
 * Q3: Monthly Expense Tracker
 * Logic:
 * 1. Store expense values for 5 categories in an array.
 * 2. Compute total sum and category average.
 * 3. Add 10% tax using arithmetic operators and round to 2 decimals using .toFixed(2).
 */

// Categories: [food, travel, rent, bills, leisure]
const expenses = [4500, 1800, 12000, 2500, 3200];
const categoryCount = expenses.length;

let totalExpense = 0;
for (let i = 0; i < categoryCount; i++) {
  totalExpense += expenses[i];
}

const averageExpense = totalExpense / categoryCount;

const TAX_RATE = 0.10;
const finalAmountWithTax = totalExpense * (1 + TAX_RATE);

console.log("=== Monthly Expense Report ===");
console.log(`Total Expense  : ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final (+10% Tax): ₹${finalAmountWithTax.toFixed(2)}`);

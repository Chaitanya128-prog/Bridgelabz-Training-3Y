/**
 * Q8: Employee Salary Projection
 * Logic:
 * 1. Initialize starting base salary and annual increment percentage.
 * 2. Loop through 5 years compounding salary each year.
 * 3. Render structured table output using console.table().
 */

const baseSalary = 50000;
const annualIncrementPercent = 8;

let currentSalary = baseSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
  if (year > 1) {
    currentSalary += (currentSalary * annualIncrementPercent) / 100;
  }

  salaryReport.push({
    Year: `Year ${year}`,
    "Projected Salary (₹)": Math.round(currentSalary)
  });
}

console.log(`Initial Base: ₹${baseSalary} | Increment Rate: ${annualIncrementPercent}%`);
console.table(salaryReport);

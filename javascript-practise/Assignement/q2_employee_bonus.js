"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach(emp => {
    try {
        if (!emp.salary || !emp.years || !emp.name) {
            throw new Error("Missing required employee properties.");
        }

        // 1. Convert to numbers
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Invalid number format in data.");
        }

        // 2. Calculate bonus
        const bonus = years > 3 ? (salary * 0.1) : (salary * 0.05);

        // 4. Template strings formatted details
        console.log(`Employee: ${emp.name} | Base Salary: $${salary} | Years: ${years} | Bonus: $${bonus}`);
    } catch (error) {
        console.error(`Error processing employee ${emp.name || 'Unknown'}: ${error.message}`);
    }
});
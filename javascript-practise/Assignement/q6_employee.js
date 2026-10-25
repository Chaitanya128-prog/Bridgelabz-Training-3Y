class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Alice", "IT", 5000),
    new Employee(2, "Bob", "HR", 4000),
    new Employee(3, "Charlie", "Finance", 6000),
    new Employee(4, "David", "IT", 5500),
    new Employee(5, "Eve", "Marketing", 4500)
];

const totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`Total Annual Payout: $${totalPayout}`);
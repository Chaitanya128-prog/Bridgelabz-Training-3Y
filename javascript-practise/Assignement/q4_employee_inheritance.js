"use strict";

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} (${this.department}) is executing assigned technical tasks.`);
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Overriding parent work() method
    work() {
        console.log(`${this.name} (${this.department} Manager) is leading a team of ${this.teamSize} and planning sprints.`);
    }
}

console.log("--- Q4: Employee Inheritance & Runtime Polymorphism ---");

// Storing different subclass objects in a unified collection
const staffMembers = [
    new Employee("Karan", "Backend Engineering"),
    new Manager("Priya", "Cyber Security", 8),
    new Employee("Vikram", "QA & Testing"),
    new Manager("Ananya", "Product", 5)
];

// Runtime polymorphism: JS dynamically resolves the appropriate work() method per instance
staffMembers.forEach(member => member.work());
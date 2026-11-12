"use strict";

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using Array.prototype.reduce()
    calculateAverage() {
        if (!this.marks || this.marks.length === 0) return 0;
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Return grade (A / B / C / F) based on average
    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 85) return "A";
        if (avg >= 70) return "B";
        if (avg >= 50) return "C";
        return "F";
    }

    displayResult() {
        const avg = this.calculateAverage().toFixed(2);
        const grade = this.getGrade();
        console.log(`Student: ${this.name} | Marks: [${this.marks.join(", ")}] | Average: ${avg} | Grade: ${grade}`);
    }
}

// Testing for 3 students
console.log("--- Q1: Student Result Processing ---");
const students = [
    new Student("Aarav", [92, 88, 95, 89]),
    new Student("Sneha", [74, 68, 79, 72]),
    new Student("Rohan", [42, 48, 39, 51])
];

students.forEach(student => student.displayResult());
"use strict";

console.log("--- Q6: Prototype Chain (Person -> Faculty -> Professor) ---");

// Level 1: Person
function Person(name) {
    this.name = name;
}
Person.prototype.getPersonInfo = function() {
    console.log(`[Person] Name: ${this.name}`);
};

// Level 2: Faculty
function Faculty(name, employeeId) {
    Person.call(this, name);
    this.employeeId = employeeId;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getFacultyInfo = function() {
    console.log(`[Faculty] Employee ID: ${this.employeeId}`);
};

// Level 3: Professor
function Professor(name, employeeId, department) {
    Faculty.call(this, name, employeeId);
    this.department = department;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getProfessorInfo = function() {
    console.log(`[Professor] Department: ${this.department}`);
};

// Instance
const prof = new Professor("Dr. Sharma", "FAC-102", "Computer Science");

// Accessing methods up the prototype chain
prof.getProfessorInfo(); // Accesses Professor.prototype
prof.getFacultyInfo();   // Accesses Faculty.prototype
prof.getPersonInfo();    // Accesses Person.prototype
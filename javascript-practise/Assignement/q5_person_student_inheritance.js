"use strict";

console.log("--- Q5: Prototype Inheritance (Person -> Student) ---");

// Person Constructor
function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

// Student Constructor
function Student(name, branch) {
    // Call parent constructor to bind 'name' property
    Person.call(this, name);
    this.branch = branch;
}

// Linking Student prototype to Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Adding Student-specific method
Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Chaitanya", "Cyber Security & AI");

// Demonstrating Prototype Chain
student1.printName();   // Inherited from Person.prototype
student1.printBranch(); // Defined on Student.prototype
"use strict";

console.log("--- Q9: ES6 Classes Inheritance ---");

// Person Class
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

// Student Class inheriting from Person
class Student extends Person {
    constructor(name, branch) {
        super(name); // Call parent constructor
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const studentObj = new Student("Chaitanya", "AI & Cyber Security");

studentObj.printName();   // Inherited method
studentObj.printBranch(); // Student method

// Verification that ES6 classes utilize prototype mechanism under the hood
console.log("Is studentObj an instance of Person?", studentObj instanceof Person); // true
console.log("Is typeof Person a function?", typeof Person === "function");         // true
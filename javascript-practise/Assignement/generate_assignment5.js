const fs = require('fs');

const files = {
// ==========================================
// Q1: Callback Flow Demo
// ==========================================
"q1_greet_user.js": `"use strict";

// Callback function to be executed after greeting
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Higher-order function taking name and callback
function greetUser(name, callback) {
    console.log(\`Hello \${name}\`);
    
    // Callback Flow: Executing the callback function passed as an argument
    if (typeof callback === "function") {
        callback();
    }
}

// Execution demonstration
console.log("--- Q1: Callback Flow Demo ---");
greetUser("Chaitanya", showEndMessage);
`,

// ==========================================
// Q2: Custom Array Operations via Callbacks
// ==========================================
"q2_apply_operation.js": `"use strict";

// Function that applies a callback operation on each element of an array
function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

const numbersArray = [1, 2, 3, 4];

// 1. Double each number
const doubledNumbers = applyOperation(numbersArray, function(num) {
    return num * 2;
});

// 2. Square each number
const squaredNumbers = applyOperation(numbersArray, (num) => num * num);

console.log("--- Q2: Apply Operation with Callbacks ---");
console.log("Original Array:", numbersArray);
console.log("Doubled Array: ", doubledNumbers);
console.log("Squared Array: ", squaredNumbers);
`,

// ==========================================
// Q3: Arrow Function vs Normal Function 'this'
// ==========================================
"q3_arrow_function_this.js": `"use strict";

console.log("--- Q3: Arrow Function vs Normal Function 'this' ---");

// Object with method written as an arrow function
const userArrow = {
    name: "Alice",
    showName: () => {
        console.log("Arrow showName output:", this?.name);
    }
};

userArrow.showName();
/*
 * EXPLANATION:
 * Arrow functions do NOT have their own 'this' binding.
 * They lexically inherit 'this' from their surrounding parent scope (global scope in this case).
 * In global scope, 'this.name' is undefined because global/module 'this' does not point to 'userArrow'.
 */

// FIX: Using a normal function declaration
const userFixed = {
    name: "Alice",
    showName: function() {
        console.log("Normal showName output:", this.name);
    }
};

userFixed.showName(); 
// Output: "Alice" (Normal functions bind 'this' to the object calling the method)
`,

// ==========================================
// Q4: Prototype Method Sharing
// ==========================================
"q4_car_prototype.js": `"use strict";

console.log("--- Q4: Method Sharing via Prototypes ---");

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to constructor prototype
Car.prototype.getDetails = function() {
    return \`Car Details: \${this.brand} \${this.model}\`;
};

// Instantiating car objects
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("BMW", "M4");

console.log(car1.getDetails());
console.log(car2.getDetails());

// Verification of prototype method sharing in memory
console.log("Do both instances share the exact same method reference?", car1.getDetails === car2.getDetails); // true
`,

// ==========================================
// Q5: Person -> Student Prototype Inheritance
// ==========================================
"q5_person_student_inheritance.js": `"use strict";

console.log("--- Q5: Prototype Inheritance (Person -> Student) ---");

// Person Constructor
function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(\`Name: \${this.name}\`);
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
    console.log(\`Branch: \${this.branch}\`);
};

const student1 = new Student("Chaitanya", "Cyber Security & AI");

// Demonstrating Prototype Chain
student1.printName();   // Inherited from Person.prototype
student1.printBranch(); // Defined on Student.prototype
`,

// ==========================================
// Q6: Multi-level Prototype Chain
// ==========================================
"q6_prototype_chain_faculty.js": `"use strict";

console.log("--- Q6: Prototype Chain (Person -> Faculty -> Professor) ---");

// Level 1: Person
function Person(name) {
    this.name = name;
}
Person.prototype.getPersonInfo = function() {
    console.log(\`[Person] Name: \${this.name}\`);
};

// Level 2: Faculty
function Faculty(name, employeeId) {
    Person.call(this, name);
    this.employeeId = employeeId;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getFacultyInfo = function() {
    console.log(\`[Faculty] Employee ID: \${this.employeeId}\`);
};

// Level 3: Professor
function Professor(name, employeeId, department) {
    Faculty.call(this, name, employeeId);
    this.department = department;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getProfessorInfo = function() {
    console.log(\`[Professor] Department: \${this.department}\`);
};

// Instance
const prof = new Professor("Dr. Sharma", "FAC-102", "Computer Science");

// Accessing methods up the prototype chain
prof.getProfessorInfo(); // Accesses Professor.prototype
prof.getFacultyInfo();   // Accesses Faculty.prototype
prof.getPersonInfo();    // Accesses Person.prototype
`,

// ==========================================
// Q7: Closures with Multiplier Function
// ==========================================
"q7_make_multiplier_closure.js": `"use strict";

console.log("--- Q7: Multiplier Closure ---");

function makeMultiplier(multiplier) {
    // Returned inner function closes over 'multiplier' parameter
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log("Triple 5:", triple(5)); // Output: 15

const double = makeMultiplier(2);
console.log("Double 8:", double(8)); // Output: 16

/*
 * HOW CLOSURE WORKS:
 * When 'makeMultiplier(3)' is invoked, an execution environment is created with 'multiplier = 3'.
 * The inner function retains a lexical reference to 'multiplier' even after 'makeMultiplier' has finished running.
 * Calling 'triple(5)' accesses the remembered variable 'multiplier' (3) and multiplies it by 5.
 */
`,

// ==========================================
// Q8: Custom Array.prototype.myMap
// ==========================================
"q8_custom_mymap_prototype.js": `"use strict";

console.log("--- Q8: Custom Array.prototype.myMap ---");

// Adding myMap to Array prototype
Array.prototype.myMap = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(\`\${callback} is not a function\`);
    }

    const resultArray = [];
    // 'this' refers to the array instance calling myMap
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
};

// Test custom myMap
const originalNumbers = [1, 2, 3];
const mappedNumbers = originalNumbers.myMap(num => num * 2);

console.log("Original Array:", originalNumbers);
console.log("Mapped Result:  ", mappedNumbers); // [2, 4, 6]
`,

// ==========================================
// Q9: ES6 Classes Inheritance
// ==========================================
"q9_es6_classes_inheritance.js": `"use strict";

console.log("--- Q9: ES6 Classes Inheritance ---");

// Person Class
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(\`Name: \${this.name}\`);
    }
}

// Student Class inheriting from Person
class Student extends Person {
    constructor(name, branch) {
        super(name); // Call parent constructor
        this.branch = branch;
    }

    printBranch() {
        console.log(\`Branch: \${this.branch}\`);
    }
}

const studentObj = new Student("Chaitanya", "AI & Cyber Security");

studentObj.printName();   // Inherited method
studentObj.printBranch(); // Student method

// Verification that ES6 classes utilize prototype mechanism under the hood
console.log("Is studentObj an instance of Person?", studentObj instanceof Person); // true
console.log("Is typeof Person a function?", typeof Person === "function");         // true
`
};

// Write files to disk
for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(filename, content.trim(), 'utf8');
    console.log(`Created: ${filename}`);
}

console.log('\nAll Assignment 5 files successfully generated!');
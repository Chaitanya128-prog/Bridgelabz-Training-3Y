"use strict";

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
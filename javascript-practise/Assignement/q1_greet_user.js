"use strict";

// Callback function to be executed after greeting
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Higher-order function taking name and callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    
    // Callback Flow: Executing the callback function passed as an argument
    if (typeof callback === "function") {
        callback();
    }
}

// Execution demonstration
console.log("--- Q1: Callback Flow Demo ---");
greetUser("Chaitanya", showEndMessage);
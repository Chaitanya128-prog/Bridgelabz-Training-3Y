"use strict";

// Helper function to create random delays (1-2 seconds)
const getRandomDelay = () => Math.floor(Math.random() * 1000) + 1000;

// Step 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 10% chance of failure
                reject("Failed to boil water: Kettle error!");
            } else {
                console.log("Step 1: Water boiled.");
                resolve();
            }
        }, getRandomDelay());
    });
}

// Step 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 10% chance of failure
                reject("Failed to brew coffee: Out of coffee beans!");
            } else {
                console.log("Step 2: Coffee brewed.");
                resolve();
            }
        }, getRandomDelay());
    });
}

// Step 3: Pour into Cup
function pourInCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 10% chance of failure
                reject("Failed to pour: Cup spilled!");
            } else {
                console.log("Step 3: Poured into cup.");
                resolve();
            }
        }, getRandomDelay());
    });
}

// Execution using Promise Chaining (.then())
console.log("--- Starting Async Coffee Maker ---");

boilWater()
    .then(() => brewCoffee())
    .then(() => pourInCup())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee preparation failed:", error);
    });
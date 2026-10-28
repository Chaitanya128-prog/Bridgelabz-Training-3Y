"use strict";

console.log("--- Q4: Method Sharing via Prototypes ---");

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to constructor prototype
Car.prototype.getDetails = function() {
    return `Car Details: ${this.brand} ${this.model}`;
};

// Instantiating car objects
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("BMW", "M4");

console.log(car1.getDetails());
console.log(car2.getDetails());

// Verification of prototype method sharing in memory
console.log("Do both instances share the exact same method reference?", car1.getDetails === car2.getDetails); // true
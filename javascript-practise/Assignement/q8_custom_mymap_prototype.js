"use strict";

console.log("--- Q8: Custom Array.prototype.myMap ---");

// Adding myMap to Array prototype
Array.prototype.myMap = function(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
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
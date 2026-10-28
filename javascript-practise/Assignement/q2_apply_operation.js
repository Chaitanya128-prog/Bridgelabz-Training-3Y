"use strict";

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
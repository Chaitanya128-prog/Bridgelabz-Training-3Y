"use strict";

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
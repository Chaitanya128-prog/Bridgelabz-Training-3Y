"use strict";

function outer() {
    // 1. Output: 'undefined'. Because 'var count' is hoisted to the top of outer(), but initialized below this line.
    console.log("outer count:", count); 
    var count = 5;
    
    // 3. Arrow function equivalent
    const inner = () => {
        // Arrow functions do not have their own 'this' or arguments, but variable hoisting rules apply normally for 'var'.
        // Because of variable shadowing, 'var count' here is hoisted to the top of inner().
        console.log("inner count:", count); // undefined
        var count = 10; 
    };
    inner();
}
outer();

// 2 & 4. Explanation: 
// Hoisting creates distinct memory contexts for 'outer' and 'inner'. 
// The 'count' inside 'inner' shadows the 'count' from 'outer'. 
// When 'inner' runs, JS looks for 'count' in local scope, finds the hoisted (but uninitialized) 'var count', and logs 'undefined'.
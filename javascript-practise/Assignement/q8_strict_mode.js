"use strict";

/*
  Original Code (Throws Errors in strict mode):
  function demo(a, a) { // Error: Duplicate parameter name not allowed
      total = 10;       // Error: total is not defined (implicit global)
      delete total;     // Error: Cannot delete unqualified identifier in strict mode
  }
*/

// 3. Explanation: Strict mode prevents silent failures (like deleting variables), prevents implicit globals (accidental memory leaks), and prevents duplicate parameters (which causes naming collisions and confusion).

// 4. Correct ES6 Version:
function demoFixed(a, b) {
    let total = 10;
    // We cannot 'delete' variables declared with let/const/var anyway.
    // If we need to clear it, we set it to null or undefined.
    total = null;
    console.log(`Total cleared, params: ${a}, ${b}`);
}

demoFixed(5, 10);
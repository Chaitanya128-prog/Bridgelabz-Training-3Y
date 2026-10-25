"use strict";

// 3. Outer loop limit controlled by default parameter
function generatePyramid(limit = 5) {
    // 4. Strict mode catches undeclared variables. We must use let or var.
    // 1 & 2. Changing 'let' to 'var' leaks the loop variables outside the loop block.
    for (let i = 1; i <= limit; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += (j === 1 ? "*" : " *");
        }
        console.log(row);
    }
}

generatePyramid();
// Note on debugging: If 'var' is used in nested async loops, it causes the famous closure bug where the final value of 'i' is shared.
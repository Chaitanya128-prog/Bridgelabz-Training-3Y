"use strict";

const operations = ["add", "divide", "power", "root", "subtract", "modulus"];
const num1 = 25, num2 = 0;

operations.forEach(op => {
    try {
        let result;
        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("DivideByZeroError: Cannot divide by 0.");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) throw new Error("MathError: Cannot calculate root of a negative number.");
                result = Math.sqrt(num1);
                break;
            default:
                throw new Error(`InvalidOperationError: Operation '${op}' not recognized.`);
        }
        console.log(`Operation '${op}' successful. Result: ${result}`);
    } catch (err) {
        console.error(err.message);
    }
});
/**
 * Q9: Random Math Quiz Generator
 * Logic:
 * 1. Generate two random operands (1-20) and pick a random operator from ['+', '-', '*', '/'].
 * 2. Calculate solution using switch statement.
 * 3. Format division results to two decimal places using .toFixed(2).
 */

const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

const operators = ['+', '-', '*', '/'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (randomOperator) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  case '/':
    correctAnswer = (num1 / num2).toFixed(2);
    break;
  default:
    correctAnswer = 0;
}

console.log("=== Random Math Challenge ===");
console.log(`Question      : What is ${num1} ${randomOperator} ${num2}?`);
console.log(`Correct Answer: ${correctAnswer}`);

/**
 * Q7: Smart Guessing Game (Number Range)
 * Logic:
 * 1. Generate random secret target integer between 1 and 50.
 * 2. Compare against test guess using nested conditions and Math.abs() for range proximity.
 */

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 28; // Test input

console.log(`Secret Target: ${secretNumber} | Test Guess: ${userGuess}`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const diff = Math.abs(userGuess - secretNumber);
  if (diff <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}

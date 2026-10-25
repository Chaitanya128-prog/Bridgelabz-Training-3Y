/**
 * Q1: Personalized Login Greeting
 * Logic:
 * 1. Declare variables for user name and current system hour (0-23).
 * 2. Evaluate time brackets to choose the correct time-based message.
 * 3. Use ES6 template literals for output.
 */

const userName = "Chaitanya";
const currentHour = new Date().getHours();

let greeting = "";

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);

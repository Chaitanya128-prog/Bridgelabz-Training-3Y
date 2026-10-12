/**
 * Q10: Citizen Eligibility Validator
 * Logic:
 * 1. Accept age and citizenship status boolean flag.
 * 2. Evaluate age and citizenship criteria using nested/combined logical operations.
 */

const age = 19;
const isCitizen = true;

console.log(`Input Data -> Age: ${age}, Is Citizen: ${isCitizen}`);

if (isCitizen && age >= 18) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else {
    console.log("Eligible to vote only.");
  }
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}

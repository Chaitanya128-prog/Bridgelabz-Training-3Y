/**
 * Q4: Academic Performance Evaluator
 * Logic:
 * 1. Iterate through subject marks array to verify pass threshold (>= 35).
 * 2. Calculate percentage across all subjects.
 * 3. Determine promotion category using logical AND operators.
 */

const subjectMarks = [78, 88, 92, 65, 80]; // Marks for 5 subjects
const PASSING_MARKS = 35;

let hasFailedSubject = false;
let totalMarks = 0;

for (let i = 0; i < subjectMarks.length; i++) {
  if (subjectMarks[i] < PASSING_MARKS) {
    hasFailedSubject = true;
  }
  totalMarks += subjectMarks[i];
}

const overallPercentage = totalMarks / subjectMarks.length;
let statusResult = "";

if (hasFailedSubject) {
  statusResult = "Detained";
} else if (overallPercentage >= 85) {
  statusResult = "Promoted with Distinction";
} else if (overallPercentage >= 50 && overallPercentage <= 84) {
  statusResult = "Promoted";
} else {
  statusResult = "Detained";
}

console.log(`Overall Percentage : ${overallPercentage.toFixed(2)}%`);
console.log(`Academic Status    : ${statusResult}`);

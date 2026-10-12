/**
 * Q2: Multi-Type Data Summary
 * Logic:
 * 1. Declare variables covering key JavaScript data types.
 * 2. Use typeof operator and Array.isArray() to correctly check data types.
 * 3. Consolidate labels, values, and types into a report object and display with console.table().
 */

const stringVal = "Developer";
const numberVal = 101;
const booleanVal = true;
const arrayVal = ["HTML", "CSS", "JS"];
const objectVal = { role: "Admin", active: true };
const nullVal = null;
const undefinedVal = undefined;

function getExactType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

const dataSummary = [
  { label: "User Name", value: stringVal, type: getExactType(stringVal) },
  { label: "User ID", value: numberVal, type: getExactType(numberVal) },
  { label: "Is Active", value: booleanVal, type: getExactType(booleanVal) },
  { label: "Skills Array", value: JSON.stringify(arrayVal), type: getExactType(arrayVal) },
  { label: "Profile Object", value: JSON.stringify(objectVal), type: getExactType(objectVal) },
  { label: "Secondary Contact", value: String(nullVal), type: getExactType(nullVal) },
  { label: "Pending Orders", value: String(undefinedVal), type: getExactType(undefinedVal) }
];

console.table(dataSummary);

"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidData = [];

apiData.forEach(item => {
    // 1. Convert to Number, Boolean, String
    const numForm = Number(item);
    const boolForm = Boolean(item);
    const strForm = String(item);
    
    // 2. Skip invalid numbers
    // Note: Number(" ") is 0, Number(null) is 0, Number(false) is 0. 
    // We strictly check for NaN, or if parsing fails/results in empty string logic.
    let isInvalid = false;
    
    if (Number.isNaN(numForm)) {
        isInvalid = true; // Handles "NaN", "100px", undefined
    } else if (typeof item === "string" && item.trim() === "") {
        isInvalid = true; // Handles " "
    } else if (item === null || typeof item === "boolean" || item === "true" || item === "false") {
        isInvalid = true; // Discard booleans/nulls as they aren't true numeric API values for this context
    }

    if (isInvalid) {
        invalidData.push(item);
    } else {
        validNumericData.push(numForm);
    }
});

// 4. Print detailed report
console.log("=== API DATA PARSING REPORT ===");
console.log("Valid Numeric Data:", validNumericData);
console.log("Invalid Data Log:", invalidData);
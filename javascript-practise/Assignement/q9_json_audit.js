"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const validEntries = [];

rawData.forEach((item, index) => {
    try {
        // 1. Parse each entry
        const obj = JSON.parse(item);
        
        // 2. Detect missing keys
        if (!obj.user || !obj.age) {
            throw new Error("Missing required keys (user, age).");
        }

        // 5. Bonus: convert age to Number and filter under-18
        obj.age = Number(obj.age);
        if (obj.age < 18) {
            throw new Error("User is under 18.");
        }

        // 3. Push valid entries
        validEntries.push(obj);
    } catch (err) {
        // Log errors with line/index numbers
        console.error(`Error at index ${index} ('${item}'): ${err.message}`);
    }
});

console.log("Valid Entries:", validEntries);
// 4. Debug note: Step through the try...catch to observe how '{invalid}' immediately throws a SyntaxError on JSON.parse(), skipping the validation logic.
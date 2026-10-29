"use strict";

// Mock API that fails 50% of the time
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Network error: Server unavailable");
            } else {
                resolve("Order #9402 successfully placed!");
            }
        }, 1000);
    });
}

// Retry handler with up to 3 attempts
async function processOrder() {
    console.log("--- Q8: Processing Order with Retry Logic ---");
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success -> ${result}`);
            return; // Exit on success
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed -> ${error}`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed after maximum retry attempts.");
            }
        }
    }
}

// Wrapper to handle final failure gracefully
async function runOrderSystem() {
    try {
        await processOrder();
    } catch (finalError) {
        console.error("Final Result:", finalError.message);
    }
}

runOrderSystem();
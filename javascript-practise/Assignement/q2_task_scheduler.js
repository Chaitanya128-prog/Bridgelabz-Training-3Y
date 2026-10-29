"use strict";

console.log("--- Q2: Microtask vs Macrotask Order ---");

// 1. Synchronous log
console.log("Start");

// 2. Macrotask (Callback Queue)
setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

// 3. Microtask (Microtask Queue)
Promise.resolve().then(() => {
    console.log("Microtask: Resolved Promise.then()");
});

// 4. Synchronous log
console.log("Synchronous task execution");

// 5. Synchronous log
console.log("End");

/*
 * EXPLANATION OF EVENT LOOP PRIORITIZATION:
 * 
 * Actual Output Order:
 * 1. "Start"
 * 2. "Synchronous task execution"
 * 3. "End"
 * 4. "Microtask: Resolved Promise.then()"
 * 5. "Macrotask: setTimeout callback"
 * 
 * WHY MICROTASKS RUN BEFORE MACROTASKS:
 * - Synchronous code executes immediately on the main Call Stack.
 * - When asynchronous tasks complete, their callbacks are sent to queues:
 *   - Promises populate the Microtask Queue.
 *   - Timer events (setTimeout/setInterval) populate the Macrotask (Callback) Queue.
 * - Once the Call Stack empties, the Event Loop checks the Microtask Queue FIRST.
 * - The Event Loop MUST process ALL pending microtasks before picking up a single macrotask.
 */
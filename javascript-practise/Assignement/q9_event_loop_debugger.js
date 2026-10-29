"use strict";

/*
 * PREDICTED OUTPUT ORDER BEFORE EXECUTION:
 * 1. "Script start"
 * 2. "Script end"
 * 3. "Promise callback"
 * 4. "Timeout callback"
 */

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
 * DETAILED EXPLANATION OF EVENT LOOP BEHAVIOR:
 * 
 * 1. "Script start" is executed synchronously on the main thread.
 * 2. setTimeout(..., 0) registers a timer with the Web API / Node environment. 
 *    When expired, its callback is pushed to the Macrotask (Callback) Queue.
 * 3. Promise.resolve().then(...) immediately queues its fulfillment callback into the Microtask Queue.
 * 4. "Script end" is executed synchronously.
 * 5. Main thread call stack is now empty.
 * 6. The Event Loop prioritizes the Microtask Queue first and executes "Promise callback".
 * 7. Microtask Queue is now empty. The Event Loop pulls from the Macrotask Queue and executes "Timeout callback".
 */
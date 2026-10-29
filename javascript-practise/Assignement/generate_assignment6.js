const fs = require('fs');

const files = {
// ==========================================
// Q1: The Startup Morning: Async Coffee Maker
// ==========================================
"q1_async_coffee_maker.js": `"use strict";

// Helper function to create random delays (1-2 seconds)
const getRandomDelay = () => Math.floor(Math.random() * 1000) + 1000;

// Step 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 10% chance of failure
                reject("Failed to boil water: Kettle error!");
            } else {
                console.log("Step 1: Water boiled.");
                resolve();
            }
        }, getRandomDelay());
    });
}

// Step 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 10% chance of failure
                reject("Failed to brew coffee: Out of coffee beans!");
            } else {
                console.log("Step 2: Coffee brewed.");
                resolve();
            }
        }, getRandomDelay());
    });
}

// Step 3: Pour into Cup
function pourInCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 10% chance of failure
                reject("Failed to pour: Cup spilled!");
            } else {
                console.log("Step 3: Poured into cup.");
                resolve();
            }
        }, getRandomDelay());
    });
}

// Execution using Promise Chaining (.then())
console.log("--- Starting Async Coffee Maker ---");

boilWater()
    .then(() => brewCoffee())
    .then(() => pourInCup())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee preparation failed:", error);
    });
`,

// ==========================================
// Q2: Task Scheduler: Micro vs Macro Challenge
// ==========================================
"q2_task_scheduler.js": `"use strict";

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
`,

// ==========================================
// Q3: Bug Tracker: Callback to Promise Migration
// ==========================================
"q3_bug_tracker.js": `"use strict";

// Modernized Promise-based Bug Fetcher
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasApiError = Math.random() < 0.2; // 20% failure chance

            if (hasApiError) {
                reject("API Timeout: Unable to fetch bug list.");
            } else {
                const bugs = [
                    { id: 101, title: "UI glitch", severity: "Low" },
                    { id: 102, title: "API timeout", severity: "High" },
                    { id: 103, title: "Login failure", severity: "Critical" }
                ];
                resolve(bugs);
            }
        }, 1000);
    });
}

console.log("--- Q3: Fetching Bugs (Promise-based) ---");

getBugs()
    .then((bugList) => {
        console.log("Bugs fetched successfully:");
        console.table(bugList);
    })
    .catch((error) => {
        console.error("Bug Tracker Error:", error);
    });
`,

// ==========================================
// Q4: DevOps Delay: Async Timeout Race
// ==========================================
"q4_devops_delay.js": `"use strict";

// Server A Response
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) reject("Server A Crashed!");
            else resolve("Server A responded in 2 seconds");
        }, 2000);
    });
}

// Server B Response
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) reject("Server B Crashed!");
            else resolve("Server B responded in 3 seconds");
        }, 3000);
    });
}

console.log("--- Q4: Managing Concurrent Server Responses ---");

// 1. Promise.all() -> Waits for ALL servers to complete
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers.");
        console.log("Results:", results);
    })
    .catch((err) => {
        console.error("Promise.all Failed:", err);
    });

// 2. Promise.race() -> Resolves/Rejects with the FIRST responder
Promise.race([serverA(), serverB()])
    .then((winner) => {
        console.log("Fastest response:", winner);
    })
    .catch((err) => {
        console.error("Promise.race Failed:", err);
    });
`,

// ==========================================
// Q5: Frontend Rush: Avoiding Callback Hell
// ==========================================
"q5_callback_hell_refactor.js": `"use strict";

console.log("--- Q5: Refactoring Callback Hell ---");

// --- PART 1: NESTED CALLBACKS (Callback Hell) ---
function runCallbackPipeline() {
    console.log("\n[Callback Version Starting]");
    setTimeout(() => {
        console.log("Stage 1: Design complete");
        setTimeout(() => {
            console.log("Stage 2: Build complete");
            setTimeout(() => {
                console.log("Stage 3: Test complete");
                setTimeout(() => {
                    console.log("Stage 4: Deploy complete");
                    setTimeout(() => {
                        console.log("Stage 5: Celebrate!");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// --- PART 2: CLEAN ASYNC/AWAIT REFACTOR ---
const delayStage = (stageName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
};

async function runAsyncPipeline() {
    console.log("\n[Async/Await Version Starting]");
    await delayStage("Stage 1: Design complete");
    await delayStage("Stage 2: Build complete");
    await delayStage("Stage 3: Test complete");
    await delayStage("Stage 4: Deploy complete");
    await delayStage("Stage 5: Celebrate!");
}

/*
 * WHY ASYNC/AWAIT IMPROVES READABILITY:
 * 1. Eliminates deep indentation pyramid ("Pyramid of Doom").
 * 2. Allows asynchronous code to be read sequentially top-to-bottom like synchronous code.
 * 3. Simplifies error handling using standard try/catch blocks instead of error callbacks at every level.
 */

// Uncomment to view callback version first:
// runCallbackPipeline();

// Running the async/await version:
runAsyncPipeline();
`,

// ==========================================
// Q6: E-Commerce Dashboard: Product Card Fetcher (.js)
// ==========================================
"q6_product_fetcher.js": `"use strict";

async function fetchProducts() {
    console.log("--- Q6: Fetching E-Commerce Products ---");
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
            throw new Error(\`HTTP Error! Status: \${response.status}\`);
        }

        const products = await response.json();

        // Log required details for each product
        products.slice(0, 5).forEach((product) => { // Displaying first 5 items
            console.log(\`Product: \${product.title}\`);
            console.log(\`Price: $\${product.price}\`);
            console.log(\`Image: \${product.image}\`);
            console.log("-----------------------------------");
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

fetchProducts();
`,

// ==========================================
// Q6 Optional HTML Companion File
// ==========================================
"q6_product_fetcher.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card Fetcher</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f4f4f9; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
        .card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
        .card img { max-width: 100px; height: 120px; object-fit: contain; }
        .price { color: #27ae60; font-weight: bold; margin: 10px 0; }
        .error { color: red; font-size: 18px; text-align: center; }
    </style>
</head>
<body>
    <h2>E-Commerce Product Dashboard</h2>
    <div id="status">Loading products...</div>
    <div id="productContainer" class="grid"></div>

    <script>
        async function renderProducts() {
            const statusDiv = document.getElementById("status");
            const container = document.getElementById("productContainer");

            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) throw new Error("Network response was not ok");
                
                const products = await res.json();
                statusDiv.style.display = "none";

                products.forEach(product => {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = \`
                        <img src="\${product.image}" alt="\${product.title}">
                        <h4>\${product.title.substring(0, 30)}...</h4>
                        <div class="price">$\${product.price}</div>
                    \`;
                    container.appendChild(card);
                });
            } catch (err) {
                statusDiv.className = "error";
                statusDiv.innerText = "Failed to load products. Please try again.";
            }
        }
        renderProducts();
    </script>
</body>
</html>
`,

// ==========================================
// Q7: The Lazy Loader: Promise Combinator Practice
// ==========================================
"q7_lazy_loader.js": `"use strict";

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Profile failed to load") : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Posts failed to load") : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Messages failed to load") : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    console.log("--- Q7: Loading Dashboard Sections ---");
    const startTime = Date.now();

    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(\`[SUCCESS] \${moduleNames[index]}: \${result.value}\`);
        } else {
            console.log(\`[FAILED]  \${moduleNames[index]}: \${result.reason}\`);
        }
    });

    const endTime = Date.now();
    console.log(\`Total Execution Time: \${endTime - startTime} ms\`);
}

loadDashboard();
`,

// ==========================================
// Q8: Order Processing Flow: Async Retry Mechanism
// ==========================================
"q8_async_retry.js": `"use strict";

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
            console.log(\`Attempt \${attempt}: Success -> \${result}\`);
            return; // Exit on success
        } catch (error) {
            console.log(\`Attempt \${attempt}: Failed -> \${error}\`);
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
`,

// ==========================================
// Q9: Debugging the Event Loop
// ==========================================
"q9_event_loop_debugger.js": `"use strict";

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
`,

// ==========================================
// Q10: The Final Delivery: Async Pipeline Debugger
// ==========================================
"q10_food_delivery_pipeline.js": `"use strict";

const getRandomDelay = () => Math.floor(Math.random() * 1000) + 1000;

function createStepPromise(stepDescription) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 10% chance of step failure
            if (Math.random() < 0.1) {
                reject(\`Failure at stage: \${stepDescription}\`);
            } else {
                resolve(stepDescription);
            }
        }, getRandomDelay());
    });
}

function takeOrder() { return createStepPromise("Step 1: Order taken"); }
function prepare()   { return createStepPromise("Step 2: Food prepared"); }
function pack()      { return createStepPromise("Step 3: Package ready"); }
function dispatch()  { return createStepPromise("Step 4: Out for delivery"); }
function deliver()   { return createStepPromise("Delivery completed!"); }

async function runPipeline() {
    console.log("--- Starting Food Delivery Pipeline ---");
    try {
        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());
    } catch (error) {
        console.error(error);
        console.error("Pipeline failed!");
    }
}

runPipeline();

/*
 * ASYNC BEHAVIOR & EVENT LOOP CONTROL SUMMARY:
 * 1. Each pipeline step returns a Promise that resolves after a 1-2 second asynchronous timer.
 * 2. The 'await' keyword pauses the execution of 'runPipeline()' until the step's Promise settles.
 * 3. Pausing inside 'async' yields control back to the Event Loop, allowing other tasks to run without blocking the single thread.
 * 4. If any step rejects, control instantly transfers to the 'catch' block, halting subsequent pipeline stages cleanly.
 */
`
};

// Write files to disk
for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(filename, content.trim(), 'utf8');
    console.log(`Created: ${filename}`);
}

console.log('\nAll Assignment 6 files successfully generated!');
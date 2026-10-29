"use strict";

console.log("--- Q5: Refactoring Callback Hell ---");

// --- PART 1: NESTED CALLBACKS (Callback Hell) ---
function runCallbackPipeline() {
    console.log("
[Callback Version Starting]");
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
    console.log("
[Async/Await Version Starting]");
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
"use strict";

const getRandomDelay = () => Math.floor(Math.random() * 1000) + 1000;

function createStepPromise(stepDescription) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 10% chance of step failure
            if (Math.random() < 0.1) {
                reject(`Failure at stage: ${stepDescription}`);
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
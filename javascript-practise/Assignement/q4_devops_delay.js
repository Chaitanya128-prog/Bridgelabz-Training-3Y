"use strict";

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
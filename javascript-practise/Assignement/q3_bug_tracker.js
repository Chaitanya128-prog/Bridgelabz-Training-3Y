"use strict";

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
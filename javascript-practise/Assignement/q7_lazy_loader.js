"use strict";

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
            console.log(`[SUCCESS] ${moduleNames[index]}: ${result.value}`);
        } else {
            console.log(`[FAILED]  ${moduleNames[index]}: ${result.reason}`);
        }
    });

    const endTime = Date.now();
    console.log(`Total Execution Time: ${endTime - startTime} ms`);
}

loadDashboard();
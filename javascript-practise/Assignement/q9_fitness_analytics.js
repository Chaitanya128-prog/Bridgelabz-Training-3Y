"use strict";

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }
        this.data = data;
    }

    // Users with steps > 7000 using filter()
    getActiveUsers() {
        return this.data.filter(entry => entry.steps > 7000);
    }

    // Average calories burned using reduce()
    getAverageCalories() {
        const totalCalories = this.data.reduce((sum, entry) => sum + entry.calories, 0);
        return Number((totalCalories / this.data.length).toFixed(2));
    }

    // Formatted summary messages using map()
    getUserSummary() {
        return this.data.map(
            entry => `User ${entry.user} completed ${entry.steps} steps and burned ${entry.calories} kcal.`
        );
    }
}

console.log("--- Q9: Fitness App Analytics ---");

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("1. Active Users (steps > 7000):");
    console.table(analytics.getActiveUsers());

    console.log(`2. Average Calories Burned: ${analytics.getAverageCalories()} kcal`);

    console.log("
3. User Summaries:");
    analytics.getUserSummary().forEach(msg => console.log("- " + msg));
} catch (error) {
    console.error("Analytics Error:", error.message);
}

console.log("--------------------------------");

// Testing error handling on an empty dataset
try {
    const emptyAnalytics = new FitnessAnalytics([]);
    emptyAnalytics.getActiveUsers();
} catch (error) {
    console.error("Empty Dataset Handled:", error.message);
}
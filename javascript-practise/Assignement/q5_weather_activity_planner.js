/**
 * Q5: Weather Activity Planner
 * Logic:
 * 1. Check raining status first.
 * 2. Evaluate high heat (> 35°C) and cold/windy combinations (< 15°C AND > 20 km/h).
 * 3. Provide appropriate outdoor/indoor recommendations.
 */

const temperature = 12; // °C
const isRaining = false;
const windSpeed = 25;   // km/h

let recommendation = "";

if (isRaining) {
  recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  recommendation = "Too cold and windy — stay home.";
} else {
  recommendation = "Perfect day for a walk.";
}

console.log(`Current Conditions: Temp ${temperature}°C, Wind ${windSpeed}km/h, Rain: ${isRaining}`);
console.log(`Recommendation    : ${recommendation}`);

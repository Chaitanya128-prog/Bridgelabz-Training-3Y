"use strict";

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleDetails) {
        super(name, rating);
        this.vehicleDetails = vehicleDetails;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance, driver = null) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
        this.driver = driver;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || typeof this.distance !== "number" || Number.isNaN(this.distance)) {
            throw new Error("Distance must be provided as a valid number.");
        }
        if (this.distance <= 0) {
            throw new Error("Distance cannot be zero or negative.");
        }

        const baseFare = 30;
        const ratePerKm = 12;
        return baseFare + this.distance * ratePerKm;
    }
}

console.log("--- Q5: Ride-Sharing Application ---");

const driver1 = new Driver("Rajesh", 4.9, "Maruti Swift Dzire (UP-85-AB-1234)");

// Test 1: Valid Trip
try {
    const trip1 = new Trip("Mathura Junction", "GLA University", 14, driver1);
    const fare = trip1.calculateFare();
    console.log(`Trip: ${trip1.fromLocation} -> ${trip1.toLocation} (${trip1.distance} km)`);
    console.log(`Driver: ${driver1.name} (Rating: ${driver1.rating}★) | Vehicle: ${driver1.vehicleDetails}`);
    console.log(`Calculated Fare: ₹${fare}`);
} catch (error) {
    console.error("Trip Error:", error.message);
}

console.log("--------------------------------");

// Test 2: Negative Distance
try {
    const invalidTrip = new Trip("Aligarh", "Agra", -25);
    console.log(`Fare: ₹${invalidTrip.calculateFare()}`);
} catch (error) {
    console.error("Trip Error (Negative Distance):", error.message);
}

// Test 3: Missing Distance
try {
    const missingDistanceTrip = new Trip("Delhi", "Noida");
    console.log(`Fare: ₹${missingDistanceTrip.calculateFare()}`);
} catch (error) {
    console.error("Trip Error (Missing Distance):", error.message);
}
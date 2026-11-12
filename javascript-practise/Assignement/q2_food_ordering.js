"use strict";

const menu = [
    { name: "Paneer Tikka", price: 220 },
    { name: "Masala Dosa", price: 120 },
    { name: "Veg Biryani", price: 180 },
    { name: "Cold Coffee", price: 90 }
];

function calculateBill(orderItems) {
    // Use map() to convert ordered item names into a list of prices
    const priceList = orderItems.map(itemName => {
        const foundItem = menu.find(
            menuItem => menuItem.name.toLowerCase() === itemName.toLowerCase()
        );

        if (!foundItem) {
            throw new Error(`Invalid item ordered: "${itemName}" is not on the menu.`);
        }

        return foundItem.price;
    });

    // Use reduce() to calculate the total bill
    const totalAmount = priceList.reduce((total, price) => total + price, 0);
    return { priceList, totalAmount };
}

console.log("--- Q2: Online Food Ordering ---");

// Test 1: Valid Order
try {
    const validOrder = ["Paneer Tikka", "Veg Biryani", "Cold Coffee"];
    const bill = calculateBill(validOrder);
    console.log("Ordered Items:", validOrder);
    console.log("Item Prices:  ", bill.priceList);
    console.log(`Total Bill:    ₹${bill.totalAmount}`);
} catch (error) {
    console.error("Order Failed:", error.message);
}

console.log("--------------------------------");

// Test 2: Invalid Order (triggers error handling)
try {
    const invalidOrder = ["Masala Dosa", "Sushi Platter"];
    const bill = calculateBill(invalidOrder);
    console.log(`Total Bill: ₹${bill.totalAmount}`);
} catch (error) {
    console.error("Order Failed:", error.message);
}
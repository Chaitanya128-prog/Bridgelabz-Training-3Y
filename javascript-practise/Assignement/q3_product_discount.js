"use strict";

// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method abstracting away discount calculation logic
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount percentage must be between 0 and 100.");
    }
    const discountAmount = (this.price * percent) / 100;
    return Number((this.price - discountAmount).toFixed(2));
};

console.log("--- Q3: Product Discount System ---");

const product1 = new Product("Mechanical Keyboard", 3500);
const product2 = new Product("Wireless Mouse", 1200);
const product3 = new Product("USB-C Hub", 2000);

console.log(`${product1.name}: Original = ₹${product1.price} | After 10% Discount = ₹${product1.applyDiscount(10)}`);
console.log(`${product2.name}: Original = ₹${product2.price} | After 25% Discount = ₹${product2.applyDiscount(25)}`);
console.log(`${product3.name}: Original = ₹${product3.price} | After 15% Discount = ₹${product3.applyDiscount(15)}`);

/*
 * HOW ABSTRACTION SIMPLIFIES OPERATIONS:
 * Callers only interact with a clean interface: product.applyDiscount(percent).
 * The internal formula (price - (price * percent / 100)), rounding logic, and
 * validation rules remain encapsulated inside Product.prototype, preventing
 * duplicate arithmetic across the codebase.
 */
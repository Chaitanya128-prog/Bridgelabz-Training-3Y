"use strict";

const inventory = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Wireless Earbuds", category: "Electronics", price: 2500, stock: 18 },
    { id: 3, name: "Ergonomic Chair", category: "Furniture", price: 12000, stock: 3 },
    { id: 4, name: "Study Desk", category: "Furniture", price: 8500, stock: 7 },
    { id: 5, name: "Notebook Pack", category: "Stationery", price: 300, stock: 50 },
    { id: 6, name: "Fountain Pen", category: "Stationery", price: 950, stock: 2 }
];

// 1. Get products with stock <= 5 using filter()
function getLowStockProducts(products, threshold = 5) {
    return products.filter(product => product.stock <= threshold);
}

// 2. Sort products by price ascending using sort()
function sortProductsByPrice(products) {
    // Shallow copy with [...products] avoids mutating the original array
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total value of all stock using reduce()
function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}

// 4. Group products by category using reduce() + object grouping
function groupByCategory(products) {
    return products.reduce((grouped, product) => {
        if (!grouped[product.category]) {
            grouped[product.category] = [];
        }
        grouped[product.category].push(product);
        return grouped;
    }, {});
}

console.log("--- Q6: E-Commerce Inventory System ---");

console.log("
1. Low Stock Products (stock <= 5):");
console.table(getLowStockProducts(inventory));

console.log("
2. Products Sorted by Price (Low to High):");
console.table(sortProductsByPrice(inventory));

console.log(`
3. Total Inventory Value: ₹${calculateTotalInventoryValue(inventory).toLocaleString("en-IN")}`);

console.log("
4. Products Grouped by Category:");
console.log(groupByCategory(inventory));
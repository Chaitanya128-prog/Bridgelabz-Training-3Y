"use strict";

async function fetchProducts() {
    console.log("--- Q6: Fetching E-Commerce Products ---");
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const products = await response.json();

        // Log required details for each product
        products.slice(0, 5).forEach((product) => { // Displaying first 5 items
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("-----------------------------------");
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

fetchProducts();
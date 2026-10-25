class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * (percent / 100);
        return this.price;
    }

    displayDetails() {
        return `[${this.id}] ${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Laptop", 1200, "Electronics"),
    new Product(2, "Smartphone", 800, "Electronics"),
    new Product(3, "Desk Chair", 250, "Furniture"),
    new Product(4, "Gaming Monitor", 1100, "Electronics")
];

console.log("--- Products over $1000 ---");
products.filter(p => p.price > 1000).forEach(p => {
    console.log(p.displayDetails());
});
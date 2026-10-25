class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    applyCoupon(couponCode) {
        const total = this.getTotal();
        const couponRegex = /^(SAVE|DISC)(\d{2})$/;
        const match = couponCode.match(couponRegex);

        if (match) {
            const discountPercent = parseInt(match[2]);
            const finalTotal = total - (total * (discountPercent / 100));
            console.log(`Valid Coupon! ${discountPercent}% applied.`);
            console.log(`Final Total: $${finalTotal}`);
        } else {
            console.log("Invalid Coupon Code.");
            console.log(`Final Total: $${total}`);
        }
    }
}

const myCart = new Cart();
myCart.addItem("Headphones", 100, 1);
myCart.addItem("Keyboard", 50, 2);

console.log(`Subtotal: $${myCart.getTotal()}`);
myCart.applyCoupon("SAVE20");
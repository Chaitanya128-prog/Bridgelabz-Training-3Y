"use strict";

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method directly to MovieTicket.prototype
MovieTicket.prototype.printTicket = function () {
    console.log(`[TICKET] Movie: ${this.movieName} | Seat: ${this.seatNo} | Base Price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

console.log("--- Q8: Movie Ticket Booking System ---");

const ticket1 = new OnlineTicket("Interstellar", "F-12", 350, 45);

// Calling printTicket() defined on MovieTicket.prototype from an OnlineTicket instance
ticket1.printTicket();
console.log(`Convenience Fee: ₹${ticket1.convenienceFee} | Total Payable: ₹${ticket1.getTotalAmount()}`);

// Demonstrating the prototype chain
console.log("
--- Prototype Chain Verification ---");
console.log("ticket1 instanceof OnlineTicket:", ticket1 instanceof OnlineTicket); // true
console.log("ticket1 instanceof MovieTicket: ", ticket1 instanceof MovieTicket);  // true
console.log(
    "OnlineTicket.prototype inherits from MovieTicket.prototype:",
    Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
); // true
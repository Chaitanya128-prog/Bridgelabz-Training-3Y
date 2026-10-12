/**
 * Q6: Progressive Discount System
 * Logic:
 * 1. Compare total against tiered boundaries (10000, 5000, 2000).
 * 2. Apply applicable discount percentage and compute savings.
 * 3. Round net amounts using Math.round().
 */

const totalPurchase = 7850;
let discountPercent = 0;

if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = totalPurchase - discountAmount;

console.log("=== Shopping Discount Breakdown ===");
console.log(`Original Total     : ₹${Math.round(totalPurchase)}`);
console.log(`Discount Percentage: ${discountPercent}%`);
console.log(`Final Price        : ₹${Math.round(finalPrice)}`);

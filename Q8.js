// Q8. Online Food Delivery System

// Case Study: An online food delivery service calculates delivery charges according to order amount and delivery distance. Orders of Rs. 2,000 or more receive free delivery for distances up to 5 km. Orders below Rs. 2,000 are charged Rs. 100 for distances up to 5 km. For every kilometre beyond 5 km, an additional Rs. 20 is charged.

// Task: Calculate the delivery charges and final payable amount. Display the food order amount, delivery charges and total bill.


let amount = 2200;
let distance = 7;
let deliveryCharges = 0;

if (amount >= 2000 && distance <= 5) {
    deliveryCharges = 0;
}
else if (amount < 2000 && distance <= 5) {
    deliveryCharges = 100;
}
else if (distance > 5) {
    if (amount >= 2000) {
        deliveryCharges = (distance - 5) * 20;
    } else {
        deliveryCharges = 100 + (distance - 5) * 20;
    }
}

let totalBill = amount + deliveryCharges;

console.log("Food Order Amount: " + amount);
console.log("Delivery Charges: " + deliveryCharges);
console.log("Total Bill: " + totalBill);
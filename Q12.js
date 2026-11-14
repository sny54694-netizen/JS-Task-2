
// *Q12. Supermarket Inventory and Sales Management*

// *Case Study:* A supermarket has 100 units of a product in stock. Each unit costs Rs. 500.

// *Task:* Process customer purchase requests until the stock becomes zero or the user enters 0. Reject negative quantities and requests greater than the available stock. Accept valid requests, update the remaining stock and calculate the bill for each successful purchase. At the end, display total units sold, remaining stock and total revenue.


let stock = 100;
let pricePerUnit = 500;
let totalUnitsSold = 0;
let totalRevenue = 0;

// Ye test values hain, har customer ki request
let requests = [20, 30, -5, 200, 50, 0];

for (let i = 0; i < requests.length; i++) {
    let quantity = requests[i];

    console.log("Request: " + quantity + " units");

    if (quantity === 0) {
        console.log("Stopped by user.");
        break;
    }

    if (quantity < 0) {
        console.log("Rejected! Negative quantity not allowed.");
        continue;
    }

    if (quantity > stock) {
        console.log("Rejected! Only " + stock + " units available in stock.");
        continue;
    }

    let bill = quantity * pricePerUnit;
    stock = stock - quantity;
    totalUnitsSold = totalUnitsSold + quantity;
    totalRevenue = totalRevenue + bill;

    console.log("Accepted! Bill: Rs. " + bill + " - Remaining Stock: " + stock);

    if (stock === 0) {
        console.log("Stock finished.");
        break;
    }
}

console.log("Total Units Sold: " + totalUnitsSold);
console.log("Remaining Stock: " + stock);
console.log("Total Revenue: Rs. " + totalRevenue);
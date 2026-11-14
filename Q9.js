// *Q9. ATM Daily Transaction Limit*

// *Case Study:* A bank allows customers to make multiple withdrawals in one day. The maximum daily withdrawal limit is Rs. 50,000.

// *Task:* Process withdrawal requests until the customer enters 0, or the daily limit is reached. Reject negative amounts and requests that exceed the remaining daily limit. Accept valid requests and update the total withdrawn amount. At the end, display the total amount withdrawn and the remaining daily limit.


let dailyLimit = 50000;
let totalWithdrawn = 0;
let remainingLimit = 50000;

while (true) {
    let amount = Number(prompt("Enter withdrawal amount (0 to stop): "));

    if (amount === 0) {
        console.log("Transaction stopped by user.");
        break;
    }

    if (amount < 0) {
        console.log("Invalid amount! Negative amount rejected.");
        continue;
    }

    if (amount > remainingLimit) {
        console.log("Rejected! Amount exceeds remaining daily limit of Rs. " + remainingLimit);
        continue;
    }

    totalWithdrawn = totalWithdrawn + amount;
    remainingLimit = dailyLimit - totalWithdrawn;
    console.log("Accepted! Withdrawn: Rs. " + amount + " | Total Withdrawn: Rs. " + totalWithdrawn);

    if (remainingLimit === 0) {
        console.log("Daily limit reached.");
        break;
    }
}

console.log("Total Amount Withdrawn: Rs. " + totalWithdrawn);
console.log("Remaining Daily Limit: Rs. " + remainingLimit);
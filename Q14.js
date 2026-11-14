
// *Q14. Monthly Mobile Data Usage and Package Management*

// *Case Study:* A mobile network company provides a monthly data package of 10 GB. A customer can use the package over a period of 30 days.

// *Task:* Accept daily data usage for 30 days or until the package is exhausted. Reject negative usage and usage greater than the remaining package. Update the remaining data after each valid entry. At the end, display total data consumed, remaining data and usage category according to these rules:

// - Below 5 GB: Low Usage.
// - 5 GB to 8 GB inclusive: Moderate Usage.
// - Above 8 GB but below 10 GB: High Usage.
// - Exactly 10 GB consumed: Package Exhausted.


let totalPackage = 10;
let remainingData = 10;
let totalConsumed = 0;


let dailyUsage = [0.5, 1.2, -1, 0.8, 2.0, 15, 1.5, 1.0, 2.0];

for (let day = 1; day <= 30; day++) {
    if (day > dailyUsage.length) {
        break;
    }

    let usage = dailyUsage[day - 1];
    console.log("Day " + day + " - Usage: " + usage + " GB");

    if (usage < 0) {
        console.log("Rejected! Negative usage not allowed.");
        continue;
    }

    if (usage > remainingData) {
        console.log("Rejected! Usage greater than remaining package (" + remainingData + " GB).");
        continue;
    }

    remainingData = remainingData - usage;
    totalConsumed = totalConsumed + usage;

    console.log("Accepted! Remaining Data: " + remainingData.toFixed(2) + " GB");

    if (remainingData === 0) {
        console.log("Package Exhausted.");
        break;
    }
}

let category = "";

if (totalConsumed === 10) {
    category = "Package Exhausted";
}
else if (totalConsumed > 8) {
    category = "High Usage";
}
else if (totalConsumed >= 5) {
    category = "Moderate Usage";
}
else {
    category = "Low Usage";
}

console.log("-------------------------");
console.log("Total Data Consumed: " + totalConsumed.toFixed(2) + " GB");
console.log("Remaining Data: " + remainingData.toFixed(2) + " GB");
console.log("Usage Category: " + category);
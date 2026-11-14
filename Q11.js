// *Q11. University Scholarship Eligibility System*

// *Case Study:* A university offers scholarships based on students' academic performance and monthly family income. The annual university fee is Rs. 100,000.

// *Task:* Determine the scholarship percentage, calculate the scholarship amount and display the remaining fee payable. Apply the following policy:

// - Percentage 90 or above and monthly family income below Rs. 50,000: 100% scholarship.
// - Percentage 80 or above and monthly family income below Rs. 70,000: 50% scholarship.
// - Percentage 70 or above and monthly family income below Rs. 40,000: 25% scholarship.
// - All other students are not eligible for a scholarship.


let annualFee = 100000;


let students = [
    { percentage: 95, income: 45000 },
    { percentage: 85, income: 60000 },
    { percentage: 75, income: 35000 },
    { percentage: 60, income: 80000 }
];

for (let i = 0; i < students.length; i++) {
    let percentage = students[i].percentage;
    let income = students[i].income;
    let scholarshipPercent = 0;

    if (percentage >= 90 && income < 50000) {
        scholarshipPercent = 100;
    }
    else if (percentage >= 80 && income < 70000) {
        scholarshipPercent = 50;
    }
    else if (percentage >= 70 && income < 40000) {
        scholarshipPercent = 25;
    }
    else {
        scholarshipPercent = 0;
    }

    let scholarshipAmount = (annualFee * scholarshipPercent) / 100;
    let remainingFee = annualFee - scholarshipAmount;

    console.log("Student " + (i + 1) + " - Percentage: " + percentage + "% - Income: Rs. " + income);
    console.log("Scholarship: " + scholarshipPercent + "% - Scholarship Amount: Rs. " + scholarshipAmount);
    console.log("Remaining Fee Payable: Rs. " + remainingFee);
    console.log("-------------------------");
}
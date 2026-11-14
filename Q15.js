
// *Q15. University Examination Performance Analysis*

// *Case Study:* A university wants to analyse the examination performance of 10 students. Each student receives marks out of 100.

// *Task:* Process the marks of all 10 students and generate a performance report. Use these categories: 85–100 Excellent, 70–84 Very Good, 50–69 Good, and below 50 Fail. The report must include:

// - Marks and performance category of each student.
// - Total marks obtained by all students and the class average.
// - Number of students in each performance category.
// - Highest and lowest marks.
// - Percentage of students who passed.
// - Student numbers of all students who scored above the class average.
// - Overall class performance based on average: 85 or above Excellent Class Performance; 70–84 Good Class Performance; 50–69 Satisfactory Class Performance; below 50 Poor Class Performance.



let marks = [92, 78, 65, 45, 88, 71, 55, 39, 82, 60];

let totalMarks = 0;
let highest = marks[0];
let lowest = marks[0];

let excellentCount = 0;
let veryGoodCount = 0;
let goodCount = 0;
let failCount = 0;
let passedCount = 0;

console.log("--- Student Wise Report ---");

for (let i = 0; i < marks.length; i++) {
    let m = marks[i];
    let category = "";

    if (m >= 85) {
        category = "Excellent";
        excellentCount++;
    }
    else if (m >= 70) {
        category = "Very Good";
        veryGoodCount++;
    }
    else if (m >= 50) {
        category = "Good";
        goodCount++;
    }
    else {
        category = "Fail";
        failCount++;
    }

    if (m >= 50) {
        passedCount++;
    }

    if (m > highest) {
        highest = m;
    }
    if (m < lowest) {
        lowest = m;
    }

    totalMarks = totalMarks + m;

    console.log("Student " + (i + 1) + " - Marks: " + m + " - Category: " + category);
}

let average = totalMarks / marks.length;
let passPercentage = (passedCount / marks.length) * 100;

console.log("-------------------------");
console.log("Total Marks: " + totalMarks);
console.log("Class Average: " + average.toFixed(2));
console.log("Excellent: " + excellentCount + " students");
console.log("Very Good: " + veryGoodCount + " students");
console.log("Good: " + goodCount + " students");
console.log("Fail: " + failCount + " students");
console.log("Highest Marks: " + highest);
console.log("Lowest Marks: " + lowest);
console.log("Pass Percentage: " + passPercentage + "%");

console.log("Students above average:");
for (let i = 0; i < marks.length; i++) {
    if (marks[i] > average) {
        console.log("Student " + (i + 1) + " - Marks: " + marks[i]);
    }
}

let classPerformance = "";
if (average >= 85) {
    classPerformance = "Excellent Class Performance";
}
else if (average >= 70) {
    classPerformance = "Good Class Performance";
}
else if (average >= 50) {
    classPerformance = "Satisfactory Class Performance";
}
else {
    classPerformance = "Poor Class Performance";
}

console.log("Overall Class Performance: " + classPerformance);


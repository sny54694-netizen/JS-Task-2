// *Q2. Student Result Checker*

// *Case Study:* A college records a student's marks in Computer Science, Mathematics and English. Each subject is marked out of 100.

// *Task:* Calculate the student's total marks and percentage. Display "Pass" if the percentage is 50% or above; otherwise, display "Fail".


let ComputerScience = 50;
let Mathematics = 60;
let English = 17;

let totalMarks = ComputerScience + Mathematics + English;
console.log("Total Marks: " + totalMarks);

let percentage = totalMarks / 300 * 100;
console.log("Percentage: " + percentage);

if(percentage >= 50){
    console.log("Pass");
} else{
    console.log("Fail");
}
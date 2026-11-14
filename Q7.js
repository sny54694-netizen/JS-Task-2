// *Q7. Employee Salary and Bonus Calculator*

// *Case Study:* A company awards employee bonuses according to performance rating and years of service.

// *Task:* Calculate the employee's bonus and final salary using the following policy:

// - Rating 5 and at least 5 years of service: 20% of basic salary.
// - Rating 4 and at least 3 years of service: 15% of basic salary.
// - Rating 3 and at least 2 years of service: 10% of basic salary.
// - All other employees receive no bonus.

// Display the basic salary, bonus amount and final salary.

let ratings = 3;
let service = 2;
let salary = 60000;
let bonus = 0;

if(ratings == 5 && service >= 5){
    bonus = salary * 20/100;

    console.log("Bonus: " + bonus);
    console.log("Net Salary: "+ (salary + bonus))
}
else if(ratings == 4 && service >= 3){
    bonus = salary * 15/100;

    console.log("Bonus: " + bonus);
    console.log("Net Salary: "+ (salary + bonus))
}
else if(ratings == 3 && service >= 2){
    bonus = salary * 10/100;

    console.log("Bonus: " + bonus);
    console.log("Net Salary: "+ (salary + bonus))
}
else{
    console.log("No Bonus");
}
// *Q3. Electricity Bill Calculator*

// *Case Study:* An electricity company charges customers according to their monthly electricity consumption. The first 100 units cost Rs. 10 per unit, and every unit above 100 costs Rs. 15.

// *Task:* Calculate the total electricity bill based on the number of units consumed. Display the consumed units and total bill.
// ---

let units = 150;
let bill;

if (units <= 100){
    bill = units * 10;
} else {
    bill = 100 * 10 +(units - 100)*15;
}
console.log("Consumed Units: " + units);
console.log('Total Bill: Rs. ' + bill);
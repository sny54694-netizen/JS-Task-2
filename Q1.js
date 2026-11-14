// *Q1. Shopping Bill Calculator*

// *Case Study:* A clothing store sells shirts for Rs. 1,500 and trousers for Rs. 2,500. A customer purchases one shirt and one pair of trousers.

// *Task:* Calculate the total bill. Apply a 10% discount if the total bill is Rs. 3,000 or more. Display the original bill, discount amount and final payable amount.

let shirt = 1500;
let trouser = 2500;

let discount = 0;

let totalBill = shirt + trouser;
console.log("Orignal Bill: " +  totalBill);

if (totalBill >= 3000){
    discount = totalBill * 10/100;
    console.log("Discount: " + discount);
} else{
    console.log("No Discount");
}

let finalBill = totalBill - discount;
console.log("Final Bill: " + finalBill);

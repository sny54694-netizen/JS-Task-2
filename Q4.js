// Q4. ATM Withdrawal System

// Case Study: A bank customer has Rs. 20,000 in their account and wants to withdraw a certain amount.

// Task: Check whether the withdrawal amount is greater than zero and does not exceed the available balance. If it is valid, update and display the remaining balance. Otherwise, display an appropriate error message.


let withdraw = 3000;
let totalAmount = 20000;

if(withdraw > 0 && totalAmount >= withdraw){
    totalAmount = totalAmount - withdraw;
    console.log("Remaining Balance: " + totalAmount)
}else{
    console.log("Error!")
}
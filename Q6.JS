// *Q6. Movie Ticket Booking System*

// *Case Study:* A cinema sets ticket prices according to the customer's age. Children below 12 pay Rs. 300, customers aged 12 to 59 pay Rs. 600, and customers aged 60 or above pay Rs. 400. A student discount of 10% is available only on the Rs. 600 ticket.

// *Task:* Determine the ticket price based on age and student status. Apply the discount when the customer meets the stated condition. Display the ticket price, discount amount and final ticket cost.

// let Children = 300;
// let adult = 600;
// let seniorCetizen = 400;

let age = 22;
let student = true;
let discount = 0;
let ticket;

if(age <= 12){
    ticket = 300;
    console.log("Ticket: "+ ticket);
} 

else if(age > 12 && age <= 59){
    ticket = 600;
    console.log("Ticket: "+ ticket); 
    if(student === true){
        discount = ticket *10/100;
        ticket = ticket - discount;
        console.log("Ticket: " + discount);    
    }
}
else{
    ticket = 400;
    console.log("Ticket: "+ ticket);
}

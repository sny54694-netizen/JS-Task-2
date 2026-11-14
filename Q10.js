
// *Q10. Smart Parking Fee Calculator*

// *Case Study:* A shopping mall charges parking fees based on the number of hours a vehicle is parked. The first 2 hours cost Rs. 50 per hour, the next 3 hours cost Rs. 30 per hour, and every hour after 5 hours costs Rs. 20 per hour.

// *Task:* Process vehicles until the user enters 0 hours. Calculate and display the parking fee for each vehicle. After all entries, display the total parking revenue collected.


let totalRevenue = 0;


let vehicles = [1, 3, 6, 8, 0];

for (let i = 0; i < vehicles.length; i++) {
    let hours = vehicles[i];

    if (hours === 0) {
        console.log("No more vehicles. Stopping.");
        break;
    }

    let fee = 0;

    if (hours <= 2) {
        fee = hours * 50;
    }
    else if (hours <= 5) {
        fee = (2 * 50) + (hours - 2) * 30;
    }
    else {
        fee = (2 * 50) + (3 * 30) + (hours - 5) * 20;
    }

    totalRevenue = totalRevenue + fee;
    console.log("Vehicle " + (i + 1) + " - Hours: " + hours + " - Parking Fee: Rs. " + fee);
}

console.log("Total Parking Revenue Collected: Rs. " + totalRevenue);
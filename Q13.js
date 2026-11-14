
// *Q13. Hospital Patient Billing System*

// *Case Study:* A hospital calculates patient bills according to the number of admitted days and room type. Room charges are General: Rs. 2,000 per day, Semi-Private: Rs. 3,500 per day, and Private: Rs. 5,000 per day. Additional services cost Rs. 1,500 for medical tests, Rs. 2,000 for medicines and Rs. 3,000 for emergency service.

// *Task:* Process multiple patients until the user enters 0 as the number of admitted days. For each patient, calculate room charges and add the charges for each selected service. Display each patient's total bill and the hospital's total revenue after all patients have been processed.

let totalRevenue = 0;


let patients = [
    { days: 3, room: "General", services: ["tests", "medicines"] },
    { days: 2, room: "Private", services: ["emergency"] },
    { days: 5, room: "Semi-Private", services: ["tests", "medicines", "emergency"] },
    { days: 0, room: "", services: [] }
];

for (let i = 0; i < patients.length; i++) {
    let days = patients[i].days;
    let room = patients[i].room;
    let services = patients[i].services;

    if (days === 0) {
        console.log("No more patients. Stopping.");
        break;
    }

    let roomChargePerDay = 0;

    if (room === "General") {
        roomChargePerDay = 2000;
    }
    else if (room === "Semi-Private") {
        roomChargePerDay = 3500;
    }
    else if (room === "Private") {
        roomChargePerDay = 5000;
    }

    let roomCharges = days * roomChargePerDay;
    let serviceCharges = 0;

    for (let j = 0; j < services.length; j++) {
        if (services[j] === "tests") {
            serviceCharges = serviceCharges + 1500;
        }
        else if (services[j] === "medicines") {
            serviceCharges = serviceCharges + 2000;
        }
        else if (services[j] === "emergency") {
            serviceCharges = serviceCharges + 3000;
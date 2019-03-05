//setup express and moment
const express = require('express');
const app = express();
const moment = require('moment');

//totalCost function using moment.js for date manipulation
function totalCost(startDate, numberOfDays) {
    let totalCost = 0;
    let currentDate = moment(startDate);
    
    // for loop to traverse through the days starting with startDate
    for (i = 0; i < numberOfDays; i++){
        // inside the for loop check if Saturday or Sunday, skip iteration if true
        if (currentDate.day() == 6 || currentDate.day() == 0){
            currentDate = currentDate.add(1, 'days');   
            continue;
        } 
        // for each date, check the date component.
        // build if else to add up the cost
        else {
            currentDateString = currentDate.format("DD");

            if ((currentDateString >= "01") && (currentDateString <= "07")){
                totalCost = totalCost +  0.05;
            }
            else if ((currentDateString >= "08") && (currentDateString <= "14")){
                totalCost = totalCost +  0.1;
            }
            else if ((currentDateString >= "15") && (currentDateString <= "21")){
                totalCost = totalCost +  0.15;
            }
            else if ((currentDateString >= "22") && (currentDateString <= "28")){
                totalCost = totalCost +  0.2;
            }
            else {
                totalCost = totalCost +  0.25;
            }
            
            currentDate = currentDate.add(1, 'days');
        }
    }
        return parseFloat(totalCost).toFixed(2);
}

//routes
app.get('/', (req, res) => {
    const { startDate, numberOfDays} = req.query;
    if (moment(startDate).isValid()) {
        res.send("Total Cost is $" + totalCost(startDate, numberOfDays));
    } else {
        res.send("Please enter a valid date in the URL in the format MM/DD/YYYY"); 
    }
});

// Listen on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});
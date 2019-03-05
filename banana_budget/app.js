//setup express and moment
const express = require('express');
const app = express();
const moment = require('moment');


//routes
app.get('/', (req, res) => {
    const { startDate, numberOfDays} = req.query;
    if (moment(startDate).isValid()){
        // res.send("Total Cost is $" + totalCost(startDate, numberOfDays));
    } else {
        res.send("Please enter a valid date in the URL in the format MM/DD/YYYY"); 
    }
});

// Listen on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});
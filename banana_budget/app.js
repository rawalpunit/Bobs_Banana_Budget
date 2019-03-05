//setup express and moment
const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
    res.send("Total Cost is $" + totalCost(startDate, numberOfDays));
});

// Listen on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});
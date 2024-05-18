// Project: explore npm moment package, playing with dates
// Author: Samantha Thorne
// Date: 18/05/2024


// require moment
const moment = require('moment');

// displays current moment date object
console.log("Date object: ", moment());

// displays long format of the current month
console.log("Current month: ", moment().format("MMMM"));

// displays the day of the year (out of 365)
console.log("Day of year: ", moment().format("DDDD"));

// displays the day of the month with its suffix (ex. 1st)
console.log("Day with suffix: ", moment().format("Do"));

// displays current weeday
console.log("Current weekday: ", moment().format("dddd"));

// displays current year
console.log("Current year: ", moment().format("YYYY"));

// Displays common date string
console.log("Date sring: ", moment().format("DD/MM/YYYY"));

// Displays the Day with suffix of the long form month
console.log(moment().format("[The] Do [of] MMMM"));

// set a new date
var date = moment().set({year: 2025, month: 0, date: 1});

// display new date
console.log("New date: ", date.format("DD/MM/YY"));

// subtract 7 days from date
date.subtract(7, 'days');

// displays new date (Christmas day!)
console.log("Christmas day: ", date.format("DD/MM/YY"))
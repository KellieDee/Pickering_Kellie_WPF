/*
    Kellie Pickering
    05/19/15
    Conditionals Assignment
 */

// BIRTHDAY CALCULATOR
var currentMonth = 2; // January = 1, February = 2, March = 3, etc.
var daysPerMonth = 30; // average days per month
var today;
var monthsAway;
var daysAway;

//Ask the user if their birthday is today.
today = prompt("Is today your birthday? \nType 'yes' or 'no'.");

//If today is their birthday, wish them a happy birthday.
if (today === "yes"){
    console.log("Happy birthday!");
}

// prompt("Is your birthday later in the month?");

// prompt("How many months away is your birthday?");
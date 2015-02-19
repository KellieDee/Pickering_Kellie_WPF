/*
    Kellie Pickering
    05/19/15
    Conditionals Assignment
 */

// BIRTHDAY CALCULATOR
var currentMonth = 2; // January = 1, February = 2, March = 3, etc.
var daysPerMonth = 30; // average days per month
var today;
var thisMonth;
var birthdayMonth;
var monthsAway;
var daysAway;

//Ask the user if their birthday is today.
today = prompt("Is today your birthday? \nType 'yes' or 'no'.");

//Ask the user if their birthday is later in the month.
thisMonth = prompt("Is your birthday later this month? \nType 'yes' or 'no'");

//Ask the user what month their birthday is in.
birthdayMonth = prompt("What month is your birthday in? \nType '1' for January, '2' for February, etc.");

//Calculate the amount of months until next birthday
monthsAway = birthdayMonth - currentMonth;

//Calculate the amount of days until next birthday
daysAway = Math.round(monthsAway * daysPerMonth);

//If today is their birthday, wish them a happy birthday.
if(today === "yes"){
    console.log("Happy birthday!");
}

//If their birthday isn't today but is later in the month, wish them a happy early birthday.
if(today === "no" && thisMonth === "yes"){
    console.log("Happy early birthday!");
}else if(thisMonth === "no" && birthdayMonth < 8 && birthdayMonth > 2){
    console.log("Not much longer! Only " + daysAway + " days left!");
}else{
    console.log("You've got a ways to go until your next birthday!");
}
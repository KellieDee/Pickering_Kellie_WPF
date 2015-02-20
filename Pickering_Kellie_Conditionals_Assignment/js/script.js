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
var daysAway;

//Ask the user if their birthday is today.
today = prompt("Is today your birthday? \nType 'yes' or 'no'.");

//Ask the user if their birthday is later in the month.
thisMonth = prompt("Is your birthday later this month? \nType 'yes' or 'no'");

//Ask the user what month their birthday is in.
birthdayMonth = prompt("What month is your birthday in? \nType '1' for January, '2' for February, etc.");

//Calculate the amount of days until next birthday
daysAway = Math.round((birthdayMonth - currentMonth) * daysPerMonth);

//If today is their birthday, wish them a happy birthday.
today === "yes" ? console.log("Happy birthday!") : console.log("Happy \"Unbirthday\" to you! \:\)");


//If their birthday isn't today but is later in the month, wish them a happy early birthday.
if(today === "no" && thisMonth === "yes"){
    console.log("Your real birthday is right around the corner!");
}else if(thisMonth === "no" && birthdayMonth <= 8 && birthdayMonth > 2){
    console.log("Not much longer until your real birthday! Only " + daysAway + " days left!");
}else{
    console.log("You've got a ways to go until your next real birthday!");
}

/*
    Tested code with "yes" "no" "2"     Result: Happy birthday!     [...] ways to go
    Tested code with "no" "yes" "2"     Result: Happy unbirthday!   [...] right around the corner
    Tested code with "no" "no" "8"      Result: Happy unbirthday!   [...] 180 days left
    Tested code with "no" "no" "1"      Result: Happy unbirthday!   [...] ways to go
 */
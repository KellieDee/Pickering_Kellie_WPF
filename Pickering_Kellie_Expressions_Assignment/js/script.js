/*
    Kellie Pickering
    05/12/15
    Expressions
*/

// alert("Javascript works!");

// Determining average daily income over the weekend.

// Ask the user for some basic information to determine variables.
const daysWorked = 3
var wage = prompt("We will calculate your weekend income. \nWhat is your hourly wage?");
var hoursWorked = prompt("How many hours did you work Friday through Sunday?");
var friday = prompt("What did you earn in tips on Friday?");
var saturday = prompt("What did you earn in tips on Saturday?");
var sunday = prompt("What did you earn in tips on Sunday?");

// Set up an array with daily tip amounts based on user prompts.
var tips = [friday, saturday, sunday];

// Add up all daily tips to find the total amount.
var incomeTips = Number(tips[0]) + Number(tips[1]) + Number(tips[2]);

// Determine the amount of income earned before tips by multiplying hourly wage by the amount of hours worked.
var incomeWage = wage * hoursWorked;

// Determine the average earned per day by adding income from wages and tips, then dividing by the amount of days worked.
var average = (incomeWage + incomeTips) / daysWorked;

// Print the output of average money earned per day.
console.log("You worked " + hoursWorked + " hours this weekend and made " + incomeWage + " in wages and " + incomeTips + " in tips, for an average of " + average + " per day.");
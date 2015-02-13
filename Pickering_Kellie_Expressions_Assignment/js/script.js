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

// Round the average to the nearest whole number to eliminate unrealistic change amounts.
var rndAvg = Math.round(average);

// Print the output of average money earned per day.
console.log("You worked " + hoursWorked + " hours this weekend and made " + incomeWage + " in wages and " + incomeTips + " in tips, for an average of " + rndAvg + " per day.");


/*
    Tested the expression by inputting the following:

    Wage: 4.30
    Hours Worked: 20
    Tips on Friday: 5
    Tips on Saturday: 5
    Tips on Sunday: 5

    The console concluded I had worked 20 hours for a total of $86 in wages, $15 in tips, and an average of $34 per day.
 */
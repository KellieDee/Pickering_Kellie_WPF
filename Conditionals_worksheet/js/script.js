/*
    Kellie Pickering
    02/19/15
    Conditionals Worksheet
 */


/*Celsius to Fahrenheit Converter
var degree;

// Ask user for current temperature in Celsius or Fahrenheit
degree = prompt("What is the current temperature? \nType 'C' for Celsius of 'F' for Fahrenheit.");

if(degree){
    console.log("The temperature is " + degree + " degrees Fahrenheit.");
}else{
    console.log("The temperature is " + degree + " degrees Celsius.");
}
*/


// CHECK THE LOGIN (GROUP 2)
const username = "Admin";
const password = "12345";

// Ask the user for their username and password.
var namePrompt = prompt("Enter your username.");
var passPrompt = prompt("Enter your password.");

// Check if user inputs match BOTH username and password. If true, welcome the user.
if(username === namePrompt && password === passPrompt){
    console.log("Welcome, " + username + "!");
}
// If user input does not match username, notify user.
if(username != namePrompt){
    console.log("User not found. Try again.");
}
// If user input matches username but does not match password, notify user.
if(username === namePrompt && password != passPrompt){
    console.log("Password does not match our records.");
}
/*
    Tested code with "Admin" and "12345"    Result: "Welcome, Admin!"
    Tested code with "Kellie" and "12345"   Result: "User not found. Try again."
    Tested code with "Admin" and "23456"    Result: "Password does not match our records."
 */


// MOVIE TICKET PRICE (GROUP 3)
const price = 12;
const discount = 7;
var movieTime = 12; // Using a 24-hour scale
var customerAge =45;


if(customerAge >= 55 || customerAge < 10 || movieTime > 15 && movieTime < 17){
    // Discount is given to customers under 10, customers 55 and over, and movie times between 3 PM and 5 PM.
    console.log("The ticket price is $" + discount);
}else{
    // All other ages and times are given the normal price.
    console.log("The ticket price is $" + price);
}
/*
    Tested code with Age = 20 and Time = 14     Result: $12
    Tested code with Age = 55 and Time = 14     Result: $7
    Tested code with Age = 20 and Time = 16     Result: $7
    Tested code with Age = 45 and Time = 12     Result: $12
 */
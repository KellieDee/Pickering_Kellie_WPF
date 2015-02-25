/*
    Kellie Pickering
    SDI Feb 2015
    Functions Assignment
 */

// VARIABLES

var lottery; // Which lottery the user wants to play
var floridaNumbers; // Six numbers between 1 and 53
var powerballNumbers; // Five numbers between 1 and 59
var powerball; // One Powerball number between 1 and 35.

// FUNCTIONS

// Ask the user which lottery they want to play
var lottery = prompt("Which lottery would you like to play? \n\nType \"Florida\" for the Florida Lottery. \nType \"Powerball\" for the Powerball Lottery.");

//Validate the user's response
while(lottery !== "Florida" && lottery !== "Powerball"){
    // If the user's response is not Florida or Powerball, the script will prompt again
    prompt("You didn't choose a lottery to play! \n\nType \"Florida\" for the Florida Lottery. \nType \"Powerball\" for the Powerball Lottery.");
    break;
}

// Function that generates a random number 1 - 53 for the Florida Lottery
function floridaRNG() {
    return (Math.floor(Math.random() * 53) + 1);
}

// MAIN CODE

if(lottery === "Florida") {
    // Print the Florida Lottery numbers to the console
    console.log("Your Florida lottery numbers are " + floridaNumbers + ".");
}else{
    // Print the Powerball Lottery numbers to the console
    console.log("Your Powerball lottery numbers are " + powerballNumbers + " and your Powerball is " + powerball + ".");
}
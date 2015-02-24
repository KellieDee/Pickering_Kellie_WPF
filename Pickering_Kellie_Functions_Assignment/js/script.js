/*
    Kellie Pickering
    SDI Feb 2015
    Functions Assignment
 */

// Ask the user which lottery they want to play
var userPrompt = prompt("Which lottery would you like to play? \n\nType \"Florida\" for the Florida Lottery. \nType \"Powerball\" for the Powerball Lottery.");

//Validate the user's response
while(userPrompt !== "Florida" && userPrompt !== "Powerball"){
    // If the user's response is not Florida or Powerball, the script will prompt again
    prompt("You didn't choose a lottery to play! \n\nType \"Florida\" for the Florida Lottery. \nType \"Powerball\" for the Powerball Lottery.");
    break;
}

// Assign the function to variable values
var fn1 = floridaRNG();
var fn2 = floridaRNG();
var fn3 = floridaRNG();
var fn4 = floridaRNG();
var fn5 = floridaRNG();
var fn6 = floridaRNG();

// Function that generates a random number 1 - 53 for the Florida Lottery
function floridaRNG(){
    return (Math.floor(Math.random() * 53) + 1);
}

// Print the Florida Lottery numbers to the console
if(userPrompt === "Florida") {
    console.log("Your numbers are " + fn1 + " " + fn2 + " " + fn3 + " " + fn4 + " " + fn5 + " " + fn6);
}
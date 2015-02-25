/*
    Kellie Pickering
    SDI Feb 2015
    Functions Assignment
 */

// VARIABLES

// Prompt that asks the user which lottery they want to play
var lottery = prompt("Which lottery would you like to play? \n\nType \"Florida\" for the Florida Lottery. \nType \"Powerball\" for the Powerball Lottery.");
var floridaNumbers; // Six numbers between 1 and 53
var powerballNumbers; // Five numbers between 1 and 59
var powerball; // One Powerball number between 1 and 35.

// FUNCTIONS

// Function that validates the user's response
function lotteryValidation(lotteryChoice){
    // If the user's response is not "Florida" or "Powerball", the script will prompt again.
    while(lotteryChoice !== "Florida" && lotteryChoice !== "Powerball"){
        lotteryChoice = prompt("You didn't choose a lottery to play! \n\nType \"Florida\" for the Florida Lottery. \nType \"Powerball\" for the Powerball Lottery.");
    }
}

// Function that determines six random Florida lottery numbers
function floridaRNG(min, max){
    // Create an array that stores the lottery numbers
    var lotteryArray = [];
    // Set the array index to 0 and add one random number until there are six random numbers ([0] - [5])
    for (var i = 0; i < 6; i++) {
        // Math object that generates a random number in a specified range of numbers, then rounds down to the nearest whole number
        var randomNumber = (Math.floor(Math.random() * max) + min);
        // Set the elements in the array equal to a random number
        lotteryArray[i] = randomNumber;
    }
    // When the function is called, the results of the array will be shown to the user
    return lotteryArray;
}

// Function that determines five random Powerball lottery numbers
function powerballRNG(min, max) {
    // Create an array that stores the lottery numbers
    var lotteryArray = [];
    // Set the array index to 0 and add one random number until there are five random numbers ([0] - [4])
    for (var i = 0; i < 5; i++) {
        // Math object that generates a random number in a specified range of numbers, then rounds down to the nearest whole number
        var randomNumber = (Math.floor(Math.random() * max) + min);
        // Set the elements in the array equal to a random number
        lotteryArray[i] = randomNumber;
    }
    // When the function is called, the results of the array will be shown to the user
    return lotteryArray;
}


// MAIN CODE

// Validate the user's response
lottery = lotteryValidation(lottery);

// Set the Florida Lottery function to a variable and input the minimum and maximum numbers
floridaNumbers = floridaRNG(1, 53);

// Set the Powerball Lottery function to a variable and input the minimum and maximum numbers
powerballNumbers = powerballRNG(1, 59);


if(lottery === "Florida") {
    // If the user answers "Florida", print the Florida Lottery numbers to the console
    console.log("Your Florida lottery numbers are " + floridaNumbers + ".");
}else{
    // If the user does not answer "Florida", print the Powerball Lottery numbers to the console
    console.log("Your Powerball lottery numbers are " + powerballNumbers + " and the Powerball is " + powerball + ".");
}
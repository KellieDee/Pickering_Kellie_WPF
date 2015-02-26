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
    // When the function is called, the lottery choice is validated against user prompt
    return lotteryChoice;
}

// Function that generates a random number in a specified range, then rounds down to the nearest whole number.
function randomNumberGenerator(min, max){
    var randomNumber = (Math.floor(Math.random() * max) +min);
    return randomNumber;
}

// Function that determines six random Florida lottery numbers
function floridaRNG(min, max) {
    // Create an array that stores the lottery numbers
    var lotteryArray = [];
        // Set the array index to 0 and add one random number until there are six random numbers ([0] - [5])
        for (var i = 0; i < 6; i++) {
        // Call the RNG function
        randomNumber = randomNumberGenerator(min, max);
        // Set the elements in the array equal to a random number
        lotteryArray[i] = randomNumber;
        }
    // When the function is called, the results of the array will be shown to the user
    return lotteryArray
}

// Function that determines five random Powerball lottery numbers
function powerballRNG(min, max) {
    // Create an array that stores the lottery numbers
    var lotteryArray = [];
    // Set the array index to 0 and add one random number until there are five random numbers ([0] - [4])
    for (var i = 0; i < 5; i++) {
        // Call the RNG function
        randomNumber = randomNumberGenerator(min, max);
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
floridaNumbers = floridaRNG(1, 35);

// Set the Powerball Lottery function to a variable and input the minimum and maximum numbers
powerballNumbers = powerballRNG(1, 59);

// Set the Powerball function to a variable and input the minimum and maximum numbers.
powerball = randomNumberGenerator(1, 35);


if(lottery === "Florida") {
    // If the user answers "Florida", print the Florida Lottery numbers to the console
    console.log("Your Florida lottery numbers are " + floridaNumbers + ".");
    } else {
    // If the user does not answer "Florida", print the Powerball Lottery numbers to the console
    console.log("Your Powerball lottery numbers are " + powerballNumbers + " and the Powerball is " + powerball + ".");
}

/*
    Tested the code with following results:

    Prompt = ""             Result = "You didn't choose a lottery..."
    Prompt = "1"            Result = "You didn't choose a lottery..."
    Prompt = "cat"          Result = "You didn't choose a lottery..."
    Prompt = "Florida"      Result = "15, 28, 14, 27, 24, 30"
    Prompt = "Powerball"    Result = "36, 40, 22, 25, 44 and PB 9"
    
 */
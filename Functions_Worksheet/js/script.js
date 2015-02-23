/*
    Kellie Pickering
    02/23/15
    Functions Worksheet
 */

// alert("Javascript Works!");

// Calculate the area of a rectangle
/*
var width =5;
var height = 6;
var area = calculateArea(width, height);
console.log("The area of the rectangle is " + area);

function calculateArea(w,h){
    return w*h;
}
*/

// Calculate the circumference of a circle
// Equation is C = 2(pi)r

var pi = 3.14;
var radius = 8;
// Set the value for the function in a variable
var circumference = calculateCircumference(radius);
// Write the result to the console
console.log("The circumference of the circle is " + circumference);

// Function with radius as a parameter
function calculateCircumference(r){
    // Equation for the circumference of a circle
    return 2 * pi * r;
}

// Calculate how many bee stings it takes to kill an animal.
// Equation is Lethal Bee Stings = 8.666666667 * pounds

var weight = 20;
var stingsPerPound = 8.666666667;
// Set the value for the function in a variable
var lethalStings = calculateStings(weight);
// Write the result to the console
console.log("It takes " + lethalStings + " bee stings to kill this animal.");

//Function with weight as a parameter
function calculateStings(w){
    // Equation for the lethal amount of bee stings
    return w * stingsPerPound;
}

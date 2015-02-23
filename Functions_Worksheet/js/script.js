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
var circumference = calculateCircumference(radius);
console.log("The circumference of the cirle is " + circumference);

function calculateCircumference(r){
    return 2 * pi * r;
}


/**
 * Created by KellieDee on 2/23/15.
 */

/* function outptMsg(){
    console.log("Hello World");
}

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    // console.log(area);
}

console.log(width);
calcArea()

var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out FUNCTION
}

console.log(total)

function dogYears(age){ // parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old."); // PROCEDURE
}

var age1 = 4;
dogYears(age1); //arguments
dogYears(5);
*/

var calcArea = function(width, height){ //defining
    //code to run
    var area = width * height;
    return area;
}

var a = calcArea(20, 30); //invoking
console.log(a);
// Kellie Pickering
// 02/12/15
// Expression Worksheet


// Dog Years: Finding Sparky's age in dog years
var humanYears = 5;
const dogRate = 7;

// Multiply age in human years by dog rate of growth to find age in dog years.
var age = humanYears * dogRate;

// Print out the output age
console.log("Sparky is " + humanYears + " human years old which is " + age + " in dog years.");



// Slice of Pie part I: How many slices of pizza can each person have?
var slicePerPizza = 8;
var peopleAtParty = 50;
var pizzasOrdered = 15;

// Multiply the amount of pizzas ordered by the amount of slices per pizza to find total slices.
// Divide this product by the amount of people at the party to determine how many pieces each person gets.
var slicesPerPerson = (pizzasOrdered * slicePerPizza) / peopleAtParty;

// Print out the output amount of slices per person
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");



// Slice of Pie part II: How many non-whole slices of pizza can Sparky have?

// Use the modulo operator (%) in place of the division operator (/) to round off pizza slice fractions into whole slices.
var remainder = (pizzasOrdered * slicePerPizza) % peopleAtParty;

// Print out the output amount of remaining whole pizza slices.
console.log("Sparky got " + remainder + " slices of pizza.");



// Average Shopping Bill: Average weekly spending over the past five weeks
var weeklyExpense = [100, 250, 200, 350, 300];

// Add each element to find the total amount of money spent on groceries over five weeks.
var total = weeklyExpense[0] + weeklyExpense[1] + weeklyExpense[2] + weeklyExpense[3] + weeklyExpense[4];

// Divide the total spent by five to find the average amount of money spent per week.
var average = total / 5

// Print the output total amount spent and average spent per week.
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");


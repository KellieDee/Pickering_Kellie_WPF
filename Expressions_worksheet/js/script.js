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



// Discounts: Finding discounted price with and without sales tax
const item = "laptop";
var originalPrice = 1000;
var percentDiscount = 10;
var percentSalesTax = 6;

// Divide the discount percent by 100 and multiply by the original price to find the dollar amount of the discount
var discount = (percentDiscount / 100) * originalPrice;

// Subtract the discount from the original price to find the new discounted price.
var newPrice = originalPrice - discount;

// Divide the sale tax percent by 100 and multiply by the new discounted price to find the sales tax.
var salesTax = (percentSalesTax / 100) * newPrice;

// Add the sales tax to the new discounted price to find the total.
var newPriceWithTax = newPrice + salesTax;

// Print the output total price of the laptop.
console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + percentDiscount + "% discount, it is now $" + newPrice + " without tax, and $" + newPriceWithTax + " with tax.");
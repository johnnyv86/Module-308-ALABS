// Hopfully this is the begicdning of something

/* Wishful thinking some may say
condisdering how much layoffs are
occuring within the technology 
industry in general */


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)
console.log(`The sum of the four numbers is 50: ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)
console.log(`At least two numbers are odd: ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)
console.log(`At least one of the four numbers is greater than 25: ${isOver25}`);


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)
console.log(`All four numbers are unique: ${isUnique}`);


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid)
console.log(`The four numbers are valid according to the provided criteria: ${isValid}`);

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



// IMPLEMENT THE FOLLOWING:
// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(isDivisibleBy5);
console.log(`All four numbers are divisible by 5: ${isDivisibleBy5}`);


// Check if the first number is larger than the last. Cache the result in a variable.  
const isFirstLarger = n1 > n4;
console.log(isFirstLarger);
console.log(`The first number is larger than the last number: ${isFirstLarger}`);



// Accomplish the following arithmetic chain:  
// Subtract the first number from the second number. 
const subtract = n2 - n1;
console.log(subtract);
console.log(`The result of subtracting the first number from the second number is: ${subtract}`);


// Multiply the result by the third number. 
const multiply = subtract * n3;
console.log(multiply);
console.log(`The result of multiplying by the third number is: ${multiply}`);

// Find the remainder of dividing the result by the fourth number.  
const remainder = multiply % n4;
console.log(remainder);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.  
let score = 20;


const is25OrLess = score <= 25;
if (is25OrLess) {
  console.log("The score is 25 or less.");
}

console.log(`The current score is ${score}. Is it 25 or less? ${is25OrLess}`);

if (is25OrLess) {
  // This runs if is25OrLess is true
    console.log(`Result: The score of ${score} is within the limit (25 or less).`);
} else {
    // This runs if is25OrLess is false
    console.log(`Result: The score of ${score} is over the limit.`);
}


/* SECTION TWO - PRACTICAL MATH SCENARIO 
You are planning a cross-country road trip! */

// - The distance of the trip, in total, is 1,500 miles.  
const totalDistance = 1500; //miles

// - You have a fuel budget of $175. 
const fuelBudget = 175; // dollars

// - The average cost of fuel is $3 per gallon. 
const fuelCost = 3; // dollars per gallon

/* Your car’s fuel efficiency is as follows:*/
// - At 55 miles per hour, you get 30 miles per gallon.  
const mpgAt55 = 30;

// - At 60 miles per hour, you get 28 miles per gallon.  
const mpgAt60 = 28;

// - At 75 miles per hour, you get 23 miles per gallon. 
const mpgAt75 = 23;

/* Set up a program to answer the following questions:
- How many gallons of fuel will you need for the entire trip? */
const gallonsAt55 = totalDistance / mpgAt55;
console.log(`At 55mph, you will need ${gallonsAt55} gallons of fuel`);

const gallonsAt60 = totalDistance / mpgAt60;
console.log(`At 60mph, you will need ${gallonsAt60} gallons of fuel.`);

const gallonsAt75 = totalDistance / mpgAt75;
console.log(`At 75mph, you will need ${gallonsAt75} gallons of fuel.`);

// - Will your budget be enough to cover the fuel expense?  
const costAt55 = gallonsAt55 * fuelCost;
const isBudgetEnough55 = costAt55 <= fuelBudget;
console.log(`At 55mph, the total cost is $${costAt55}.`); 
console.log(`Budget enough? ${isBudgetEnough55}`);

const costAt60 = gallonsAt60 * fuelCost;
const isBudgetEnough60 = costAt60 <= fuelBudget;
console.log(`At 60mph, the total cost is $${costAt60}.`); 
console.log(`Budget enough? ${isBudgetEnough60}`);

const costAt75 = gallonsAt75 * fuelCost;
const isBudgetEnough75 = costAt75 <= fuelBudget;
console.log(`At 75mph, the total cost is $${costAt75}.`);
console.log(`Budget enough? ${isBudgetEnough75}`);


// - How long will the trip take, in hours?  
const timeAt55 = totalDistance / 55;
console.log(`At 55mph, the trip will take approximately ${timeAt55} hours.`);

const timeAt60 = totalDistance / 60;
console.log(`At 60mph, the trip will take approximately ${timeAt60} hours.`);

const timeAt75 = totalDistance / 75;
console.log(`At 75mph, the trip will take approximately ${timeAt75} hours.`);


// Compare the results when traveling at an average of 55 miles per hour. 
console.log(`At 55mph, you will need ${gallonsAt55} gallons of fuel`);
console.log(`At 55mph, the total cost is $${costAt55}.`); 
console.log(`Budget enough? ${isBudgetEnough55}`);
console.log(`At 55mph, the trip will take approximately ${timeAt55} hours.`);


// Compare the results when traveling at an average of 60 miles per hour. 
console.log(`At 60mph, you will need ${gallonsAt60} gallons of fuel.`);
console.log(`At 60mph, the total cost is $${costAt60}.`); 
console.log(`Budget enough? ${isBudgetEnough60}`);
console.log(`At 60mph, the trip will take approximately ${timeAt60} hours.`);


// Compare the results when traveling at an average of 75 miles per hour. 
console.log(`At 75mph, you will need ${gallonsAt75} gallons of fuel.`);
console.log(`At 75mph, the total cost is $${costAt75}.`);
console.log(`Budget enough? ${isBudgetEnough75}`);
console.log(`At 75mph, the trip will take approximately ${timeAt75} hours.`);

// Which makes the most sense for the trip?  
/* Compare the results when traveling at an average of 55, 60, and 75 miles per hour. 
Which makes the most sense for the trip? */
console.log(`Result Comparison:`);
console.log(`- 55mph: $${costAt55} (Within Budget), ${timeAt55} hours.`);
console.log(`- 60mph: $${costAt60} (Within Budget), ${timeAt60} hoours`);
console.log(`- 75mph: $${costAt75} (Over Budget), ${timeAt75} hours`);

if (isBudgetEnough75) {
    console.log("Recommendation: Drive 75mph. It's the fastest and fits the budget.");
  } else if (isBudgetEnough60) {
    console.log("Recommendation: Drive 60mph. It's a good balance of speed and cost.");
  } else {
    console.log("Recommendation: Drive 55mph. It's the only option within budget.");
  }


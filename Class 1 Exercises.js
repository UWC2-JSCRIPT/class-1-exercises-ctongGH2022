/**
 * Cecilia Tong
 * Class 1 Exercise
 * Oct 18, 2022
 */

/**
 * MATH
 **/

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

//define the variables for each type of pizzas 
let smallPizza = 13; //small pizza is 13in
let largePizza = 17; //large pizza is 17in

//calculate the area of each type of pizzas
const smallPizzaArea = Math.PI *(smallPizza/2)**2;
const largePizzaArea = Math.PI *(largePizza/2)**2;

//display the area of each type of pizzas to console, limit to 2 decimal places
console.log('\n** MATH PROBLEM **');
console.log(`The area of a ${smallPizza}in pizza is ${smallPizzaArea.toFixed(2)} sq. inches`);
console.log(`The area of a ${largePizza}in pizza is ${largePizzaArea.toFixed(2)} sq. inches`);

// 2. What is the cost per square inch of each pizza?

//define the variables for the cost of each type of pizzas 
let smallPizzaCost = 16.99; //$16.99 for the small pizza
let largePizzaCost = 19.99; //$19.99 for the large pizza

//calculate the cost per square inche for each type of pizzas
const smallPizzaCostPerSq = smallPizzaCost/smallPizzaArea;
const largePizzaCostPerSq = largePizzaCost/largePizzaArea;

//display the cost per square inche for each type of pizzas to console, limit to 2 decimal places
console.log(`If cost for a ${smallPizza}in pizza is $${smallPizzaCost}, then the cost per sq. inche of the ${smallPizza}in pizza is ${smallPizzaCostPerSq .toFixed(2)} dollars`);
console.log(`If cost for a ${largePizza}in pizza is $${largePizzaCost}, then the cost per sq. inche of the ${largePizza}in pizza is ${largePizzaCostPerSq .toFixed(2)} dollars`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

//define the const and variables for card (min and max)
let minValueOfCard = 1;
let maxValueOfCard = 13;

//use Math.random() to draw cards of values between 1 & 13 
//& use Math.ceil() to round upwards to the nearest integer
const card = Math.ceil(Math.random() * maxValueOfCard);

// 4. Draw 3 cards and use Math to determine the highest
// card

//define the variable of the highest card, starting from the minimum value
let highestCard = minValueOfCard;

//draw 3 cards and determine the highest card
console.log('\n');
for (let i = 1; i <= 3; i++) {
    const card = Math.ceil(Math.random() * maxValueOfCard);
    console.log(`The value of card #${i} is ${card}`);
    //use Math.max to find the highest card
    if (Math.max(highestCard, card) > highestCard){
        highestCard = card;
    }
}
//display the hightest card value to console
 console.log(`The highest card is ${highestCard}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);

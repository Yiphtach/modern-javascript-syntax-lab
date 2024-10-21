// Exercise 1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const multipliedNums = nums.map((num) => {
    return num * 2;
});

console.log(multipliedNums);

// Exercise 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstFruit, secondFruit] = pizzaToppings; 

console.log(firstFruit);
console.log(secondFruit);


//Exercise 3 
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  const { make, model } = car;

console.log(make); // Output: 'Audi'
console.log(model); // Output: 'q5'


//Exercise 4 
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const PizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...PizzaToppings];

console.log(controversialPizzaToppings);



// Exercise 5
// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car };`
myCar.model = 'q7';

console.log(car);   
console.log(myCar); 


// Exercise 6: Dynamic keys in objects
// Define the object
const userProfile = {};

// Define the variable with a dynamic key
let propertyName = 'username';

// Use the variable as a dynamic key and assign a value
userProfile[propertyName] = 'jpetitfrere123';

// Log the object to see the result
console.log(userProfile);

//or

propertyName = 'email';
userProfile[propertyName] = 'jpetitfrere@example.com';

console.log(userProfile);






// Exercise 8
function describeAnimal(noun = 'cat', adjective = 'white') {
  // Log the sentence using the given or default parameters
  console.log(`The ${noun} is ${adjective}.`);
}

// Test the function with default parameters
describeAnimal(); 
// Output: 'The cat is white.'

// Test the function with supplied arguments
describeAnimal('dog', 'brown'); 
// Output: 'The dog is brown.'

// Another test with different arguments
describeAnimal('bird', 'colorful');
// Output: 'The bird is colorful.'



//Exercise 9. Ternary Operator
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let pizza = 'tasty';

// Used the ternary operator to check the condition and logged the appropriate response
pizza === 'tasty' ? console.log('yum') : console.log('yuck');


// Exercise 10.
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
// Create a variable called LANG and assign it the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';


//Setting the website theme
// Log the result
console.log('Language setting:', LANG);

const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);


// Exercise 11

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat; // Your code here
const adventurer = {
  name: 'Alice',
};

// Use optional chaining to safely access cat.age
let cat = adventurer.cat?.age;

console.log(cat);






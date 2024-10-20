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
// Output: ['Pineapple', 'Olives', 'Anchovies']


// 1. Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function variableScopeExample() {
  var a = "I am var";      // Function scoped
  let b = "I am let";      // Block scoped
  const c = "I am const";  // Block scoped

  if (true) {
    var a = "Re-declared var";      // Overrides outer 'a'
    let b = "Block-scoped let";     // New 'b' inside block
    const c = "Block-scoped const"; // New 'c' inside block
    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:", a, b, c);
}
variableScopeExample();


// 2. Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());


// 3. Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function modifyArray(arr) {
  arr.push("New Element");
  arr.pop(); // Removes the element we just pushed
  return arr;
}
console.log("Modified array:", modifyArray([1, 2, 3]));


// 4. Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers(numbers));


// 5. Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", filterOddNumbers([1, 2, 3, 4, 5, 6]));


// 6. Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const person = {
  name: "Raghvendra",
  age: 21,
  occupation: "Web Developer"
};

function greetPerson(obj) {
  console.log(`Hello, my name is ${obj.name}, I'm ${obj.age} and I work as a ${obj.occupation}.`);
}
greetPerson(person);


// 7. Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function calculateArea(rect) {
  return rect.width * rect.height;
}
console.log("Area of rectangle:", calculateArea({ width: 10, height: 5 }));


// 8. Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object keys:", getObjectKeys({ name: "Raghvendra", age: 21, job: "Dev" }));


// 9. Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2 }));


// 10. Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of array:", sumArray([1, 2, 3, 4, 5]));

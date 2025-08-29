/**************************************************************
 * FUNCTIONS IN JAVASCRIPT — STEP-BY-STEP EXPLANATIONS
 **************************************************************/

/*===============================
= 1) Function Declaration
- Hoisted (you can call it before it's defined).
- Great for named, standalone utilities.
================================*/
function greet(name) {
  // Return a greeting string using string concatenation
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // -> Hello, Alice!

/*===============================
= 2) Function Expression
- Assigned to a variable; NOT hoisted like declarations.
- Useful for passing around as values.
================================*/
const add = function (a, b) {
  // Add two numbers and return the result
  return a + b;
};
console.log(add(5, 3)); // -> 8

/*===============================
= 3) Arrow Function
- Short syntax; lexical 'this' (doesn't rebind 'this').
- Great for small utilities and callbacks.
================================*/
const multiply = (x, y) => x * y; // Implicit return
console.log(multiply(4, 6)); // -> 24

/*===============================
= 4) IIFE (Immediately Invoked Function Expression)
- Runs as soon as it’s defined.
- Creates a new scope to avoid polluting globals.
================================*/
(function () {
  console.log("This function runs immediately!");
})(); // -> This function runs immediately!

/*===============================
= 5) Default Parameters
- Provide a default if the caller omits an argument.
================================*/
function power(base, exponent = 2) {
  // Use Math.pow to compute base^exponent
  return Math.pow(base, exponent);
}
console.log(power(3)); // -> 9  (3^2)
console.log(power(2, 3)); // -> 8 (2^3)

/*===============================
= 6) Rest Parameters
- Gather remaining args into an array.
- Perfect for variable-length argument lists.
================================*/
function sum(...numbers) {
  // Reduce the array to a single sum
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // -> 10
console.log(sum(5, 10, 15)); // -> 30

/*===============================
= 7) Callback Function (Async Pattern)
- Pass a function to be called later (after async work).
================================*/
function fetchData(callback) {
  // Simulate async work with setTimeout
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data); // Invoke the callback with data
  }, 1000);
}
fetchData((data) => {
  console.log("Data received:", data);
}); // -> after ~1s: Data received: { name: 'John', age: 30 }

/*===============================
= 8) Closure
- Inner function remembers variables from outer function’s scope.
================================*/
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    // Access both inner and outer variables
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
}
const newFunction = outerFunction("outside");
newFunction("inside");
// -> Outer Variable: outside
// -> Inner Variable: inside

/*===============================
= 9) Function with Object Parameter (Destructuring)
- Extract properties directly in the parameter list.
================================*/
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Bob", age: 25 }); // -> Name: Bob, Age: 25

/*===============================
= 10) Function with Array Parameter
- Iterate an array and perform an action per item.
================================*/
function printColors(colors) {
  colors.forEach((color) => console.log(color));
}
printColors(["Red", "Green", "Blue"]);
// -> Red
// -> Green
// -> Blue

/*===============================
= 11) Recursive Function
- Function that calls itself (factorial example).
================================*/
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // -> 120
console.log(factorial(3)); // -> 6

/*===============================
= 12) Template Literals
- Backticks support interpolation and multi-line strings.
================================*/
function createMessage(name, age) {
  return `My name is ${name} and I am ${age} years old.`;
}
console.log(createMessage("Charlie", 28));
console.log(createMessage("Diana", 22));

/*===============================
= 13) Array Destructuring
- Pull elements out of arrays by position.
================================*/
function getFirstTwoElements([first, second]) {
  return [first, second];
}
console.log(getFirstTwoElements([10, 20, 30, 40])); // -> [10, 20]
console.log(getFirstTwoElements(["a", "b", "c"])); // -> ["a", "b"]

/*===============================
= 14) Object Destructuring
- Pull properties by name from objects.
================================*/
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName({ firstName: "Emily", lastName: "Clark" })); // -> Emily Clark
console.log(getFullName({ firstName: "Michael", lastName: "Smith" })); // -> Michael Smith

/*===============================
= 15) Rest vs Spread note
- Your function name says "Spread", but this example uses REST (...arrays)
  to collect multiple arrays, then flattens them.
- (Spread would look like: [...a, ...b] to expand arrays.)
================================*/
function combineArrays(...arrays) {
  // arrays is an array of arrays; .flat() merges them one level
  return arrays.flat();
}
console.log(combineArrays([1, 2], [3, 4], [5])); // -> [1,2,3,4,5]
console.log(combineArrays(["a", "b"], ["c", "d"])); // -> ["a","b","c","d"]

/*===============================
= 16) Math Operations Example
- Compute area of a circle: π * r^2
================================*/
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(calculateCircleArea(5)); // -> 78.53981633974483
console.log(calculateCircleArea(10)); // -> 314.1592653589793

/*===============================
= 17) Date Object Example
- Convert Date to a readable string.
================================*/
function formatDate(date) {
  return date.toDateString();
}
console.log(formatDate(new Date())); // -> e.g., "Sat Aug 30 2025"
console.log(formatDate(new Date("2023-01-01"))); // -> "Sun Jan 01 2023"

/*===============================
= 18) Error Handling
- Throw an error for invalid input; catch and handle gracefully.
================================*/
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}
try {
  console.log(safeDivide(10, 2)); // -> 5
  console.log(safeDivide(5, 0)); // throws
} catch (error) {
  console.error(error.message); // -> Division by zero is not allowed.
}
try {
  console.log(safeDivide(20, 4)); // -> 5
  console.log(safeDivide(8, 0)); // throws
} catch (error) {
  console.error(error.message); // -> Division by zero is not allowed.
}

/*===============================
= 19) Array.map
- Transform each element and return a new array.
================================*/
function mapExample(arr, callback) {
  return arr.map(callback);
}
console.log(mapExample([1, 2, 3], (x) => x * 2)); // -> [2,4,6]
console.log(mapExample(["a", "b", "c"], (x) => x.toUpperCase())); // -> ['A','B','C']

/*===============================
= 20) Array.filter
- Keep only the elements that pass a test (true).
================================*/
function filterExample(arr, callback) {
  return arr.filter(callback);
}
console.log(filterExample([1, 2, 3, 4, 5], (x) => x > 2)); // -> [3,4,5]
console.log(filterExample(["apple", "banana", "cherry"], (x) => x.includes("a"))); // -> ['apple','banana']

/*===============================
= 21) Array.reduce
- Accumulate values into a single result.
================================*/
function reduceExample(arr, callback, initialValue) {
  return arr.reduce(callback, initialValue);
}
console.log(reduceExample([1, 2, 3, 4], (acc, curr) => acc + curr, 0)); // -> 10
console.log(reduceExample(["a", "b", "c"], (acc, curr) => acc + curr, "")); // -> 'abc'
console.log(reduceExample([10, 20, 30], (acc, curr) => acc + curr, 0)); // -> 60
console.log(reduceExample(["x", "y", "z"], (acc, curr) => acc + curr, "")); // -> 'xyz'

/*===============================
= 22) Set for Uniqueness
- Convert array to Set to remove duplicates; spread back to array.
================================*/
function uniqueElements(arr) {
  return [...new Set(arr)];
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // -> [1,2,3,4]
console.log(uniqueElements(["a", "b", "a", "c"])); // -> ['a','b','c']
console.log(uniqueElements([5, 5, 6, 7, 8, 8])); // -> [5,6,7,8]
console.log(uniqueElements(["x", "y", "x", "z"])); // -> ['x','y','z']

/*===============================
= 23) Promise (Basic)
- Represents a future value (pending -> fulfilled/rejected).
================================*/
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 1000);
  });
}
asyncFunction().then((message) => console.log(message)); // -> after ~1s
asyncFunction().then((message) => console.log(message)); // -> after ~1s

/*===============================
= 24) Async/Await
- Syntactic sugar over Promises; looks synchronous.
================================*/
async function fetchAsyncData() {
  const data = await asyncFunction(); // Wait for the promise to resolve
  console.log(data);
}
fetchAsyncData(); // -> after ~1s: Promise resolved!
fetchAsyncData(); // -> after ~1s: Promise resolved!

/*===============================
= 25) Currying
- Break a multi-arg function into a chain of single-arg functions.
================================*/
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}
console.log(curryAdd(5)(3)); // -> 8
console.log(curryAdd(10)(15)); // -> 25
console.log(curryAdd(7)(2)); // -> 9
console.log(curryAdd(20)(30)); // -> 50

/*===============================
= 26) Memoization
- Cache expensive results to avoid recomputation.
================================*/
function memoizedFactorial() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) {
      // Return cached result
      return cache[n];
    }
    if (n <= 1) return 1;
    // Store computed result in cache before returning
    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}
const factorialMemo = memoizedFactorial();
console.log(factorialMemo(5)); // -> 120
console.log(factorialMemo(6)); // -> 720 (uses cached 5!)
console.log(factorialMemo(7)); // -> 5040 (uses cached 6!)
console.log(factorialMemo(5)); // -> 120 (from cache)
console.log(factorialMemo(8)); // -> 40320 (uses cached 7!)
console.log(factorialMemo(6)); // -> 720 (from cache)
console.log(factorialMemo(9)); // -> 362880 (uses cached 8!)
console.log(factorialMemo(7)); // -> 5040 (from cache)

/*===============================
= 27) Generator Function
- Pausable function; yields a sequence lazily on demand.
================================*/
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++; // Pause here and resume on next() calls
  }
}
const gen = idGenerator();
console.log(gen.next().value); // -> 1
console.log(gen.next().value); // -> 2
console.log(gen.next().value); // -> 3
console.log(gen.next().value); // -> 4
console.log(gen.next().value); // -> 5
console.log(gen.next().value); // -> 6
console.log(gen.next().value); // -> 7
console.log(gen.next().value); // -> 8

/*===============================
= 28) Method in Object Literal
- Define functions right inside an object.
================================*/
const calculator = {
  add(a, b) {
    return a + b;
  },
};
console.log(calculator.add(10, 5)); // -> 15
console.log(calculator.add(20, 30)); // -> 50
console.log(calculator.add(7, 3)); // -> 10
console.log(calculator.add(100, 200)); // -> 300

/*===============================
= 29) Class with Method
- ES6 class syntax; methods live on the prototype.
================================*/
class Person {
  constructor(name, age) {
    // Initialize instance fields
    this.name = name;
    this.age = age;
  }
  introduce() {
    // Method accessible on instances
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}
const person1 = new Person("Alice", 30);
console.log(person1.introduce());
const person2 = new Person("Bob", 25);
console.log(person2.introduce());
const person3 = new Person("Charlie", 28);
console.log(person3.introduce());
const person4 = new Person("Diana", 22);
console.log(person4.introduce());

/*===============================
= 30) Class Inheritance
- 'Dog' extends 'Animal' and overrides speak().
================================*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}
class Dog extends Animal {
  speak() {
    // Override: specialize behavior
    return `${this.name} barks.`;
  }
}
const dog = new Dog("Rex");
console.log(dog.speak()); // -> Rex barks.
const animal = new Animal("Generic Animal");
console.log(animal.speak()); // -> Generic Animal makes a noise.
const dog2 = new Dog("Buddy");
console.log(dog2.speak()); // -> Buddy barks.
const animal2 = new Animal("Lion");
console.log(animal2.speak()); // -> Lion makes a noise.

/*===============================
= 31) Static Methods in Class
- Called on the class itself, not on instances.
================================*/
class MathUtil {
  static square(x) {
    return x * x;
  }
  static cube(x) {
    return x * x * x;
  }
}
console.log(MathUtil.square(4)); // -> 16
console.log(MathUtil.cube(3)); // -> 27
console.log(MathUtil.square(5)); // -> 25
console.log(MathUtil.cube(2)); // -> 8

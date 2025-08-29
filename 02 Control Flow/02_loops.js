/***************************************************************
 * LOOPS IN JAVASCRIPT — Annotated (step-by-step by topic)
 ***************************************************************/

/* --------------------
   1) For Loop
   - Best when you know how many times to iterate (fixed count).
   - Structure: for(init; condition; afterthought) { ... }
   -------------------- */
for (let i = 1; i <= 5; i++) {
    // i starts at 1, loop runs while i <= 5, i increments by 1 each iteration
    console.log("Iteration number: " + i);
    // Output: Iteration number: 1 ... up to 5
}

/* --------------------
   2) While Loop
   - Repeats while a condition is true.
   - Make sure to update the loop variable inside to avoid infinite loops.
   -------------------- */
let count = 1;            // initialize counter
while (count <= 5) {     // check condition before each iteration
    console.log("Count is: " + count);
    count++;             // increment; without this you'd loop forever
}
// Output: Count is: 1 ... Count is: 5

/* --------------------
   3) Do-While Loop
   - Executes body at least once, then checks the condition.
   - Useful when the loop must run once regardless of condition.
   -------------------- */
let num = 1;
do {
    console.log("Number is: " + num);
    num++;
} while (num <= 5);
// Output: Number is: 1 ... Number is: 5

/* --------------------
   4) For...in Loop
   - Iterates over enumerable property *keys* of an object.
   - Not recommended for arrays (use for...of or normal for loops).
   -------------------- */
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    // key is the property name (string): "name", "age", "city"
    console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: New York

/* --------------------
   5) For...of Loop
   - Iterates over iterable values (arrays, strings, NodeList, etc.)
   - Gives each value directly (not the index).
   -------------------- */
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}
// Output: Red, Green, Blue

/* --------------------
   6) Break and Continue
   - break: exit loop entirely
   - continue: skip to next iteration
   -------------------- */

// Break example: stops loop when i === 6
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // loop stops here; nothing after this point runs in this loop
    }
    console.log(i); // prints 1..5
}

// Continue example: skip even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // skip current iteration for even i
    }
    console.log(i); // prints odd numbers: 1,3,5,7,9
}

/* --------------------
   Nested Loops
   - Loops inside loops; common for grid/matrix traversal.
   - Be mindful of performance: nested loops often produce O(n*m) or O(n^2).
   -------------------- */
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}
// Output pairs: (1,1),(1,2),(2,1),(2,2),(3,1),(3,2)

/* --------------------
   Iterating Arrays & Strings
   - Use for...of for values, for index-based access use classic for.
   -------------------- */
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // iterate values directly
}

let str = "Hello";
for (let char of str) {
    console.log(char); // iterate characters: H e l l o
}

/* --------------------
   Iterating Arrays & Objects Again (examples)
   -------------------- */
let numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number);
}

let car = { make: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(key + ": " + car[key]);
}

/* --------------------
   Repetitive Tasks
   - Loops are ideal for repeating an action multiple times.
   -------------------- */
for (let i = 1; i <= 3; i++) {
    console.log("This is repetition number: " + i);
}

/* --------------------
   Calculate Sum & Product
   - Typical accumulation pattern.
   - For product, start with 1 (multiplicative identity).
   -------------------- */
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; // same as sum = sum + i
}
console.log("Sum of first 5 natural numbers is: " + sum); // 15

let product = 1;
for (let i = 1; i <= 5; i++) {
    product *= i; // same as product = product * i
}
console.log("Product of first 5 natural numbers is: " + product); // 120

/* --------------------
   Generating Patterns
   - Build strings gradually in a loop for visual patterns.
   -------------------- */
let pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern += "*"; // append one '*' each iteration
    console.log(pattern);
}
// Output:
// *
// **
// ***
// ****
// *****

/* --------------------
   Traversing Multi-Dimensional Arrays (Matrices)
   - Use nested loops (outer: rows, inner: columns/values)
   -------------------- */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let row of matrix) {
    for (let value of row) {
        console.log(value); // prints 1..9 in row-major order
    }
}

/* --------------------
   Using Loops with Functions
   - Combine loops with function calls to repeat behavior for many items.
   -------------------- */
function greet(name) {
    console.log("Hello, " + name + "!");
}
let names = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    greet(name); // calls greet for each name
}

/* --------------------
   Manual Filter and Transform with Loops
   - Equivalent to using array.filter and array.map but written manually.
   -------------------- */
let nums = [1, 2, 3, 4, 5];
let evenNums = [];
for (let num of nums) {
    if (num % 2 === 0) {
        evenNums.push(num); // collect even numbers
    }
}
console.log("Even numbers: " + evenNums); // [2,4]

let squaredNums = [];
for (let num of nums) {
    squaredNums.push(num * num); // compute square and push
}
console.log("Squared numbers: " + squaredNums); // [1,4,9,16,25]

/* --------------------
   Implementing Algorithms — Bubble Sort (simple example)
   - In-place sorting algorithm with O(n^2) worst-case time.
   - Good for learning; not ideal for production on large arrays.
   -------------------- */
let arr = [5, 3, 8, 1, 2];
// Outer loop runs (n-1) times
for (let i = 0; i < arr.length - 1; i++) {
    // Inner loop "bubbles" the largest among unsorted elements to the end
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Sorted array: " + arr); // -> Sorted array: 1,2,3,5,8

/* --------------------
   Notes & Best Practices
   - Avoid using for...in for arrays: it iterates keys (including inherited), not values.
   - Prefer for...of, array.forEach, or array methods (map/filter/reduce) for clean code.
   - Always ensure loop termination conditions will be met (avoid infinite loops).
   - Consider time complexity: nested loops and naive sorts can be slow for big datasets.
   -------------------- */

/* --------------------
   Example: many snippets commented-out for quick testing
   - Kept commented to avoid redeclaration errors when running the whole file.
   -------------------- */
// let age = 16;
// // if-else example:
// // if (age >= 18) { console.log("Adult"); } else { console.log("Minor"); }
// // You can uncomment any section above to test it individually.

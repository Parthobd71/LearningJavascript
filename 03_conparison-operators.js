let score = "33ab"; // String with non-numeric characters

let scoreNumber = Number(score); // Convert String to Number
// console.log(typeof scoreNumber, "score = ", scoreNumber);

let temparature = null; // Null value
let temparatureNumber = Number(temparature); // Convert Null to Number
//  console.log(typeof temparatureNumber, "temparatureNumber = ", temparature)
//  console.log(temparatureNumber); 
 


//=======================================Operators in JavaScript=========================================



// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus (Remainder)
// console.log("Sum:", sum);   
// console.log("Difference:", difference);
// console.log("Product:", product);
// console.log("Quotient:", quotient);
// console.log("Remainder:", remainder);


// Comparison Operators
let x = 10;
let y = 20;
let isEqual = x === y; // Strict equality (value and type)
let isNotEqual = x !== y; // Strict inequality (value and type)
let isGreater = x > y; // Greater than
let isLess = x < y; // Less than
let isGreaterOrEqual = x >= y; // Greater than or equal to
let isLessOrEqual = x <= y; // Less than or equal to
// console.log("Is Equal:", isEqual);
// console.log("Is Not Equal:", isNotEqual);
// console.log("Is Greater:", isGreater);
// console.log("Is Less:", isLess);
// console.log("Is Greater or Equal:", isGreaterOrEqual);
// console.log("Is Less or Equal:", isLessOrEqual);



// ======================================Increment and Decrement Operators========================================
let i = 3;
let j = i++; // Postfix increment (y = 3, x = 4)
let k = ++i; // Prefix increment (k = 5, i = 5)
console.log(j); // Output: 3
console.log(k);



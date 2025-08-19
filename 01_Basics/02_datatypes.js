let userName = "Partho"; // String
let userAge = 30; // Number
let isLoggedIn = true; // Boolean
let userBalance = 100.50; // Number (Float)
let userDetails = NaN; // Not a Number 
let userAddress = null; // Null
let userProfile; // Undefined
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt


/*
console.log(typeof userName, "Username = ", userName);
console.log(typeof userAge, "userAge = ", userAge);
console.log(typeof isLoggedIn, "isLoggedIn = ", isLoggedIn);
console.log(typeof userBalance, "userBalance = ", userBalance); 
console.log(typeof userDetails, "userDetails = ", userDetails);
console.log(typeof userAddress, "userAddress = ", userAddress); 
console.log(typeof userProfile, "userProfile = ", userProfile); // Undefined
console.log("userProfile = ", userProfile); // Undefined
console.log(typeof(bigIntValue),"Big int value = ", bigIntValue); // BigInt
*/




// Type Covertion 
//Covert a number to a string
let userAgeString = String(userAge); // Convert Number to String
// console.log(typeof userAgeString, "userAgeString = ", userAgeString); // String



// Convert a string to a number
let numUsername = Number(userName); // Convert String to Number
// console.log(typeof numUsername, "numUsername = ", numUsername); // NaN (Not a Number)



// Convert Boolean to string
let isLoggedInString = String(isLoggedIn); // Convert Boolean to String
// console.log(typeof isLoggedInString, "isLoggedInString = ", isLoggedIn); 



let bigIntNumber = Boolean(bigIntValue); // Convert BigInt to Boolean
console.log(typeof bigIntNumber, "bigIntNumber = ", bigIntNumber);  // Boolean (true, since BigInt is non-zero)



//Hare is some examples of type conversion and datatypes in JavaScript 
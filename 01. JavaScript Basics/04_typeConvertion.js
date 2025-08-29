// type conversion and string manipulations in JavaScript
//String to Number conversion
let numStr = "123.45";
let num = Number(numStr); //or parseFloat(numStr)
console.log("Converted Number:", num, "Type:", typeof num);

//Number to String conversion
let num2 = 678.90;
let strNum = String(num2); //or num2.toString()
console.log("Converted String:", strNum, "Type:", typeof strNum);
//Note: JavaScript is dynamically typed, so types are determined at runtime and can change.
console.log("String Number Length:", strNum.length);
console.log("Character at index 2 of String Number:", strNum.charAt(2));
console.log("Index of '.' in String Number:", strNum.indexOf('.'));
console.log("Substring (0,3) of String Number:", strNum.substring(0, 3));
console.log("Replace '678' with 'Nine Hundred':", strNum.replace("678", "Nine Hundred"));
//String interpolation using template literals
let name = "Alice";
let age = 28;   
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
//Multi-line string using template literals
let multiLineStr = `This is a multi-line string.
It preserves line breaks and    spaces.`;
console.log(multiLineStr);
//Escape sequences in strings
let escapeStr = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
console.log(escapeStr); 
//Note: Always use '===' for comparison to avoid type coercion issues.  
console.log("Is '123.45' equal to 123.45?", numStr == 123.45); //true due to type coercion
console.log("Is '123.45' strictly equal to 123.45?", numStr === 123.45); //false, different types
//End of strings and string conversions in JavaScript   


//Type Conversion Examples
//Implicit Conversion   
let implicitNum = "100" - 50; //String to Number
console.log("Implicit Conversion (String to Number):", implicitNum, "Type:", typeof implicitNum); //50
let implicitStr = "The answer is " + 42; //Number to String 
console.log("Implicit Conversion (Number to String):", implicitStr, "Type:", typeof implicitStr); //The answer is 42
//Explicit Conversion   
let explicitNum = Number("123.45"); //String to Number
console.log("Explicit Conversion (String to Number):", explicitNum, "Type:", typeof explicitNum); //123.45
let explicitStr = String(678.90); //Number to String
console.log("Explicit Conversion (Number to String):", explicitStr, "Type:", typeof explicitStr); //678.90
let boolToNum = Number(true); //Boolean to Number
console.log("Boolean to Number:", boolToNum, "Type:", typeof boolToNum); //1
let numToBool = Boolean(0); //Number to Boolean
console.log("Number to Boolean:", numToBool, "Type:", typeof numToBool); //false
//Note: JavaScript is dynamically typed, so types are determined at runtime and can change.

//End of Type Conversion Examples
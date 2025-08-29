//strings and string conversions in javascript
let str1 = "Hello";
let str2 = 'World';     
let str3 = `! Welcome to JavaScript.`; //template literal
console.log(str1, str2 + str3);
console.log("String 1 Type:", typeof str1);
console.log("String 2 Type:", typeof str2);
console.log("String 3 Type:", typeof str3);
//String concatenation
let fullStr = str1 + " " + str2 + str3;

console.log("Full String:", fullStr);
//String methods        
console.log("String Length:", fullStr.length);
console.log("Uppercase:", fullStr.toUpperCase());   
console.log("Lowercase:", fullStr.toLowerCase());
console.log("Character at index 1:", fullStr.charAt(1));        
console.log("Index of 'World':", fullStr.indexOf("World"));
console.log("Substring (0,5):", fullStr.substring(0, 5));
console.log("Replace 'World' with 'Everyone':", fullStr.replace("World", "Everyone"));
//String clicing
console.log("Slice (0,5):", fullStr.slice(0, 5));
console.log("Slice (-10):", fullStr.slice(-10));
//String trimming
let paddedStr = "   Hello World!   ";
console.log("Padded String:", `"${paddedStr}"`);
console.log("Trimmed String:", `"${paddedStr.trim()}"`);
//String splitting
let csvStr = "Red,Green,Blue,Yellow";
let colors = csvStr.split(",");
console.log("Colors Array:", colors);
//Iterating over a string
for (let char of str1) {
    console.log(char);
}
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
//Note: JavaScript is dynamically typed, so types are determined at runtime and can change.
console.log("String Number Length:", strNum.length);
console.log("Character at index 2 of String Number:", strNum.charAt(2));
console.log("Index of '.' in String Number:", strNum.indexOf('.'));
console.log("Substring (0,3) of String Number:", strNum.substring(0, 3));
console.log("Replace '678' with 'Nine Hundred':", strNum.replace("678", "Nine Hundred"));
//String interpolation using template literals
// let name = "Alice"; 
// let age = 28;
// let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(greeting);
// //Multi-line string using template literals
// let multiLineStr = `This is a multi-line string.    
// It preserves line breaks and    spaces.`;
// console.log(multiLineStr);
//Escape sequences in strings
// let escapeStr = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
// console.log(escapeStr);  
//Note: Always use '===' for comparison to avoid type coercion issues.
// console.log("Is '123.45' equal to 123.45?", numStr == 123.45); //true due to type coercion
// console.log("Is '123.45' strictly equal to 123.45?", numStr === 123.45); //false, different types
//End of strings and string conversions in JavaScript
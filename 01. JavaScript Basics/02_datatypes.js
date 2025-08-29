//Datatypes in JavaScript
//1. String
let name = "John Doe";  
console.log("Name:", name, "Type:", typeof name);
//2. Number
let age = 25;   
console.log("Age:", age, "Type:", typeof age);
//3. Boolean    
let isStudent = true;  
console.log("Is Student:", isStudent, "Type:", typeof isStudent);   
//4. Undefined
let address;    
console.log("Address:", address, "Type:", typeof address);
//5. Null   
let phoneNumber = null;  
console.log("Phone Number:", phoneNumber, "Type:", typeof phoneNumber);
//6. Object
let person = { firstName: "Jane", lastName: "Doe" };
console.log("Person:", person, "Type:", typeof person);
//7. Array      
let colors = ["Red", "Green", "Blue"];  
console.log("Colors:", colors, "Type:", typeof colors);
//8. Symbol
let uniqueId = Symbol("id");    
console.log("Unique ID:", uniqueId, "Type:", typeof uniqueId);
//9. BigInt
let bigNumber = BigInt(123456789012345678901234567890);
console.log("Big Number:", bigNumber, "Type:", typeof bigNumber);
// Note: 'var' is function-scoped and can lead to unexpected behaviors, so it's generally recommended to use 'let' and 'const' for variable declarations in modern JavaScript.
//datatype conversions and string manipulations in JavaScript
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
let escapeStr = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
console.log(escapeStr);
//Note: Always use '===' for comparison to avoid type coercion issues.
// console.log("Is '123.45' equal to 123.45?", numStr == 123.45); //true due to type coercion
// console.log("Is '123.45' strictly equal to 123.45?", numStr === 123.45); //false, different types
//End of strings and string conversions in JavaScript
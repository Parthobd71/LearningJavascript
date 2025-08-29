//Operators in JavaScript
//1. Arithmetic Operators   
let a = 10;
let b = 3;
console.log("Addition:", a + b); //13
console.log("Subtraction:", a - b); //7
console.log("Multiplication:", a * b); //30
console.log("Division:", a / b); //3.3333
console.log("Modulus:", a % b); //1
console.log("Exponentiation:", a ** b); //1000
console.log("Increment:", ++a); //11
console.log("Decrement:", --b); //2
//2. Assignment Operators
let c = 5;
c += 2; //c = c + 2
console.log("c after += 2:", c); //7    
c *= 3; //c = c * 3
console.log("c after *= 3:", c); //21
c -= 4; //c = c - 4
console.log("c after -= 4:", c); //17
c /= 2; //c = c / 2
console.log("c after /= 2:", c); //8.5
c %= 3; //c = c % 3
console.log("c after %= 3:", c); //2.5
//3. Comparison Operators
console.log("Is a equal to b?", a == b); //false
console.log("Is a not equal to b?", a != b); //true
console.log("Is a greater than b?", a > b); //true
console.log("Is a less than b?", a < b); //false
console.log("Is a greater than or equal to b?", a >= b); //true
console.log("Is a less than or equal to b?", a <= b); //false
//4. Logical Operators
let x = true;
let y = false;
console.log("x AND y:", x && y); //false
console.log("x OR y:", x || y); //true
console.log("NOT x:", !x); //false
console.log("NOT y:", !y); //true
//5. String Operators
let str1 = "Hello, ";
let str2 = "World";
let str3 = "!";
let fullStr = str1 + " " + str2 + str3; 
console.log("Full String:", fullStr); //Hello,  World!
//6. Type Operators
console.log("Type of a:", typeof a); //number
console.log("Type of fullStr:", typeof fullStr); //string
console.log("Is a an instance of Number?", a instanceof Number); //false
console.log("Is fullStr an instance of String?", fullStr instanceof String); //false
//Note: JavaScript is dynamically typed, so types are determined at runtime and can change.
//7. Conditional (Ternary) Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote." : "No, too young to vote.";
console.log("Can vote?", canVote); //Yes, can vote.
//8. Comma Operator
let m = (1, 2, 3); //m will be 3
console.log("Value of m using comma operator:", m); //3
//End of Operators in JavaScript    

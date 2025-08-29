//Array in JavaScript

//Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(fruits.length); // 3

//Accessing Array Elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
console.log(fruits[fruits.length - 1]); // Cherry

//Modifying Array Elements
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
fruits.push("Date");
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date"]
fruits.pop();
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
fruits.unshift("Avocado");
console.log(fruits); // ["Avocado", "Apple", "Blueberry", "Cherry"]
fruits.shift();
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]    
fruits.splice(1, 1, "Blackberry", "Cranberry");
console.log(fruits); // ["Apple", "Blackberry", "Cranberry", "Cherry"]
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["Blackberry", "Cranberry"]
console.log(fruits.indexOf("Cherry")); // 3
console.log(fruits.includes("Banana")); // false
console.log(fruits.join(", ")); // "Apple, Blackberry, Cranberry, Cherry"
console.log(fruits.reverse()); // ["Cherry", "Cranberry", "Blackberry", "Apple"]
console.log(fruits.sort()); // ["Apple", "Blackberry", "Cherry", "Cranberry"]
let numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 5, 8]
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 6, 10, 16]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [8]
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 17
for (let fruit of fruits) {
    console.log(fruit);
}
// Apple
// Blackberry
// Cranberry
// Cherry   
fruits.forEach(fruit => console.log(fruit.toUpperCase()));
// APPLE
// BLACKBERRY
// CRANBERRY
// CHERRY
let found = fruits.find(fruit => fruit.startsWith("C"));
console.log(found); // Cranberry
let allHaveE = fruits.every(fruit => fruit.includes("e"));
console.log(allHaveE); // true
let someHaveB = fruits.some(fruit => fruit.startsWith("B"));
console.log(someHaveB); // true
let fruitString = "Mango, Papaya, Kiwi";
let fruitArray = fruitString.split(", ");
console.log(fruitArray); // ["Mango", "Papaya", "Kiwi"]
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
let arrayCopy = [...array1];
console.log(arrayCopy); // [1, 2, 3]
console.log(arrayCopy === array1); // false
let arrayFromString = Array.from("Hello");
console.log(arrayFromString); // ["H", "e", "l", "l", "o"]
let filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0]
let arrayIterator = array1.entries();   
for (let [index, value] of arrayIterator) {
    console.log(index, value);
}   
// 0 1
// 1 2
// 2 3
let keysIterator = array1.keys();
for (let key of keysIterator) {
    console.log(key);
}   
// 0
// 1
// 2
let valuesIterator = array1.values();
for (let value of valuesIterator) {
    console.log(value);
}
// 1
// 2
// 3
let isArray = Array.isArray(fruits);
console.log(isArray); // true
let arrayLength = array1.length;
console.log(arrayLength); // 3
let arrayToString = array1.toString();
console.log(arrayToString); // "1,2,3"
let arrayToLocaleString = array1.toLocaleString();
console.log(arrayToLocaleString); // "1,2,3"
let arraySorted = array1.sort((a, b) => b - a);
console.log(arraySorted); // [3, 2, 1]
let arrayReversed = array1.reverse();
console.log(arrayReversed); // [1, 2, 3]
let arraySpliced = array1.splice(1, 1, 9, 8);
console.log(array1); // [1, 9, 8, 3]
console.log(arraySpliced); // [2]
let arraySliced = array1.slice(1, 3);
console.log(arraySliced); // [9, 8]
let arrayPushed = array1.push(7);
console.log(array1);        // [1, 9, 8, 3, 7]
console.log(arrayPushed); // 5
let arrayPopped = array1.pop();
console.log(array1); // [1, 9, 8, 3]
console.log(arrayPopped); // 7
let arrayShifted = array1.shift();
console.log(array1); // [9, 8, 3]
console.log(arrayShifted); // 1
let arrayUnshifted = array1.unshift(4);
console.log(array1); // [4, 9, 8, 3]
console.log(arrayUnshifted); // 4
let arrayIndex = array1.indexOf(8);
console.log(arrayIndex); // 2
let arrayIncludes = array1.includes(10);
console.log(arrayIncludes); // false    
let arrayJoined = array1.join(" - ");
console.log(arrayJoined); // "4 - 9 - 8 - 3"    
let arrayMapped = array1.map(x => x * 3);
console.log(arrayMapped); // [12, 27, 24, 9]
let arrayFiltered = array1.filter(x => x > 5);
console.log(arrayFiltered); // [9, 8]
let arrayReduced = array1.reduce((acc, val) => acc + val, 0);
console.log(arrayReduced); // 24
let arrayFound = array1.find(x => x > 5);
console.log(arrayFound); // 9
let arrayEvery = array1.every(x => x < 10);
console.log(arrayEvery); // true
let arraySome = array1.some(x => x === 3);
console.log(arraySome); // true 
let arrayForEach = [];
array1.forEach(x => arrayForEach.push(x * 2));
console.log(arrayForEach); // [8, 18, 16, 6]
let arrayFlat = [[1, 2], [3, 4]].flat();
console.log(arrayFlat); // [1, 2, 3, 4]
let arrayFlatMap = array1.flatMap(x => [x, x * 2]);
console.log(arrayFlatMap); // [4, 8, 9, 18, 8, 16, 3, 6]
let arrayFrom = Array.from("ABC");
console.log(arrayFrom); // ["A", "B", "C"]
let arrayOf = Array.of(1, 2, 3);
console.log(arrayOf); // [1, 2, 3]  
let arrayIteratorEntries = array1.entries();
for (let [index, value] of arrayIteratorEntries) {
    console.log(index, value);
}
// 0 4
// 1 9
// 2 8  
// 3 3
let arrayIteratorKeys = array1.keys();
for (let key of arrayIteratorKeys) {
    console.log(key);
}
// 0
// 1
// 2
// 3
let arrayIteratorValues = array1.values();
for (let value of arrayIteratorValues) {
    console.log(value);
}
// 4
// 9
// 8
// 3
let arrayCopyWithin = [1, 2, 3, 4, 5];
arrayCopyWithin.copyWithin(0, 3);
console.log(arrayCopyWithin); // [4, 5, 3, 4, 5]
let arrayFill = new Array(5).fill(1);
console.log(arrayFill); // [1, 1, 1, 1, 1]  
let arrayFindIndex = array1.findIndex(x => x === 8);
console.log(arrayFindIndex); // 2
let arrayLastIndexOf = [1, 2, 3, 2, 1].lastIndexOf(2);
console.log(arrayLastIndexOf); // 3
let arrayToReversed = [1, 2, 3].reverse();
console.log(arrayToReversed); // [3, 2, 1]
let arrayToSorted = [3, 1, 2].sort();
console.log(arrayToSorted); // [1, 2, 3]
let arrayToLocaleString = [1, 2, 3].toLocaleString();
console.log(arrayToLocaleString); // "1,2,3"
let arrayToStringMethod = [1, 2, 3].toString();
console.log(arrayToStringMethod); // "1,2,3"    
let arrayLengthProperty = [1, 2, 3].length;
console.log(arrayLengthProperty); // 3
let arrayIsArray = Array.isArray([1, 2, 3]);
console.log(arrayIsArray); // true
let arrayConstructor = new Array(3);



console.log(arrayConstructor); // [ <3 empty items> ]//Object in JavaScript

//Creating Object using Object Literal
let person = {
    firstName: "John",  
    lastName: "Doe",
    age: 30,
    fullName: function() {  
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // John Doe
console.log(person.age); // 30
//Creating Object using Constructor
let car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.getCarInfo = function() {
    return this.make + " " + this.model + " " + this.year;
}
console.log(car.getCarInfo()); // Toyota Corolla 2020
//Using Object.create()
let animal = {
    type: "Dog",
    sound: function() {
        return "Woof!";
    }
};
let myDog = Object.create(animal);
myDog.name = "Buddy";
console.log(myDog.type);
console.log(myDog.sound()); // Woof!
//Using Class Syntax    
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person("Jane", "Smith", 25);
console.log(person1.fullName()); // Jane Smith
console.log(person1.age); // 25
let person2 = new Person("Mike", "Johnson", 40);
console.log(person2.fullName()); // Mike Johnson
console.log(person2.age); // 40
//Using Object.assign()
let target = { a: 1, b: 2 };    
let source = { b: 4, c: 5 };
let returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
//Using Factory Function
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,     
        age: age,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
}
let personA = createPerson("Alice", "Johnson", 28);
console.log(personA.fullName()); // Alice Johnson
console.log(personA.age); // 28
let personB = createPerson("Emma", "Watson", 30);
console.log(personB.fullName()); // Emma Watson
console.log(personB.age); // 30 
//Using IIFE (Immediately Invoked Function Expression)
let personC = (function(firstName, lastName, age) {
    return {    
        firstName: firstName,
        lastName: lastName,
        age: age,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
})("David", "Brown", 35);
console.log(personC.fullName()); // David Brown
console.log(personC.age); // 35
//Creating Object using Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // John Doe
console.log(person.age); // 30
//Creating Object using Constructor
let car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.getCarInfo = function() {
    return this.make + " " + this.model + " " + this.year;
}
console.log(car.getCarInfo()); // Toyota Corolla 2020
//Using Object.create()
let animal = {
    type: "Dog",
    sound: function() {
        return "Woof!";
    }
};
let myDog = Object.create(animal);
myDog.name = "Buddy";
console.log(myDog.type);
console.log(myDog.sound()); // Woof!
//Using Class Syntax
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
let person1 = new Person("Jane", "Smith", 25);
console.log(person1.fullName()); // Jane Smith
console.log(person1.age); // 25
let person2 = new Person("Mike", "Johnson", 40);
console.log(person2.fullName()); // Mike Johnson
console.log(person2.age); // 40

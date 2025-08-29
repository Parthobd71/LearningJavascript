//Objects in JavaScript

//Object Literal
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
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

//Using Spread Operator
let obj1 = { x: 1, y: 2 };
let obj2 = { y: 3, z: 4 };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { x: 1, y: 3, z: 4 }
let cloneObj = { ...obj1 };
console.log(cloneObj); // { x: 1, y: 2 }
console.log(cloneObj === obj1); // false

//Using JSON Methods
let originalObj = { name: "Alice", age: 28, city: "New York" };
let jsonString = JSON.stringify(originalObj);
console.log(jsonString); // {"name":"Alice","age":28,"city":"New York"}
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // { name: 'Alice', age: 28, city: 'New York' }
console.log(parsedObj === originalObj); // false

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

let personA = createPerson("Tom", "Hanks", 50);
console.log(personA.fullName()); // Tom Hanks
console.log(personA.age); // 50
let personB = createPerson("Emma", "Watson", 30);
console.log(personB.fullName()); // Emma Watson
console.log(personB.age); // 30

//Using IIFE (Immediately Invoked Function Expression)
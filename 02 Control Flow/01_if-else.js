//If - eals 
let age = 19;

// if (age < 18) {
//     console.log("You are a Minor.");
//     }else{
//     console.log("You are an Adult.");
//     }

//else if
if (age < 13) {
    console.log("You are a Child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
} else {
    console.log("You are an Adult.");
}

//Nested if-else
let num = 10;
if (num >= 0) {
    if (num === 0) {
        console.log("You have entered Zero.");
    } else {
        console.log("You have entered a Positive number.");
    }
} else {
    console.log("You have entered a Negative number.");
}
//Ternary Operator
let result = (age >= 18) ? "You are an Adult." : "You are a Minor.";
console.log(result);



//Switch Case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}



"use strict";

if ("hello") {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let value1 = "5";
let num2 = 5;

if (value1 === num2) {
    console.log("The numbers are equal!");
} else {
    console.log("The numbers aren't equal :( ");
}

let num3;

if (num1 + num2 < 20) {
    num3 = 10;
} else {
    num3 = 20;
}

// Ternary if
//     condition?    true value : false value;
let num4 = (num1 + num2 < 20)? 10 : 20;


// prompts read strings by default
// so we must parse to int
// let value = parseInt(prompt("Please enter a whole number"));

// switch case
switch(value) {
    case 5:
    case 10:
    case 15:
        console.log("The value is 5, 10 or 15");
        break;
    case 20:
        console.log("The value is 20");
        break;
    default:
        console.log(value);
        console.log("The value is something else")
}

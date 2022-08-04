"use strict";

myFunc(5, 10, 15);
myFunc(7, 15, 20);

let result = myFuncWithReturn(5, 10, 15);
console.log(result);

// Function declaration
function myFunc(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

// Function declaration with return
function myFuncWithReturn(num1, num2, num3) {
    return num1 + num2 + num3;
}


// Function expressions
// We should be using these!
let myFuncExpression = function(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

myFuncExpression(5, 10, 15);

// Arrow function
let myArrowFunction = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
}

myArrowFunction(5, 10, 15);

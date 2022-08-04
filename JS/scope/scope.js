"use strict";

// let and const are something called: Block scope
// they are only available in the block they're defined in

// This is in global scope
// It can be accessed throughout the whole file, including inside functions.
let flag = false;

let changeFlag = () => {
    flag = true;

    // This is in function Scope
    // It can only be accessed from within this function.
    let number = 10;
}


changeFlag();
console.log(flag);

// console.log(number);

for (let i = 0; i < 10; i++) {
    // Loop scoped
    let myVariable = "hello";
}

console.log(myVariable);

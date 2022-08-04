"use strict";

// For Loop
 // Initialise a variable;Set a condition; choose an iterator
for (let i = 0; i < 5; i++) {
    console.log(`the value of i is ${i}`);
}

for (let i = 5; i > 0; i--) {
    console.log(`the value of i is ${i}`);
}

// While Loop
// Needs only a condition
// Will continue to loop, as long as the condition is true
let count = 0;
while(true) {
    console.log(`the value of count is ${count}`)
    count++;

    if (count === 10) {
        break;
    }
}

let flag = true;
while(flag) {
    console.log(`the value of count is ${count}`)
    count++;

    if (count === 10) {
        flag = false;
    }
}

// Do While Loop
let count2 = 0;
let flag2 = false;

// Do while loops ALWAYS run once
do {
   console.log(count2);
   count2++; 
} while (flag2)
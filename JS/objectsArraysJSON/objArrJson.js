"use strict";

// JS Object Literal 
let anoush = {
    firstName: "Anoush",
    lastName: "Lowton",
    age: 28,
    pets: [
        {
            species: "Dog",
            name: "Bob",
            age: 15
        },
        {
            species: "Dog",
            name: "Sky",
            age: 11
        }
    ]
};

let charles = new Object();
charles["firstName"] = "Charles";
charles["lastName"] = "Cairney";
charles.age = 25;

console.log(anoush);
console.log(charles);

console.log(`${anoush.firstName}'s age is: ${anoush["age"]}`);

// Expando properties
anoush.height = 190;

// For in loop
// used to loop through the properties(keys) of an object
for(let key in anoush) {
    console.log(`${key}: ${anoush[key]}`);
}

// Example of nested for in loops
//
// for(let key in anoush) {
//     if (key === "pets") {
//         for (let petKey in anoush[key]) {
//             console.log(`${petKey}: ${anoush[key][petKey]}`);
//         }
//     } else {
//         console.log(`${key}: ${anoush[key]}`);
//     } 
// }

// For of loop
// used to loop through the values of an object
for (let value of Object.values(anoush)) {
    console.log(value);
}


// Javascript arrays
let myArray = ["Anoush", "Mat", "Emily"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// For of loop
for (let value of myArray) {
    console.log(value);
}

// JSON - Javascript Object Notation

let myJSONObj = {
    "propOne" : "Value one",
    "propTwo" : "Value two"
}

console.log(myJSONObj.propOne);

let objString = '{"name" : "Anoush"}';
let myObject = JSON.parse(objString);

console.log(myObject);

let myJSObject = {
    name : "Charles"
}

let myObjectString = JSON.stringify(myJSObject);
console.log(myObjectString);
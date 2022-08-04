"use strict";

console.log("This is a console log");
console.info("This is a console info");
console.warn("This is a console warn");
console.error("This is a console error");


let myNumber = 10;
const myConstNumber = 5; // cannot be reassigned

myNumber = 100; // this reassignment is possible

console.log(myNumber);

// myConstNumber = 100; // This wont work. Const cannot be reassigned.

console.log(myConstNumber);

console.log("%cThis is a message", "color: white; font-style: italic; background-color: blue");

let age = 29;

// Variables are case sensitive
// console.log(Age);

let myNullValue = null;
console.log(myNullValue);
console.log(typeof myNullValue);

let myUndefinedValue;
console.log(typeof myUndefinedValue);
console.log(myUndefinedValue);

// == only checks VALUES
console.log(myNullValue == myUndefinedValue);

// === checks BOTH value AND datatype
console.log(myNullValue === myUndefinedValue);

// This is true = We'll look at why later
console.log("10" == 10);

let person = "Anoush";
let myGreeting = "Hello there " + person; // String concatenation
console.log(myGreeting);

let myTemplateLiteral = `Hello there ${person}`;
console.log(myTemplateLiteral);

let myTemplateLiteral2 = `My age is ${26 + 3}`;
console.log(myTemplateLiteral2);

console.log(eval("5 * 8 + 4 - 2 / 10"));

// x = 10;
// console.log(x);

let price = 9.99;
priced = 10.99;
console.log(price);
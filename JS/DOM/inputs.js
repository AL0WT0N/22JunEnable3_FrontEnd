"use strict";
// Variables

// Selectors
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let mainDiv = document.querySelector("#mainDiv");
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");

// Functions
let add = (event) => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let resultDiv = document.createElement("div");
    let result = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);

    resultDiv.appendChild(result);
    mainDiv.appendChild(resultDiv);
}

let clear = () => {
    mainDiv.innerHTML = "";
}

// Listeners
addBtn.addEventListener("click", add);
clearBtn.addEventListener("click", clear);
"use strict";
// Variables

// Selectors
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let mainDiv = document.querySelector("#mainDiv");

let calcBtns = document.querySelectorAll(".calcBtns");

let clearBtn = document.querySelector("#clearBtn");

// Functions
let addToPage = (valueOne, operator, valueTwo, result) => {
    let resultDiv = document.createElement("div");
    let resultTxt = document.createTextNode(`${valueOne} ${operator} ${valueTwo} = ${result}`);
    resultDiv.appendChild(resultTxt);
    mainDiv.appendChild(resultDiv);
}

let calculate = (event) => {

    let operation = event.target.id;
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);
    let result;

    switch(operation) {
        case "addBtn":
            result = valueOne + valueTwo;
            addToPage(valueOne, "+", valueTwo, result);
            break;
        case "subBtn":
            result = valueOne - valueTwo;
            addToPage(valueOne, "-", valueTwo, result);
            break;
        case "mulBtn":
            result = valueOne * valueTwo;
            addToPage(valueOne, "*", valueTwo, result);
            break;
        case "divBtn":
            result = valueOne / valueTwo;
            addToPage(valueOne, "/", valueTwo, result);
            break;
        default:
            
    }
}

let clear = () => {
    mainDiv.innerHTML = "";
}

// Listeners

calcBtns.forEach(btn => {btn.addEventListener("click", calculate);});

// for (let btn of calcBtns) {
//     btn.addEventListener("click", calculate);
// }

clearBtn.addEventListener("click", clear);
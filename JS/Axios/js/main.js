"use strict";

// Selectors

// Divs
let resultsDiv = document.querySelector("#results-div");

// Inputs
let fNameInput = document.querySelector("#firstNameInput");
let lNameInput = document.querySelector("#lastNameInput");
let ageInput = document.querySelector("#ageInput");

// Buttons
let createBtn = document.querySelector("#createBtn");

// Functions

let printResults = (result) => {
    let entryDiv = document.createElement("div");
    entryDiv.setAttribute("class", "entry-div");
    entryDiv.textContent = `${result.id} | ${result.firstName} ${result.lastName} | ${result.age}`;

    resultsDiv.appendChild(entryDiv);
}

let getAll = () => {
    axios.get("http://localhost:8080/customer/getAll")
    .then(res => {
        resultsDiv.innerHTML = "";

        let results = res.data;

        for (let result of results) {
            printResults(result);
        }
    }).catch(err => {console.log(err);});
}

let create = () => {

    let obj = {
        "firstName": fNameInput.value,
        "lastName": lNameInput.value,
        "age": ageInput.value
    }

    axios.post("http://localhost:8080/customer/create", obj)
    .then(res => {
        getAll();
    }).catch(err => {console.log(err);});
}

// Listeners
createBtn.addEventListener("click", create);
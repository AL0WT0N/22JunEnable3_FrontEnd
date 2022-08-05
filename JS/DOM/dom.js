"use strict";

// Variables
let counter = 0;

// Selectors
let addBtn = document.querySelector("#addBtn");
let mainDiv = document.querySelector("#addToMe");

// Functions
let addToPage = () => {
    counter++;

    // clear previous content
    mainDiv.innerHTML = "";

    // Create new HTML elements
    let newDiv = document.createElement("div"); //<div></div>
    let newText = document.createTextNode(`The current count is: ${counter}`);

    // Append the text into the div
    newDiv.appendChild(newText); // <div> The current count is: counter </div>

    // Add our new element onto the page
    mainDiv.appendChild(newDiv);
}

// Event Listeners
addBtn.addEventListener("click", addToPage);
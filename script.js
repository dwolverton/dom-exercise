"use strict";
{
  document.getElementById("demoButton").addEventListener("click", demo);
  document.getElementById("actionButton").addEventListener("click", main);

  function demo() {
    const shrinkMeP = document.getElementById("shrink-me");
    // shrinkMeP.innerText = "Hello <em>Class</em>!";
    shrinkMeP.innerHTML = "Hello <em>Class</em>!";
    // adding & removing classes.
    const allListItems = document.querySelectorAll("li"); // find all <li>s on the page
    const objectLi = allListItems[1];
    objectLi.classList.toggle("big");
    // setting styles
    const formInput = document.getElementById("name");
    formInput.style.border = "3px solid magenta";
    formInput.style.backgroundColor = "LightPink";
    // set an attribute
    formInput.setAttribute("placeholder", "Your name here...");
  }

  function main() {
    // We'll write code together here...
    const growMeP = document.getElementById("grow-me");
    growMeP.classList.add("big");
    const shrinkMeP = document.getElementById("shrink-me");
    shrinkMeP.classList.remove("big");
    const allListItems = document.querySelectorAll("li");
    for (let item of allListItems) {
      console.log(item.innerText);
    }
    const linkEl = document.querySelector(".link");
    linkEl.setAttribute("href", "https://www.example.com");
    linkEl.innerText = "somewhere";
    const hideMeP = document.getElementById("hide-me");

    hideMeP.style.display = "none";
    const showMeP = document.getElementById("show-me");
    showMeP.style.display = "block";

    //ADDING AN ELEMENT
    // 1. create element
    const newListItem = document.createElement("li");
    // 2. customize element
    newListItem.innerText = "JavaScript";
    newListItem.style.border = "1px solid green";
    // 3. insert/append element
    const listElement = document.getElementById("list");
    // (existing parent).append(new child)
    listElement.append(newListItem);
  }

  // handle name form submit
  const formEl = document.getElementById("nameForm");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello");
    // get name value from form input
    const nameInputElement = document.getElementById("name"); 
    const name = nameInputElement.value;
    console.log(name);
    // update the h1
    const h1 = document.querySelector("h1");
    h1.innerText = `Welcome ${name}`;
    // clear form
    nameInputElement.value = "";
  });

  // handle form submit on adderForm
  const adderFormEl = document.getElementById  ("adderForm");
  adderFormEl.addEventListener("submit", (e) => {
    e.preventDefault ();
    // get information from form inputs
    const textInputElement = document.getElementById("textInput");
    const text = textInputElement.value;
    console.log (text);
    const italicizeElement = document.getElementById("italicizeCheckBox");
    const isChecked = italicizeElement.checked;
    console.log(isChecked);
    
    // add new <li> to the <ol>
    const listElement = document.querySelector("ol");
    const newListItem = document.createElement("li");
    newListItem.innerText = text;
    if (isChecked) {
      newListItem.style.fontStyle = "italic";
    }    
    listElement.append(newListItem);
  });
  
}

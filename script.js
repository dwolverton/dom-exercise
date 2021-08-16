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
  }
  const formEl = document.getElementById("nameForm");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello");
  const nameInputElement = document.getElementById("name"); 
  const name = nameInputElement.value;
  console.log(name);
  const h1 = document.querySelector("h1");
  h1.innerText = `Welcome ${name}`;
    nameInputElement.value = "";
  });
}

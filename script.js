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
  }

}
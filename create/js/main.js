import { arrCakes } from "./arr.js";
const DOMSelectors = {
  optionSizes: document.querySelectorAll(),
  optionLarge: document.querySelector("button.optionLarge"),
  optionMedium: document.querySelector("button.optionMedium"),
  optionSmall: document.querySelector("button.optionSmall"),
  stack: document.querySelector(".stackContainer"),
  form: document.querySelector(".form"),
};

function selectSize() {
  DOMSelectors.form.addEventListener("submit", function(event){
    const sizeHTML = `<h1>Please Select A Cake Size</h1>
    <button class="optionLarge"><img class=largeButton src="" alt="Large Cake"></button>
    <button class="optionMedium"><img class=mediumButton src="" alt="Medium Cake"></button>
    <button class="optionSmall"><img class=smallButton src="" alt="Small Cake"></button>`;
    DOMSelectors.stack.insertAdjacentHTML("beforeend", sizeHTML);
  });

}

function chooseLayers() {
  function optionLarge(){

  }
  function optionMedium(){

  }
  function optionSmall(){

  }
}
function generateLayers() {}


function cakeInfo(){

}

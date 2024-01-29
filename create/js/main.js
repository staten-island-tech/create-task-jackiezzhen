import { cakeArr } from "./arr.js";
const DOMSelectors = {
  layers: document.querySelector(".cakeContainer"),
  form: document.querySelector(".form"),
};
DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  generateLayers();
});

function generateLayers() {
  const numberOfLayers = document.getElementById("quantity").value;
  DOMSelectors.layers.innerHTML = "";
  for (let i = 0; i < numberOfLayers; i++) {
    DOMSelectors.layers.innerHTML += `<img src="public/template.png" alt="Layer ${i + 1}" class="templateImg">`;
  }
}


function cakeInfo(){

}

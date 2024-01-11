import { arrCakes } from "./arr.js";
const DOMSelectors = {
  optionLarge: document.querySelector("button.optionLarge"),
  optionMedium: document.querySelector("button.optionMedium"),
  optionSmall: document.querySelector("button.optionSmall"),
  stack: document.querySelector(".stackContainer"),
};
function chooseLayers() {
  optionLarge.addEventListener("click");
  const layerHTML = `<form action="form" class="form">        
<label for="layer">Designate the Number of Layers</label>
<input type="number" id="quantity" name="quantity" min="1">
    </form>`;
}

function generateLayers() {}

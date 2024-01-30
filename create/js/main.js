import { cakeArr } from "./arr.js";
const DOMSelectors = {
  layers: document.querySelector(".cakeContainer"),
  info: document.querySelector(".infoContainer"),
  form: document.querySelector(".form"),
};

DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  cakeInfo();
  generateLayers();
});

function generateLayers() {
  const layerQuantity = document.getElementById("quantity").value;
  DOMSelectors.layers.innerHTML = "";
  
  for (let i = 0; i < layerQuantity; i++) {
    const flavorNumValue = { value: 0 };
    const flavorNum = flavorNumValue.value;
    DOMSelectors.layers.innerHTML += `
    <div class= layer>
    <button class=previous>Back</button>
    <img src="public/template.png" alt="Layer ${i + 1}" class="cakeImg">
    <button class=next>Next</button>
    </div>
    <style>.cakeImg{z-index: ${i}</style>
    `;
    imgButton(flavorNum);
  }
}

function imgButton(flavorNum) {
  const previousButtons = document.querySelectorAll(".previous");
  const nextButtons = document.querySelectorAll(".next");

  nextButtons.forEach((next) => {
    next.addEventListener("click", function () {
      const layerDiv = next.closest(".layer");
      const cakeImage = layerDiv.querySelector('.cakeImg');
      flavorNum++;
      if (flavorNum >= cakeArr.length) {
        flavorNum = 0;
      }
      cakeImage.src = cakeArr[flavorNum].img;
    });
  });

  previousButtons.forEach((previous) => {
    previous.addEventListener("click", function () {
      const layerDiv = previous.closest(".layer");
      const cakeImage = layerDiv.querySelector('.cakeImg');
      flavorNum--;
      console.log(cakeArr.length);
      if (flavorNum < 0) {
        flavorNum = cakeArr.length - 1;
        
      }
      cakeImage.src = cakeArr[flavorNum].img;
    });
  });
}

function cakeInfo(){
  const cakeHTML =  `
    <img src=${link.img} alt="Cake" class="cakeImg"></img>
    `;
  cakeArr.forEach((img) => img.insertAdjacentHTML("beforeend", cakeHTML)); 
}

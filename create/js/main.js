import { cakeArr } from "./arr.js";
const DOMSelectors = {
  layers: document.querySelector(".cakeContainer"),
  info: document.querySelector(".infoContainer"),
  form: document.querySelector(".form"),
  reset: document.querySelector(".resetButton"),
  input : document.querySelector(".inputBox")
};

DOMSelectors.reset.addEventListener("click", function () {
  location.reload();
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  generateLayers();
});

function generateLayers() {
  DOMSelectors.layers.innerHTML = "";
  
  const layerQuantity = document.getElementById("quantity").value;
  for (let i = 0; i < layerQuantity; i++) {
    DOMSelectors.layers.innerHTML += `
    <div class=layer>
    <button class=previous><img src="public/left_arrow.png" alt=Previous class=flavorButtons></button>
    <img src="public/template.png" alt="Layer ${i + 1}" class="cakeImg">
    <button class=next><img src="public/right_arrow.png" alt=Next class=flavorButtons></button>
    </div>
    <style>.cakeImg{z-index: ${i}</style>
    `;

    cakeInfo();
    build();
    imgButton();
  }
}

function imgButton() {
  const previousButtons = document.querySelectorAll(".previous");
  const nextButtons = document.querySelectorAll(".next");
  let flavorNum = 0;
  nextButtons.forEach((next) => {
    next.addEventListener("click", function () {
      const layerDiv = next.closest(".layer");
      const cakeImage = layerDiv.querySelector(".cakeImg");
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
      const cakeImage = layerDiv.querySelector(".cakeImg");
      flavorNum--;
      if (flavorNum < 0) {
        flavorNum = cakeArr.length - 1;
      }
      cakeImage.src = cakeArr[flavorNum].img;
    });
  });
}

function build() {
  if (!document.querySelector(".buildButton")) {
  DOMSelectors.input.insertAdjacentHTML("beforeend",
    `
    <div class=buildDiv>
    <button class="buildButton">Build</button>
    </div>
    `
  );

  const buildButton = document.querySelector(".buildButton");
  buildButton.addEventListener("click", function () {
    const previousButtons = document.querySelectorAll(".previous");
    const nextButtons = document.querySelectorAll(".next");
    const cakeImg = document.querySelectorAll(".cakeImg");

    previousButtons.forEach((button) => button.remove());
    nextButtons.forEach((button) => button.remove());

    cakeImg.forEach((img) => {
      img.style.marginBottom = "-4.3rem";
    });
  });
}
}

function cakeInfo() {
  DOMSelectors.info.innerHTML = "";
  cakeArr.forEach((cake) => {
    const cakeHTML = `
      <div class="cakeInfoContainer">
        <img src="${cake.img}" alt="${cake.flavor}" class="infoImg">
        <div class="info">
          <h6 class="infoFlavor">${cake.flavor}</h6>
          <p class="ingredients">${cake.ingredients}</p>
        </div>
      </div>
    `;
    DOMSelectors.info.insertAdjacentHTML("beforeend", cakeHTML);
  });
}

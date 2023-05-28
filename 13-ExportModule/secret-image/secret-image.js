/* secret-image.js */

import domFunctions from "../modules/dom-functions.js";

const { toogleHiddenElement} = domFunctions;

const buttonElement = document.getElementById("secret-button");
const imgElement = document.getElementById("secret-img");


buttonElement.addEventListener("click", () => {
  toogleHiddenElement(imgElement);
});

/* secret-messages.js */
import domFunctions from "../modules/dom-functions.js";

const { toogleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-p");

buttonElement.addEventListener("click", () => {
  toogleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

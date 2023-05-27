/* secret-messages.js */
import {
  toogleHiddenElement,
  changeToFunkyColor,
} from "../modules/dom-functions.js";

const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-p");

buttonElement.addEventListener("click", () => {
  toogleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

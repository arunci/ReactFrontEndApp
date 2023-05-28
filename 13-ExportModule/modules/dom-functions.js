/* dom-functions.js */
const toogleHiddenElement = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};

const resources = {
  toogleHiddenElement,
  changeToFunkyColor,
};

export default resources;

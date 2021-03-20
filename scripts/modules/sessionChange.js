import elements from "../elements.js";

function sessionChange() {
  elements.navElements.forEach(element => element.classList.toggle("session"));
}

export default sessionChange;
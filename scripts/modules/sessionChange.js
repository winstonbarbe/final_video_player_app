import elements from "../elements.js";

function sessionChange() {
  elements.navElements.forEach(element => element.classList.toggle("session"));
  localStorage.clear();
}

export default sessionChange;
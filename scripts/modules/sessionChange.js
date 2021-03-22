import elements from "../elements.js";

function sessionChange() {
  elements.navElements.forEach(element => element.classList.toggle("session"));
  localStorage.clear();
  elements.libraryList.innerHTML = `
    <li>Upload videos live here</li>
  `;
  elements.viewer.src = "../652333414.mp4";
}

export default sessionChange;
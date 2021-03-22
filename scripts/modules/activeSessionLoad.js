import elements from "../elements.js";
import populateLibrary from "./populateLibrary.js";
import getStored from "./getStoredVideos.js";

function activeSessionLoad() {
  elements.navElements.forEach(el => el.classList.toggle("session"));
  populateLibrary(getStored());
}

export default activeSessionLoad;
import populateLibrary from "./populateLibrary.js";
import getStored from "./getStoredVideos.js";

function noSessionLoad() {
  populateLibrary(getStored());
}

export default noSessionLoad;
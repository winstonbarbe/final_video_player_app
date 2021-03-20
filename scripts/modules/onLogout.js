import elements from "../elements.js";
import sessionChange from "./sessionChange.js";

function onLogout(e) {
  e.preventDefault();
  sessionChange();
}

export default onLogout;
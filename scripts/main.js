import elements from "./elements.js";
import onLogin from "./modules/onLogin.js";
import onLogout from "./modules/onLogout.js";
import onSignup from "./modules/onSignup.js";

import noSessionLoad from "./modules/noSessionLoad.js";
import activeSessionLoad from "./modules/activeSessionLoad.js";

import frontendUpload from "./modules/frontendUpload.js";
import onSelect from "./modules/onSelect.js";

import onFilterSelect from "./modules/onFilterSelect.js";
import onFilterRangeChange from "./modules/onFilterRangeChange.js";

localStorage.getItem("jwt") ? activeSessionLoad() : noSessionLoad();


elements.filterSelect.addEventListener("change", onFilterSelect);

elements.filterRangeInputs.forEach(input => {
  input.addEventListener("change", onFilterRangeChange);
  input.addEventListener("mousemove", onFilterRangeChange);
});
elements.clear.addEventListener("click", function (e) {
  elements.viewer.classList.toggle("filtered");
});

elements.loginForm.addEventListener("submit", onLogin);
elements.signupForm.addEventListener("submit", onSignup);
elements.logout.addEventListener("click", onLogout);

elements.uploadForm.addEventListener("submit", frontendUpload);
elements.libraryItems.forEach(item => item.addEventListener("click", onSelect));
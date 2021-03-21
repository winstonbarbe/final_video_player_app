import elements from "./elements.js";
import onLogin from "./modules/onLogin.js";
import onLogout from "./modules/onLogout.js";
import onSignup from "./modules/onSignup.js";

import frontendUpload from "./modules/frontendUpload.js";
import populateLibrary from "./modules/populateLibrary.js";
import onSelect from "./modules/onSelect.js";

elements.loginForm.addEventListener("submit", onLogin);
elements.signupForm.addEventListener("submit", onSignup);
elements.logout.addEventListener("click", onLogout);

elements.uploadForm.addEventListener("submit", frontendUpload);

populateLibrary(elements.storedVideos);

elements.libraryItems.forEach(item => item.addEventListener("click", onSelect));

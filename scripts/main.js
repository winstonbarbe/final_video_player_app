import elements from "./elements.js";
import onLogin from "./modules/onLogin.js";
import onLogout from "./modules/onLogout.js";
import onSignup from "./modules/onSignup.js";

import frontendUpload from "./modules/frontendUpload.js";

console.log(elements.storedVideos);

elements.loginForm.addEventListener("submit", onLogin);
elements.signupForm.addEventListener("submit", onSignup);
elements.logout.addEventListener("click", onLogout);

elements.uploadForm.addEventListener("submit", frontendUpload);

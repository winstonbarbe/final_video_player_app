import elements from "./elements.js";
import onLogin from "./modules/onLogin.js";
import onLogout from "./modules/onLogout.js";
import onSignup from "./modules/onSignup.js";

elements.loginForm.addEventListener("submit", onLogin);
elements.signupForm.addEventListener("submit", onSignup);
elements.logout.addEventListener("click", onLogout);
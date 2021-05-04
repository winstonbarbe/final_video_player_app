// Nav Stuff

const showNoSessions = document.querySelectorAll(".session-controller");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
const logout = document.querySelector(".logout");


function handleMenuToggle() {
  nav.style.flexWrap === "wrap" ? nav.style.flexWrap = "" :  nav.style.flexWrap = "wrap";
  showNoSessions.forEach(controller => {
    controller.style.display === "flex" ?  controller.style.display = "none" : controller.style.display = "flex";
  });
}
menuToggle.addEventListener("click", handleMenuToggle);

// Signup Stuff
const signupReveal = document.querySelector("#signup-reveal");
const signupForm = document.getElementById("signup-form");
const signupCancelButton = document.querySelector(".signup-form .cancelbtn");

function handleSignupReveal (e) {
  signupForm.classList.toggle("not-clicked");
  loginForm.classList.add("not-clicked");
}
function handleSignup(e) {
  e.preventDefault();
  console.log(e);
  this.reset();
  signupForm.classList.toggle("not-clicked");
}

signupReveal.addEventListener("click", handleSignupReveal);
signupCancelButton.addEventListener("click", handleSignupReveal);
signupForm.addEventListener("submit", handleSignup);

// Login Stuff
const loginReveal = document.querySelector("#login-reveal");
const loginForm = document.getElementById("login-form");
const loginCancelButton = document.querySelector(".login-form .cancelbtn");

function handleLoginReveal (e) {
  loginForm.classList.toggle("not-clicked");
  signupForm.classList.add("not-clicked");
}
function handleLogin(e) {
  e.preventDefault();
  console.log(e);
  localStorage.setItem("jwt", "jwt");
  loginForm.classList.toggle("not-clicked");
  this.reset();
  isActiveSession();
  console.log(logout);
}

loginReveal.addEventListener("click", handleLoginReveal);
loginCancelButton.addEventListener("click", handleLoginReveal);
loginForm.addEventListener("submit", handleLogin);

// Logout

function handleLogout() {
  localStorage.clear();
  isActiveSession();
}
logout.addEventListener("click", handleLogout);


const isActiveSession = () => {
  localStorage.getItem("jwt") ? activeSession() : inactiveSession();
};
const inactiveSession = () => {
  document.querySelector(".logout").classList.add("inactive");
  document.querySelectorAll(".session-controller").forEach(controller =>      controller.classList.remove("inactive")
  );
};
const activeSession = () => {
  document.querySelector(".logout").classList.remove("inactive");
  document.querySelectorAll(".session-controller").forEach(controller => controller.classList.add("inactive")
  );
};

isActiveSession();

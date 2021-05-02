const signupReveal = document.querySelector("#signup-reveal");
const signupForm = document.getElementById("signup-form");
const cancelButtons = document.querySelectorAll(".cancelbtn");
console.log(cancelButtons);

function handleSignupReveal (e) {
  signupForm.classList.toggle("not-clicked");
}

signupReveal.addEventListener("click", handleSignupReveal);
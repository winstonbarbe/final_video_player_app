import elements from "../elements.js";

function onSignup(e) {
  e.preventDefault();
  const signupData = {
    email: e.target[0].value,
    password: e.target[1].value,
    password_confirmation: e.target[2].value,
  };
  fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signupData)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  this.reset();
}

export default onSignup;
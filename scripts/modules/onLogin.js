import elements from "../elements.js";
import sessionChange from "./sessionChange.js";
import populateLibrary from "./populateLibrary.js";

function onLogin(e) {
  e.preventDefault();
  const loginData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };
  fetch("http://localhost:3000/api/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    .then(data => {
      console.log(data);
      const videos = data.user.videos;
      sessionChange();
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("videos", JSON.stringify(data.user.videos));
  
      populateLibrary(videos);
      location.reload();
    })
    .catch(err => console.log(err.statusText));
  this.reset();
}

export default onLogin;
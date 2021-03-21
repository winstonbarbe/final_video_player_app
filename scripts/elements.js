const elements = {
  nav: document.getElementById("nav"),
  navElements: document.querySelectorAll(".nav-element"),
  signupForm: document.getElementById("signup-form"),
  loginForm: document.getElementById("login-form"),
  navElementForms: document.querySelectorAll(".nav-element-form"),
  logout: document.getElementById("logout"),
  player: document.getElementById("video"),
  uploadForm: document.getElementById("upload-form"),
  storedVideos: JSON.parse(localStorage.getItem("videos")) || [],
  libraryList: document.getElementById("library-list"),
  libraryItems: document.querySelectorAll(".library-list li"),
  viewer: document.getElementById("viewer"),
  currentVideo: document.getElementById("current-video")

};

export default elements;

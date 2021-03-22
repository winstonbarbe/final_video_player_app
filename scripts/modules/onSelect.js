import elements from "../elements.js";
import getStored from "./getStoredVideos.js";
import formatTime from "./formatTime.js";

function onSelect(e) {
  e.preventDefault();

  const index = parseInt(this.querySelector("video").dataset.index);
  console.log(index);
  const videos = getStored();
  const video = videos[index];
  const previousSelection = document.querySelector(".selected");
  const videoName = document.getElementById("current-video-name");
  const videoLength = document.getElementById("current-video-length");
  const length = formatTime(parseFloat(video.length));
  console.log(length);

  if (previousSelection) {
    previousSelection.classList.toggle("selected");
  }
  this.classList.toggle("selected");
  elements.viewer.src = video.url;
  videoName.innerHTML = videos[index].name;
  videoLength.innerHTML = length;
  console.log(elements.currentVideo);
}

export default onSelect;
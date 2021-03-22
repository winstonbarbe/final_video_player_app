import elements from "../elements.js";
import formatTime from "./formatTime.js";

function populateLibrary(videos) {
  elements.libraryList.innerHTML = videos.map((video, i )=> {
    return `
      <li>
        <video data-index=${i} id="video${i}" src="${video.url}" class="library-video"></video>
        <div>
          <span class="library-video-name">Name: ${video.name}</span>
          <br>
          <span class="library-video-length">Length: ${formatTime(parseFloat(video.length))}</span>
        </div>
      </li>
    `;
  }).join("");
  elements.libraryItems = document.querySelectorAll(".library-list li");
  console.log(elements.libraryItems);
}

export default populateLibrary;

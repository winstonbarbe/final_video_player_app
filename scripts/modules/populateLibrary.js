import elements from "../elements.js";

function populateLibrary() {
  elements.libraryList.innerHTML = elements.storedVideos.map((video, i )=> {
    return `
      <li>
        <video data-index=${i} id="video${i}" src="${video.url}" class="library-video"></video>
        <div>
          <span class="library-video-name">${video.name}</span>
          <span class="library-video-length">${video.length}</span>
        </div>
      </li>
    `;
  }).join("");
}

export default populateLibrary;

import elements from "../elements.js";
import populateLibrary from "./populateLibrary.js";

function frontendUpload(e) {
  e.preventDefault();
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/crowdpleaser/video/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'kvcunjt8';
  
  const file = e.target[0].files[0];
  const name = e.target[1].value;
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  // eslint-disable-next-line no-undef
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(res => {
    console.log(res.data);
    const newVideo = { url: res.data.secure_url, name: name, length: res.data.duration };
    
    const videos = elements.storedVideos.map(video => video);
    videos.push(newVideo);
    localStorage.setItem("videos", JSON.stringify(videos.reverse()));
    populateLibrary(videos);
    console.log("Upload Complete");
    this.reset();
  }).catch(err => {
    console.log(err);
  });
}

export default frontendUpload;
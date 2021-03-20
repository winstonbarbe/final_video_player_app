import elements from "../elements.js";

function frontendUpload(e) {
  e.preventDefault();
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/crowdpleaser/video/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'kvcunjt8';
  
  const file = e.target[0].files[0];
  console.log(file);
  const name = e.target[1].value;
  console.log(name);
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  console.log(formData);
  // eslint-disable-next-line no-undef
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(res => {
    const newVideo = { url: res.data.secure_url, name: name, length: res.data.duration };
    console.log(newVideo);
    const videos = elements.storedVideos.map(video => video);
    videos.push(newVideo);
    localStorage.setItem("videos", JSON.stringify(videos));
    console.log("Upload Complete");
    // this.reset();
  }).catch(err => {
    console.log(err);
  });
}

export default frontendUpload;
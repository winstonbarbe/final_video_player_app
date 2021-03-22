function getStored() {
  return JSON.parse(localStorage.getItem("videos")) || [];
}

export default getStored;
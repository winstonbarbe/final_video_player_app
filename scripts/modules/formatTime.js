function formatTime(length) {
  const time = Math.round(length);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}:${seconds}`;
}

export default formatTime;
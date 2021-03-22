function onFilterRangeChange(e) {
  console.log(this.value);
  console.log(this.dataset);
  document.documentElement.style.setProperty(`--${this.dataset.name}`, this.value + this.dataset.sizing);
}

export default onFilterRangeChange;
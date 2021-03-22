import elements from "../elements.js";

function onFilterSelect(e) {
  elements.filterRangeItems.forEach(item => { 
    item.classList.add("not-selected");
    item.dataset.name == this.value ? item.classList.remove("not-selected") : false ;
  });
}

export default onFilterSelect;
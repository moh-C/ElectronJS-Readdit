const itemHandler = require("./itemHandler");

let deleteHandler = () => {
  itemHandler.getCurrentItem().node.remove();
};

let selectorHandler = (e) => {
  // let currentItem = ;
  console.log(itemHandler.getCurrentItem());
  if (e.key == "ArrowUp" && currentItem.previousElementSibling) {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    itemHandler
      .getCurrentItem()
      .node.previousElementSibling.classList.add("selected");
  } else if (e.key == "ArrowDown" && currentItem.nextElementSibling) {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    itemHandler
      .getCurrentItem()
      .node.nextElementSibling.classList.add("selected");
  }
  if (e.key == "Delete" && currentItem) {
    deleteHandler();
  }
};

let searchHandler = (e) => {
  if (e.key == "Enter") {
    Array.from(document.getElementsByClassName("read-item")).forEach((item) => {
      let hasMatch = item.innerText
        .toLowerCase()
        .includes(document.getElementById("search").value.toLowerCase());
      item.style.display = hasMatch ? "flex" : "none";
    });
  }
};

module.exports = { searchHandler, selectorHandler, deleteHandler };

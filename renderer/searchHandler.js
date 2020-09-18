let selectorHandler = (e) => {
  let currentItem = document.getElementsByClassName("selected")[0];
  if (e.key == "ArrowUp" && currentItem.previousElementSibling) {
    currentItem.classList.remove("selected");
    currentItem.previousElementSibling.classList.add("selected");
  } else if (e.key == "ArrowDown" && currentItem.nextElementSibling) {
    currentItem.classList.remove("selected");
    currentItem.nextElementSibling.classList.add("selected");
  }
};

let searchHandler = (e) => {
  if (e.key == "Enter") {
    Array.from(document.getElementsByClassName("read-item")).forEach((item) => {
      let hasMatch = item.innerText
        .toLowerCase()
        .includes(document.getElementById("search").value);
      item.style.display = hasMatch ? "flex" : "none";
    });
  }
};

module.exports = { searchHandler, selectorHandler };

let url = document.getElementById("url"),
  modal = document.getElementById("modal"),
  addItem = document.getElementById("add-item");

let showModalHandler = () => {
  modal.style.transform = "translateX(0)";
  modal.style.zIndex = 1;
  modal.style.opacity = 1;
  url.focus();
};

let urlEnterHandler = (e) => {
  if (e.key == "Enter") addItem.click();
};

let hideModalHandler = (e) => {
  modal.style.transform = "translateX(-100%)";
  modal.style.zIndex = -1;
  modal.style.opacity = 0;
};

module.exports = { showModalHandler, hideModalHandler, urlEnterHandler };

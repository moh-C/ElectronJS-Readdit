// This file is required by the index.html file and will
// be executed in the renderer process for that window.

const { ipcRenderer } = require("electron");

// All of the Node.js APIs are available in this process.

let showModal = document.getElementById("show-modal"),
  closeModal = document.getElementById("close-modal"),
  modal = document.getElementById("modal"),
  addItem = document.getElementById("add-item"),
  url = document.getElementById("url"),
  items = document.getElementById("items");

let toggleAddItem = () => {
  if (addItem.disabled === true) {
    addItem.disabled = false;
    addItem.style.opacity = 1;
    closeModal.style.display = "inline";
    addItem.innerText = "Add Item";
  } else {
    addItem.disabled = true;
    addItem.innerText = "Adding...";
    addItem.style.opacity = 0.5;
    closeModal.style.display = "none";
  }
};

let showModalHandler = (e) => {
  modal.style.transform = "translateX(0)";
  modal.style.zIndex = 1;
  modal.style.opacity = 1;
  url.focus();
};

let hideModalHandler = (e) => {
  modal.style.transform = "translateX(-100%)";
  modal.style.zIndex = -1;
  modal.style.opacity = 0;
};

let addItemFiller = (item) => {
  url.value = "";
  hideModalHandler();
  toggleAddItem();
  let newItem = document.createElement("div");
  newItem.setAttribute("class", "read-item");
  newItem.innerHTML = `<img src="${item.screenshot}" /><h3>${item.title}</h3>`;
  items.appendChild(newItem);
};

ipcRenderer.on("add-item-success", (e, item) => addItemFiller(item));

let addItemHandler = (e) => {
  toggleAddItem();
  ipcRenderer.send("add-item", url.value);
};

let urlEnterHandler = (e) => {
  if (e.key == "Enter") addItem.click();
};

showModal.addEventListener("click", showModalHandler);
closeModal.addEventListener("click", hideModalHandler);
addItem.addEventListener("click", addItemHandler);
url.addEventListener("keyup", urlEnterHandler);

// document.querySelector("header > button").addEventListener("click", showHider);
// document.getElementById("cancel-modal").addEventListener("click", showHider);

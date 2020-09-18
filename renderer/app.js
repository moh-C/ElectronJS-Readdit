// This file is required by the index.html file and will
// be executed in the renderer process for that window.

const { ipcRenderer } = require("electron");
const {
  showModalHandler,
  hideModalHandler,
  urlEnterHandler,
} = require("./modalHandler");
const { toggleAddItem } = require("./toggle");

const itemHandler = require("./itemHandler");

// All of the Node.js APIs are available in this process.

let showModal = document.getElementById("show-modal"),
  closeModal = document.getElementById("close-modal"),
  addItem = document.getElementById("add-item"),
  url = document.getElementById("url");

ipcRenderer.on("add-item-success", (e, item) => {
  itemHandler.addItem(item, true);
  url.value = "";
  hideModalHandler();
  toggleAddItem();
});

let addItemHandler = (e) => {
  toggleAddItem();
  ipcRenderer.send("add-item", url.value);
};

showModal.addEventListener("click", showModalHandler);
closeModal.addEventListener("click", hideModalHandler);
addItem.addEventListener("click", addItemHandler);
url.addEventListener("keyup", urlEnterHandler);

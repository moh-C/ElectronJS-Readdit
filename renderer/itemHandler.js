const fs = require("fs");

let readerJS;
fs.readFile(`${__dirname}\\reader.js`, (err, data) => {
  readerJS = data.toString();
});

items = document.getElementById("items");

exports.storage = JSON.parse(localStorage.getItem("read-item")) || [];

window.addEventListener("message", (e) => {
  if (e.data.action == "delete-reader-item") {
    this.delete(e.data.index);
    e.source.close();
  }
});

exports.delete = (itemIndex) => {
  this.getCurrentItem().node.remove();
  this.storage.splice(itemIndex, 1);
  this.save();

  if (this.storage.length) {
    let newSelectedItem = itemIndex == 0 ? 0 : itemIndex - 1;
    document
      .getElementsByClassName("read-item")
      [newSelectedItem].classList.add("selected");
  }
};

exports.getCurrentItem = () => {
  let currentItem = document.getElementsByClassName("selected")[0];

  let itemIndex = 0;
  let child = currentItem;
  while ((child = child.previousElementSibling) != null) itemIndex++;

  let response = {
    node: currentItem,
    item: itemIndex,
  };

  return response;
};

exports.save = () => {
  localStorage.setItem("read-item", JSON.stringify(this.storage));
};

exports.open = (e) => {
  if (!this.storage.length) return;

  let selectedItem = this.getCurrentItem();

  let url_ = selectedItem.node.dataset.url;

  let readWin = window.open(
    url_,
    "",
    `
  nodeIntegration=0, 
  contextIsolation=1,
  width=1000,
  height=600,
  maxWidth=2100,
  maxHeight=2100,
  x=100,
  y=100,
  `
  );
  readWin.eval(readerJS.replace("{index}", selectedItem.item));
};

exports.select = (e) => {
  if (document.getElementsByClassName("selected")[0])
    document.getElementsByClassName("selected")[0].classList.remove("selected");
  e.currentTarget.classList.add("selected");
};

exports.addItem = (item, isNew = false) => {
  let newItem = document.createElement("div");
  newItem.setAttribute("class", "read-item");
  newItem.innerHTML = `<img src="${item.screenshot}" /><h3>${item.title}</h3>`;
  newItem.setAttribute("data-url", item.url);

  newItem.addEventListener("click", this.select);
  newItem.addEventListener("dblclick", this.open);

  items.appendChild(newItem);

  if (isNew) {
    this.storage.push(item);
    this.save();
  }
};

this.storage.forEach((element) => {
  this.addItem(element);
});

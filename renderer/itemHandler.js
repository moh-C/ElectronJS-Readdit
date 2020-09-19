items = document.getElementById("items");

exports.storage = JSON.parse(localStorage.getItem("read-item")) || [];

exports.save = () => {
  localStorage.setItem("read-item", JSON.stringify(this.storage));
};

exports.open = (e) => {
  let url_ = e.currentTarget.getAttribute("data-url");
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

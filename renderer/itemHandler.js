items = document.getElementById("items");

exports.storage = JSON.parse(localStorage.getItem("read-item")) || [];

exports.save = () => {
  localStorage.setItem("read-item", JSON.stringify(this.storage));
};

exports.addItem = (item, isNew = false) => {
  let newItem = document.createElement("div");
  newItem.setAttribute("class", "read-item");
  newItem.innerHTML = `<img src="${item.screenshot}" /><h3>${item.title}</h3>`;
  items.appendChild(newItem);

  if (isNew) {
    this.storage.push(item);
    this.save();
  }
};

this.storage.forEach((element) => {
  this.addItem(element);
});

items = document.getElementById("items");

let addItemFiller = (item) => {
  let newItem = document.createElement("div");
  newItem.setAttribute("class", "read-item");
  newItem.innerHTML = `<img src="${item.screenshot}" /><h3>${item.title}</h3>`;
  items.appendChild(newItem);
};

module.exports = { addItemFiller };

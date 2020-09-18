let closeModal = document.getElementById("close-modal"),
  addItem = document.getElementById("add-item");

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

module.exports = { toggleAddItem };

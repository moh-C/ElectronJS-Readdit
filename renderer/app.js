// This file is required by the index.html file and will
// be executed in the renderer process for that window.

// All of the Node.js APIs are available in this process.

let showModal = document.getElementById("show-modal"),
  closeModal = document.getElementById("close-modal"),
  modal = document.getElementById("modal");

let showModalCallback = (e) => {
  modal.style.transform = "translateX(0)";
  modal.style.zIndex = 1;
  modal.style.opacity = 1;
};

let hideModalCallback = (e) => {
  modal.style.transform = "translateX(-100%)";
  modal.style.zIndex = -1;
  modal.style.opacity = 0;
};

showModal.addEventListener("click", showModalCallback);
closeModal.addEventListener("click", hideModalCallback);

// document.querySelector("header > button").addEventListener("click", showHider);
// document.getElementById("cancel-modal").addEventListener("click", showHider);

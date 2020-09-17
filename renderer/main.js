// This file is required by the index.html file and will
// be executed in the renderer process for that window.

const { stat } = require("fs");

// All of the Node.js APIs are available in this process.
let showHider = (e) => {
  if (document.getElementById("new-item-parent").style.display == "none") {
    document.getElementById("new-item-parent").style.display = "flex";
  } else document.getElementById("new-item-parent").style.display = "none";
};
document.querySelector("header > button").addEventListener("click", showHider);

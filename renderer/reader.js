let closeItem = document.createElement("div");
closeItem.innerText = "Done";

closeItem.setAttribute("id", "done");

let css_ = `
    position: fixed;
    z-index: 9999;
    text-align:center;
    justify-content:center;
    padding:10px 30px;
    right: 15px;
    bottom: 15px;
    border-radius: 10px;
    font-size: 15px;
    background-color: dodgerblue;
    box-shadow: 0px 5px 20px black;`;
closeItem.addEventListener("mouseenter", (e) => {
  css_mod =
    css_ + `background-color: rgba(30, 144, 255, 0.8); cursor: pointer;`;
  closeItem.style.cssText = css_mod;
});

closeItem.addEventListener("mouseleave", (e) => {
  closeItem.style.cssText = css_;
});

closeItem.addEventListener("click", (e) => {
  window.opener.postMessage(
    {
      action: "delete-reader-item",
      index: `{index}`,
    },
    "*"
  );
});

closeItem.style.cssText = css_;

document.getElementsByTagName("body")[0].append(closeItem);

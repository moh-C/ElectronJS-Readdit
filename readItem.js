const { BrowserWindow } = require("electron");

let offscreen = null;

module.exports = (url) => {
  offscreen = new BrowserWindow({
    width: 400,
    height: 400,
    show: false,
    webPreferences: { offscreen: true },
  });

  //   offscreen.webContents.on("did-finish-load", (e) => {
  //     dataURL = offscreen.capturePage().then((i) => {
  //       return i.toDataURL();
  //     });

  //     response = {
  //       title: offscreen.getTitle(),
  //       url: dataURL,
  //     };

  //     offscreen.close();
  //     offscreen = null;

  //     return response;
  //   });

  response = {
    title: "offscreen.getTitle()",
    url: "dataURL",
  };

  offscreen.close();
  offscreen = null;

  return response;
};

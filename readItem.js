const { BrowserWindow } = require("electron");

let offscreen = null;

module.exports = (url, callback) => {
  offscreen = new BrowserWindow({
    width: 600,
    height: 600,
    show: false,
    webPreferences: { offscreen: true },
  });
  offscreen.loadURL(url);

  offscreen.webContents.on("did-finish-load", (e) => {
    let title = offscreen.getTitle();
    dataURL = offscreen.capturePage().then((image) => {
      let screenshot = image.toDataURL();
      callback({
        title,
        screenshot,
        url,
      });

      offscreen.close();
      offscreen = null;
    });
  });
};

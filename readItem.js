const { BrowserWindow } = require("electron");

let offscreen = null;

module.exports = (url, callback) => {
  offscreen = new BrowserWindow({
    width: 400,
    height: 400,
    show: false,
    webPreferences: { offscreen: true },
  });
  offscreen.loadURL(url);

  offscreen.webContents.on("did-finish-load", (e) => {
    let title = offscreen.getTitle();
    dataURL = offscreen.capturePage().then((image) => {
      let screenshot = image.toDataURL();
      console.log(title);
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

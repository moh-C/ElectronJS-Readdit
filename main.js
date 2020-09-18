// Modules
const { app, BrowserWindow, ipcMain } = require("electron");
const windowStateKeeper = require("electron-window-state");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let returnData = () => {
  let data = {
    url: "hello.com",
    uri: "hello2.com",
  };
  return data;
};

ipcMain.handle("add-item", (e) => {
  return returnData();
});

// Create a new BrowserWindow when `app` is ready
function createWindow() {
  let winState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 1000,
  });

  mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    x: winState.x,
    y: winState.y,
    maxWidth: 1000,
    maxHeight: 1200,
    webPreferences: { nodeIntegration: true },
  });

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("./renderer/main.html");
  mainWindow.setMenu(null);

  // Open DevTools - Remove for PRODUCTION!
  // mainWindow.webContents.openDevTools();

  winState.manage(mainWindow);

  // Listen for window being closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Electron `app` is ready
app.on("ready", createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

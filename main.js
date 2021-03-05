const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("is-dev");

let win;
function createWindow() {
  win = new BrowserWindow({
    frame: false,
    width: 350,
    height: 250,
    icon: "./src/play.svg",
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + "/preload.js",
    },
  });
  if (isDev) {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile("file://../build/index.html");
  }
}

app.on("ready", createWindow);

app.on("activate", () => {
  win.show();
});

ipcMain.on("closeApp", () => {
  app.quit();
});

ipcMain.on("hideApp", () => {
  win.hide();
});

const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("is-dev");

function createWindow() {
  const win = new BrowserWindow({
    frame: false,
    width: 350,
    height: 250,
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

ipcMain.on("closeApp", () => {
  app.quit();
});

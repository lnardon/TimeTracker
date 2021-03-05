const { app, BrowserWindow, Notification } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    frame: false,
    width: 350,
    height: 250,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.setResizable(false);
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("ready", () => {});

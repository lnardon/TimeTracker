const { app, BrowserWindow } = require("electron");
const notifier = require("node-notifier");

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
  notifier.notify({
    title: "My notification",
    message: "Hello, there!",
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const { app, BrowserWindow, Menu } = require("electron");
let path = require("path");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    icon: path.join(__dirname, "./assets/icons/icon.icns"),
    icon: path.join(__dirname, "./assets/icons/icon.ico")
  });

  win.loadFile("./assets/html/index.html");
  win.setMenu(null);
  Menu.setApplicationMenu(null);
}

app.on("ready", createWindow);

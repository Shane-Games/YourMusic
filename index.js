const { app, BrowserWindow, Menu } = require("electron");
let path = require("path");

function createWindow() {
  let win = new BrowserWindow({
    title: "YourMusic",
    icon: path.join(__dirname, "./assets/icons/icon.ico")
  });

  win.loadFile("./assets/html/index.html");
  win.setMenu(null);
  Menu.setApplicationMenu(null);
}

app.on("ready", createWindow);

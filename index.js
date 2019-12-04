const {
    app,
    BrowserWindow
} = require('electron')
let path = require('path');

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        icon: path.join(__dirname, './assets/icons/icon.ico')

    })

    // and load the index.html of the app.
    win.removeMenu()
    win.loadFile('./assets/html/index.html');
}

app.on('ready', createWindow)
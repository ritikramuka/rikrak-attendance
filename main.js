const electron = require("electron");
const app = electron.app;
const path = require('path');

function createWindow() {
    const win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        icon: path.join(__dirname, 'logo/logo.ico'),
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    })

    win.setMenuBarVisibility(false);

    win.loadFile("./util/index.html")
        .then(function () {
            win.show();
            // win.webContents.openDevTools();
        })
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.allowRendererProcessReuse = false;
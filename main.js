const electron = require("electron");
const app = electron.app;

function createWindow() {
    const win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        backgroundColor: '#6188F4',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    })

    win.loadFile("index.html")
        .then(function () {
            win.show();
            win.webContents.openDevTools();
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
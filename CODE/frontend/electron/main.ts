import {app, BrowserWindow} from "electron";
import path from "node:path";
import {ChildProcess, spawn} from 'child_process';
import {fileURLToPath} from "url";
import express from "express"

process.env.DIST = path.join(__dirname, "../dist");

const __filename = fileURLToPath("file://" + path.join(process.resourcesPath, '/index.html'))
console.log(__filename)
const serverapp = express()

const PORT = 5173

// const indexPath = path.join(process.env.DIST, "index.html");

serverapp.use(express.static(process.resourcesPath))
serverapp.get('*', (req, res) => {
    res.sendFile(__filename);
    console.log(req.path)
});

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.VITE_PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
let backendProcess: ChildProcess | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
    win = new BrowserWindow({
        icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        // fullscreen: true,
        width: 1920,
        height: 1080,
        minWidth: 1080,
        minHeight: 785
    });

    // Test active push message to Renderer-process.
    win.webContents.on("did-finish-load", () => {
        win?.webContents.send("main-process-message", new Date().toLocaleString());
    });

    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL);
        console.log("ESSUNIA BYCZQ2")
        win.on('closed', () => {
            win = null;
            if (backendProcess) {
                backendProcess.kill();
            }
        });
    } else {
        win.loadURL(`http://localhost:${PORT}`)
            .then(r => console.log(r))
            .catch((e) => console.log(e));
        console.log("ESSUNIA BYCZQ")
        win.on('closed', () => {
            win = null;
            if (backendProcess) {
                backendProcess.kill();
            }
        });
    }
    win.maximize()
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('ready', async () => {
    const jarPath = path.join(process.resourcesPath, '/app_back.jar');
    console.log(jarPath)
    console.log(process.resourcesPath)

    backendProcess = spawn('java', ['-jar', jarPath, ''])

    backendProcess.on('close', (code) => {
        console.log(`Proces zakończył się z kodem wyjścia ${code}`);
    })

    serverapp.listen(PORT, () => {
        console.log("SERWER FRONT START")
        createWindow();
    })
});


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
        win = null;
    }
    createWindow();
});

// app.on("activate", () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

// app.whenReady().then(createWindow);

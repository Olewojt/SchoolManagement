import { app, BrowserWindow } from "electron";
import path from "node:path";
import { ChildProcess, spawn, exec } from 'child_process';
import { fileURLToPath } from "url";
import express from "express";

process.env.DIST = path.join(__dirname, "../dist");

const __filename = fileURLToPath("file://" + path.join(process.resourcesPath, '/index.html'));
console.log(__filename);
const serverapp = express();

const PORT = 5173;

serverapp.use(express.static(process.resourcesPath));
serverapp.get('*', (req, res) => {
    res.sendFile(__filename);
    console.log(req.path);
});

process.env.VITE_PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
let backendProcess: ChildProcess | null;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
    win = new BrowserWindow({
        icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        width: 1920,
        height: 1080,
        minWidth: 1080,
        minHeight: 785
    });

    win.webContents.on("did-finish-load", () => {
        win?.webContents.send("main-process-message", new Date().toLocaleString());
    });

    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL);
        console.log("ESSUNIA BYCZQ2");
    } else {
        win.loadURL(`http://localhost:${PORT}`)
            .then(r => console.log(r))
            .catch((e) => console.log(e));
        console.log("ESSUNIA BYCZQ");
    }

    win.on('closed', () => {
        win = null;
        if (backendProcess) {
            console.log('Sending kill signal to backend process');
            killBackendProcess();
        }
    });

    win.maximize();
}

function killBackendProcess() {
    if (backendProcess) {
        console.log(`PID procesu do zabicia ${backendProcess.pid}`);
        exec(`taskkill /pid ${backendProcess.pid} /f /t`, (err, stdout) => {
            if (err) {
                console.error(`Error killing backend process: ${err}`);
                return;
            }
            console.log(`Backend process killed: ${stdout}`);
        });
    }
}

app.on('ready', async () => {
    const jarPath = path.join(process.resourcesPath, '/app_back.jar');
    console.log(jarPath);
    console.log(process.resourcesPath);

    backendProcess = spawn('java', ['-jar', jarPath, '']);

    backendProcess.on('close', (code) => {
        console.log(`Process exited with code ${code}`);
    });

    backendProcess.on('error', (err) => {
        console.log(`Failed to start subprocess: ${err}`);
    });

    serverapp.listen(PORT, () => {
        console.log("Server front started");
        createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on('quit', () => {
    console.log('Application quit event');
    killBackendProcess();
});

app.on('before-quit', () => {
    console.log('App is about to quit. Performing cleanup.');
    // Close all windows
    if (win) {
        win.close();
    }
    killBackendProcess();
});

process.on('exit', () => {
    console.log('Main process is exiting. Ensuring child process is killed.');

   killBackendProcess();
});

// Catch uncaught exceptions and ensure child process is killed
process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);

   killBackendProcess();

    process.exit(1);
});

// Ensure child process is killed on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
    console.log('Received SIGINT. Ensuring child process is killed.');

    killBackendProcess();

    process.exit(0);
});

// Ensure child process is killed on SIGTERM
process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Ensuring child process is killed.');

    killBackendProcess();

    process.exit(0);
});

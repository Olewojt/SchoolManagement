import { exec } from 'child_process';
import fetch from 'node-fetch';
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const MYSQL_DOWNLOAD_URL = 'https://dev.mysql.com/get/mysql-installer-web-community-8.0.26.0.msi';
function checkMySQLInstalled() {
    return new Promise((resolve) => {
        exec('mysql --version', (error) => {
            resolve(!error);
        });
    });
}
function downloadMySQLInstaller() {
    return new Promise((resolve, reject) => {
        const installerPath = path.join(__dirname, 'mysql-installer.msi');
        fetch(MYSQL_DOWNLOAD_URL)
            .then((res) => {
            const dest = fs.createWriteStream(installerPath);
            if (res.body) {
                res.body.pipe(dest);
                res.body.on('end', () => resolve(installerPath));
                res.body.on('error', reject);
            }
        });
    });
}
function installMySQL(installerPath) {
    return new Promise((resolve, reject) => {
        exec(`msiexec /i ${installerPath}`, (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
function startMySQL() {
    return new Promise((resolve, reject) => {
        exec('net start MySQL80', (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
async function main() {
    try {
        const isMySQLInstalled = await checkMySQLInstalled();
        if (!isMySQLInstalled) {
            console.log('MySQL is not installed. Downloading and installing...');
            const installerPath = await downloadMySQLInstaller();
            await installMySQL(installerPath);
        }
        else {
            console.log('MySQL is already installed.');
        }
        await startMySQL();
        console.log('MySQL server is running.');
    }
    catch (error) {
        console.error('Failed to check or install MySQL:', error);
        process.exit(1);
    }
}
main();

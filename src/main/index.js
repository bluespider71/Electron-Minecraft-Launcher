import path from "path";
import { app, BrowserWindow } from "electron";
import config from "./config";

/**
 * Initializations
 */
/********************************************** */
let main = null;
let initial = null;

const initialWidth = import.meta.env.VITE_INITIAL_WIDTH;
const initialHeight = import.meta.env.VITE_INITIAL_HEIGHT;

const initialLogoWidth = import.meta.env.VITE_LOGO_WIDTH;
const initialLogoHeight = import.meta.env.VITE_LOGO_HEIGHT;

const publishMainUrl = path.join(__dirname, "index.html");
const splashLocation = path.join(__dirname, "splash", "index.html");
const splashUrl = `file://${splashLocation}`;

const url = import.meta.env.VITE_APP_DOMAIN + ":" + import.meta.env.VITE_APP_PORT;
const mainUrl = import.meta.env.APP_ENV === "publish" ? `file://${publishMainUrl}` : url;
/********************************************** */
/** End initializations */

app.on("ready", () => {
    var splash = new BrowserWindow({
        width: parseInt(initialLogoWidth),
        height: parseInt(initialLogoHeight),
        transparent: true,
        resizable: false,
        frame: false,
        alwaysOnTop: true,
        webPreferences: {
            webSecurity: false,
        },
    });
    splash.loadURL(splashUrl);
    splash.center();

    setTimeout(() => {
        /** Initial window */
        initial = new BrowserWindow({
            width: parseInt(initialWidth),
            height: parseInt(initialHeight),
            frame: false,
            resizable: false,
            show: false,
            alwaysOnTop: false,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                webSecurity: false,
            },
        });
        initial.loadURL(mainUrl);
        initial.once('ready-to-show', () => {
            initial.show();
            splash.close();
        })
        initial.webContents.openDevTools();
        initial.on("closed", () => (initial = null));
    }, 1500);
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

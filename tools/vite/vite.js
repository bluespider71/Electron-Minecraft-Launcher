#!/usr/bin/env node
const { createServer, build, createLogger, preview, server } = require("vite");
const electronPath = require("electron");
const { spawn } = require("child_process");
const path = require("path");
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV) });

const mode = (process.env.MODE = process.env.MODE || "dev");

const LOG_LEVEL = "info";

const sharedConfig = {
    mode,
    build: {
        watch: {},
    },
    logLevel: LOG_LEVEL,
};

/** Messages on stderr that match any of the contained patterns will be stripped from output */
const stderrFilterPatterns = [
    // warning about devtools extension
    // https://github.com/cawa-93/vite-electron-builder/issues/492
    // https://github.com/MarshallOfSound/electron-devtools-installer/issues/143
    /ExtensionLoadWarning/,
];

const getWatcher = ({ name, configFile, writeBundle }) => {
    return build({
        ...sharedConfig,
        configFile,
        plugins: [{ name, writeBundle }],
    });
};

const setupMainPackageWatcher = ({ config: { server } }) => {
    // Create VITE_DEV_SERVER_URL environment variable to pass it to the main process.
    {
        const protocol = server.https ? "https:" : "http:";
        const host = server.host || "localhost";
        const port = server.port; // Vite searches for and occupies the first free port: 3000, 3001, 3002 and so on
        const path = "/";
        process.env.VITE_DEV_SERVER_URL = `${protocol}//${host}:${port}${path}`;
    }

    const logger = createLogger(LOG_LEVEL, {
        prefix: "[main]",
    });

    let spawnProcess = null;

    return getWatcher({
        name: "reload-app-on-main-package-change",
        configFile: "src/main/vite.config.js",
        writeBundle() {
            if (spawnProcess !== null) {
                spawnProcess.off("exit", process.exit);
                spawnProcess.kill("SIGINT");
                spawnProcess = null;
            }

            spawnProcess = spawn(String(electronPath), ["."]);

            spawnProcess.stdout.on("data", (d) => d.toString().trim() && logger.warn(d.toString(), { timestamp: true }));
            spawnProcess.stderr.on("data", (d) => {
                const data = d.toString().trim();
                if (!data) return;
                const mayIgnore = stderrFilterPatterns.some((r) => r.test(data));
                if (mayIgnore) return;
                logger.error(data, { timestamp: true });
            });

            // Stops the watch script when the application has been quit
            spawnProcess.on("exit", process.exit);
        },
    });
};

const setupPreloadPackageWatcher = ({ ws }) =>
    getWatcher({
        name: "reload-page-on-preload-package-change",
        configFile: "src/preload/vite.config.js",
        writeBundle() {
            ws.send({
                type: "full-reload",
            });
        },
    });
    const setupSplashPackageWatcher = ({ ws }) =>
    getWatcher({
        name: "reload-page-on-splash-package-change",
        configFile: "src/splash/vite.config.js",
        writeBundle() {
            ws.send({
                type: "full-reload",
            });
        },
    });

(async () => {
    try {
        const viteDevServer = await createServer({
            ...sharedConfig,
            configFile: "src/renderer/vite.config.js",
        });

        await viteDevServer.listen();

        viteDevServer.printUrls();
        await setupSplashPackageWatcher(viteDevServer); 
        await setupPreloadPackageWatcher(viteDevServer);
        await setupMainPackageWatcher(viteDevServer);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();

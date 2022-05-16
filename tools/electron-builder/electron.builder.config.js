const path = require("path");

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    extends: null,
    directories: {
        output: "build",
        buildResources: "public",
    },
    files: ["**/dist/**", "**/public/**"],
    appId: "com.riva.launcher.app",
    win: {
        icon: "public/riva.ico",
        target: ["msi", "nsis", "squirrel", "nsis-web", "portable"],
    },
    nsis: {
        oneClick: false,
        allowElevation: true,
        allowToChangeInstallationDirectory: true,
    },
    linux: {
        icon: "public/riva.ico",
        target: ["AppImage", "snap", "deb", "rpm", "apk", "tar.xz", "tar.gz", "tar.lz", "tar.bz2"],
    },
    mac: {
        icon: "public/riva.ico",
        target: ["dmg"],
    },
};

module.exports = config;

import path from "path";
import config from "../config";
import { builtinModules } from "module";
import { defineConfig, loadEnv } from "vite";
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV) });
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV + ".local") });

export default defineConfig(({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, path.join(process.cwd(), "env")) };

    return {
        mode: process.env.MODE || "dev",
        root: __dirname,
        build: {
            mode: process.env.MODE || "dev",
            sourcemap: "inline",
            outDir: path.join(__dirname, "..", "..", "dist"),
            assetsDir: ".",
            resolve: {
                alias: {
                    "/@/": path.join(__dirname, "src") + "/",
                },
            },
            target: `node${config.node}`,
            minify: true,
            envDir: path.join(__dirname, "..", "..", "env"),
            lib: {
                entry: "index.js",
                formats: ["cjs"],
            },
            rollupOptions: {
                external: ["electron", "electron-devtools-installer", ...builtinModules.flatMap((p) => [p, `node:${p}`])],
                output: {
                    entryFileNames: "[name].cjs",
                },
            },
            emptyOutDir: false,
            brotliSize: false,
        },
    };
});

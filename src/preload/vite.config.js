import config from "../config";
import { builtinModules } from "module";
import { defineConfig, loadEnv } from "vite";
import path from "path";
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV) });
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV + ".local") });

const PACKAGE_ROOT = __dirname;

const config_ = defineConfig(({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, path.join(process.cwd(), "env")) };

    return {
        mode: process.env.MODE || "dev",
        root: PACKAGE_ROOT,
        envDir: process.cwd(),
        build: {
            sourcemap: "inline",
            target: `chrome${config.chrome}`,
            outDir: "dist",
            assetsDir: ".",
            minify: true,
            lib: {
                entry: "index.js",
                formats: ["cjs"],
            },
            rollupOptions: {
                external: ["electron", ...builtinModules.flatMap((p) => [p, `node:${p}`])],
                output: {
                    entryFileNames: "[name].cjs",
                },
            },
            emptyOutDir: true,
            brotliSize: false,
        },
    };
});

export default config_;

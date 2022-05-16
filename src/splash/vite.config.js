import path from "path";
import { defineConfig, loadEnv } from "vite";
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV) });
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV + ".local") });

export default defineConfig(({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, path.join(process.cwd(), "env")) };

    return {
        mode: process.env.MODE || "dev",
        root: __dirname,
        base: "./",
        build: {
            sourcemap: "inline",
            outDir: path.join(__dirname, "..", "..", "dist", "splash"),
            assetsDir: ".",
            resolve: {
                alias: {
                    "/@/": path.join(__dirname, "src") + "/",
                },
            },
            publicDir: path.join(__dirname, "..", "..", "public"),
            assetsInclude: ["/*.gltf", "/.svg", "**/.ico", "/*.png", "/.jpg", "**/.jpeg"],
            minify: true,
            envDir: path.join(__dirname, "..", "..", "env"),
            emptyOutDir: true,
            brotliSize: false,
        },
    };
});
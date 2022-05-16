import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import config from "../config";
import { builtinModules } from "module";
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV) });
require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + process.env.NODE_ENV + ".local") });

export default defineConfig(({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        mode: process.env.MODE || "dev",
        plugins: [react()],
        resolve: {
            alias: {
                "/@/": path.join(__dirname, "src") + "/",
                fs: require.resolve("rollup-plugin-node-builtins"),
            },
        },
        esbuild: {
            loader: "jsx",
            include: /src\/.*\.jsx?$/,
            // loader: "tsx",
            // include: /src\/.*\.[tj]sx?$/,
            exclude: [],
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    {
                        name: "load-js-files-as-jsx",
                        setup(build) {
                            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                                loader: "jsx",
                                contents: await fs.readFile(args.path, "utf8"),
                            }));
                        },
                    },
                ],
            },
        },
        root: __dirname,
        envDir: path.join(__dirname, "..", "..", "env"),
        publicDir: path.join(__dirname, "..", "..", "public"),
        assetsInclude: ["**/*.gltf", "**/*.svg", "**/*.ico", "**/*.png", "**/*.jpg", "**/*.jpeg"],
        server: {
            fs: {
                strict: true,
            },
            port: process.env.VITE_APP_PORT || 5000,
            outDir: "dist",
        },
        base: "./",
        build: {
            chunkSizeWarningLimit: 1000,
            entry: "index.html",
            sourcemap: true,
            target: `chrome${config.chrome}`,
            outDir: path.join(__dirname, "..", "..", "dist"),
            assetsDir: ".",
            rollupOptions: {
                input: path.join(__dirname, "index.html"),
                external: ["electron", ...builtinModules.flatMap((p) => [p, `node:${p}`])],
            },
            emptyOutDir: false,
            brotliSize: false,
        },
    };
});

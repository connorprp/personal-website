import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                freeCodeCamp: resolve(__dirname, "freeCodeCamp/index.html"),
                connorsWebsite: resolve(__dirname, "connorsWebsite/index.html"),
                thirdPage: resolve(__dirname, "thirdPage/index.html"),
            }
        }
    }
})
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/client-side-demos/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                freeCodeCamp: resolve(__dirname, "freeCodeCamp/index.html"),
                connorsWebsite: resolve(__dirname, "connorsWebsite/index.html"),
                palindrome: resolve(__dirname, "palindrome/index.html"),
            }
        }
    }
})
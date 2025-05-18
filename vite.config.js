import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/client-side-demos/",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                freeCodeCamp: resolve(__dirname, "freeCodeCamp/index.html"),
                connorsWebsite: resolve(__dirname, "connorsWebsite/index.html"),
                palindrome: resolve(__dirname, "palindrome/index.html"),
                certification2: resolve(__dirname, "certification2/index.html"),
                tournamentPayouts: resolve(__dirname, "tournamentPayouts/index.html"),
                certification3: resolve(__dirname, "certification3/index.html"),
                photoSite: resolve(__dirname, "photoSite/index.html"),
                about: resolve(__dirname, "photoSite/about/index.html"),
                portfolio: resolve(__dirname, "photoSite/portfolio/index.html"),
                events: resolve(__dirname, "photoSite/events/index.html"),
                certification4: resolve(__dirname, "certification4/index.html"),
                certification5: resolve(__dirname, "certification5/index.html"),
                landscape: resolve(__dirname, "landscape/index.html"),
                daysbycolor: resolve(__dirname, "daysbycolor/index.html"),
            }
        }
    }
})
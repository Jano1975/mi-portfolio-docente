// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/Jano1975/Portfolio.github.io",

  // Mantenemos el modo de salida estático idóneo para GitHub Pages
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});

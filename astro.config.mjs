import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://jamietries.netlify.app",
  output: "server",
  integrations: [react(), markdoc(), keystatic()],
  adapter: netlify(),
});

import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://visionary-mermaid-ffeff9.netlify.app/",
  integrations: [preact()]
});
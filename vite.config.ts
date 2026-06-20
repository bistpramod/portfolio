import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // Your domain uses Cloudflare. Its "Rocket Loader" feature breaks React apps
    // by trying to lazy-load module scripts. This tag tells Cloudflare to leave
    // our scripts alone so the site actually loads.
    {
      name: "disable-cloudflare-rocket-loader",
      transformIndexHtml: {
        order: "post",
        handler(html) {
          return html.replace(
            /<script type="module"/g,
            '<script data-cfasync="false" type="module"',
          );
        },
      },
    },
  ],
});

import solid from "solid-start/vite";
// @ts-ignore
import netlify from "solid-start-netlify";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ adapter: netlify() })],
});

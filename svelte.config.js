import adapter from "@sveltejs/adapter-static";

const base = process.env.BASE_PATH || "";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    appDir: "app",
    paths: {
      base,
    },
    files: {
      assets: "images",
    },
    alias: {
      $components: "src/components",
      $lib: "src/lib",
    },
    prerender: {
      entries: ["*"],
    },
  },
};

export default config;



import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { dependencies } from "./package.json";

export default defineConfig({
  server: { port: 3011 },
  output: { assetPrefix: "http://localhost:3011/" },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "remote",
      exposes: {
        "./component": "./src/Component.tsx",
      },
      shareStrategy:
        process.env.NODE_ENV === "development" ? "loaded-first" : undefined,
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
});

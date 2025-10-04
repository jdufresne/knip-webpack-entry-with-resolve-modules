import path from "node:path";

export default {
  mode: "development",
  context: path.resolve(import.meta.dirname, "context"),
  entry: "entries/main.js",
  resolve: {
    modules: [
      path.resolve(import.meta.dirname, "context"),
      "node_modules",
    ],
  }
}

import { defineConfig } from "vite";
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";

export default defineConfig((configEnv) => ({
  plugins: [
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
      include: ['src/'],
    }),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv: configEnv }), new TypeScriptLinter()],
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "~" : resolve(__dirname, './src'),
    }
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'Ui corejs',
      formats: ['es'],
      fileName: (format) => `ui-corejs.${format}.js`,
    },
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("src/**/*.ts").map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("src", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    }
  }
}));
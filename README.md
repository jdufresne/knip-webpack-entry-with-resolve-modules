# knip-webpack-entry-with-resolve-modules

First, install modules:

```console
$ npm install
```

Observe, the project builds successfully:

```console
$ npm run build

> knip-webpack-entry-with-resolve-modules@1.0.0 build
> webpack

asset main.js 2.04 KiB [compared for emit] (name: main)
runtime modules 274 bytes 1 module
./entries/main.js 1 bytes [built] [code generated]
webpack 5.102.0 compiled successfully in 104 ms
```

However, Knip reports that it cannot import the webpack entry point:

```console
$ npm run knip

> knip-webpack-entry-with-resolve-modules@1.0.0 knip
> knip

Unused files (2)
context/entries/main.js
context/main.js
Unresolved imports (1)
entries/main.js  webpack.config.js
```

This false error is isolated to the use of webpack `resolve.modules`.

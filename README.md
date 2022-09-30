# esbuild-http-import-action
GitHub Action for ESBuild with support for HTTP Imports

## Usage

```yaml
    steps:
      - uses: actions/checkout@v3
      - uses: nathanclevenger/esbuild-http-import-action@v1
        with:
          entryPoint: "./index.js"
          outfile: "./dist/index.js"
```

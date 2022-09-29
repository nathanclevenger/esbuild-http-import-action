// import fs from 'fs'
// import core from '@actions/core'
// import github from '@actions/github'
// import esbuild from 'esbuild-wasm'
// const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')
// const esbuild = require('esbuild-wasm')
const swc = require("@swc/core");

const run = async () => {
  try {
    const time = (new Date()).toTimeString()
  //   const config = yaml.parse('_config.yaml')
    const payload = JSON.stringify(github.context , null, 2)
    // const ts = fs.readFileSync('worker.js')

    // const ts = 'let test: boolean = true'
    // const result = await esbuild.transform(ts, { loader: 'ts' })

    

  const result = swc.transform("source code", {
      // Some options cannot be specified in .swcrc
      filename: "worker.js",
      sourceMaps: true,
      // Input files are treated as module by default.
      isModule: true,

      // All options below can be configured via .swcrc
      jsc: {
        parser: {
          syntax: "ecmascript",
        },
        transform: {},
      },
    })
    .then((output) => {
      output.code; // transformed code
      output.map; // source map (in string)
    });

    console.log('result:', result)
    console.log(`The generated api.json: ${payload}`)
  } catch (error) {
    core.setFailed(error.stack)
  }
}

run()
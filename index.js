// import fs from 'fs'
// import core from '@actions/core'
// import github from '@actions/github'
// import esbuild from 'esbuild-wasm'
// const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')
const esbuild = require('esbuild-wasm')

const run = async () => {
  try {
    const time = (new Date()).toTimeString()
  //   const config = yaml.parse('_config.yaml')
    const payload = JSON.stringify(github.context , null, 2)
  //   fs.writeFileSync('api.json', payload)

    // const ts = fs.readFileSync('worker.js')
    const ts = 'let test: boolean = true'
    const result = await esbuild.transform(ts, { loader: 'ts' })
    console.log('result:', result)
    console.log(`The generated api.json: ${payload}`)
  } catch (error) {
    core.setFailed(error.stack)
  }
}

run()
import fs from 'fs'
import core from '@actions/core'
import github from '@actions/github'
import esbuild from 'esbuild'
import httpPlugin from 'esbuild-plugin-http'

try {
  const time = (new Date()).toTimeString()

  const payload = JSON.stringify(github.context , null, 2)
  esbuild.build({
    entryPoints: ['./worker.js'],
    bundle: true,
    outfile: './dist.js',
    plugins: [httpPlugin],
  }).catch(() => process.exit(1))
  
  console.log(`The generated api.json: ${payload}`)
} catch (error) {
  core.setFailed(error.stack)
}

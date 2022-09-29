import fs from 'fs'
import core from '@actions/core'
import github from '@actions/github'
import yaml from 'yaml'

try {
  const time = (new Date()).toTimeString()
//   const config = yaml.parse('_config.yaml')
  const payload = JSON.stringify({ github }, null, 2)
//   fs.writeFileSync('api.json', payload)
  const body = fs.readFileSync('worker.js')
  console.log(`The generated api.json: ${payload}`)
} catch (error) {
  core.setFailed(error.message)
}
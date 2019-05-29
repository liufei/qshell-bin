const path = require('path')
const manifest = require('./manifest.json')
const { spawn } = require('child_process')

const bin = path.join(
  __dirname,
  manifest.destination,
  manifest.filename[process.platform][process.arch]
)

module.exports = function run(args = ['--version']) {
  return spawn(bin, args, { stdio: 'inherit' })
}

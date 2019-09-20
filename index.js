const path = require('path')
const { destination, filename } = require('./manifest.json')
const { spawn } = require('child_process')

const bin = path.join(
  __dirname,
  destination,
  filename[process.platform][process.arch]
)

module.exports = function run(args = ['--version']) {
  return spawn(bin, args, { stdio: 'inherit' })
}

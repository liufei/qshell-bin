#!/usr/bin/env node

const path = require('path')
const { spawn } = require('child_process')
const args = process.argv.slice(2)

const getPlatform = () => {
  const map = {
    linux: 'linux',
    win32: 'windows',
    darwin: 'darwin'
  }

  return map[process.platform]
}

const getArch = () => {
  const map = {
    x32: '386',
    x64: 'amd64',
    arm: 'arm'
  }

  return map[process.arch]
}

const bin = path.join(__dirname, 'bin', `qshell_${getPlatform()}_${getArch()}`)

spawn(bin, args, { stdio: 'inherit' })

#!/usr/bin/env node

const path = require('path')
const manifest = require('../manifest.json')
const { spawn } = require('child_process')

// https://developer.qiniu.com/kodo/tools/1302/qshell 最新版本v2.3.6

const bin = path.join(
  __dirname,
  '..',
  manifest.destination,
  manifest.filename[process.platform][process.arch]
)

const args = process.argv.slice(2)

try {
  spawn(bin, args, { stdio: 'inherit' })
} catch (e) {
  console.error('抱歉，qshell无法找到对应系统的程序\n')
  return false
}

#!/usr/bin/env node

const path = require('path')
const manifest = require('../manifest.json')
const { spawn } = require('child_process')

const bin = path.join(
  manifest.destination,
  manifest.filename[process.platform][process.arch]
)

const args = process.argv.slice(2)

spawn(bin, args, { stdio: 'inherit' })

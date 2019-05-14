#!/usr/bin/env node
const serviceVersion = require('git-rev-sync').short()
const path = require('path')
const manifest = require('../manifest.json')
const { spawn } = require('child_process')
const config = require(path.join(__dirname,'../../../package.json'))

const bin = path.join(
  __dirname,
  '..',
  manifest.destination,
  manifest.filename[process.platform][process.arch]
)

let args = process.argv.slice(2)

if (args[0] === 'qupload2') {
  const attrMap = {
    '--src-dir': 'build',
    '--bucket': 'dada-fe',
    '--key-prefix': `${config.name}/${serviceVersion}/`,
    '--rescan-local': true,
    '--skip-suffixes': '.html,.json,.map',
  }

  const rest = args.slice(1)

  rest.forEach(each => {
    const split = each.split('=')
    attrMap[split[0]] = split[1]
  })

  args = Object.keys(attrMap).reduce(
    (finalArgs, each) => {
      finalArgs.push(`${each}=${attrMap[each]}`)
      return finalArgs
    },
    ['qupload2']
  )
}

// example
// qshell qupload2 --src-dir=build --bucket=dada-fe --key-prefix=goose/commit_hash --rescan-local=true --skip-suffixes=.html,.json

spawn(bin, args, { stdio: 'inherit' })

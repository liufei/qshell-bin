const fs = require('fs-extra')
const download = require('download')
const manifest = require('../manifest.json')

async function install(url, destination) {
  try {
    await fs.emptyDir(destination)
    console.log('Downloading binary from', url)
    await download(url, destination, { extract: true })
  } catch (error) {
    console.error(error)
  }
}

install(manifest.url, manifest.destination)

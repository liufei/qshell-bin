const fs = require('fs-extra')
const download = require('download')
const { origin, filename, destination } = require('../manifest.json')

async function install(url, destination) {
  await fs.emptyDir(destination)
  console.log('Downloading binary from', url)
  await download(url, destination, { extract: true })
}

install(
  `${origin}/${filename[process.platform][process.arch]}.zip`,
  destination
)

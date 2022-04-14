const fs = require('fs')
const path = require('path')

function createNvmFile(options) {
  try {
    const root = (options && options.root) || process.cwd()
    fs.writeFileSync(path.resolve('.nvmrc'), process.version)
  } catch (e) {
    console.log('Error: ', e)
  }
}

module.exports = { createNvmFile }

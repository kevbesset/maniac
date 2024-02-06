import fs from 'fs'
import path from 'path'

function createNvmFile(options) {
  try {
    const root = (options && options.root) || process.cwd()
    fs.writeFileSync(path.resolve(root, '.nvmrc'), process.version)
  } catch (e) {
    console.error('Error: ', e)
  }
}

export default createNvmFile

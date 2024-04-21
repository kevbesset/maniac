import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'
import fse from 'fs-extra'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function handleFile(file, options) {
  try {
    const filePath = path.resolve(__dirname, '..', '..', '..', 'src', file)
    const destinationPath = path.resolve(options?.root || process.cwd(), 'src', file)

    const fileAlreadyExist = await fs.existsSync(destinationPath)
    if (fileAlreadyExist && !options?.force) {
      return false
    } else if (options?.force || !fileAlreadyExist) {
      await fse.copySync(filePath, destinationPath, {
        overwrite: options?.force
      })
      return true
    }
  } catch (e) {
    console.error(e)
  }
}

export default handleFile

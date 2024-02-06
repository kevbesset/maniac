import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import path from 'path'
import fse from 'fs-extra'
import packageList from './config/index.js'
import { execSync } from 'child_process'

const packageNameInstalled = []
const __dirname = dirname(fileURLToPath(import.meta.url))

/*
    TODO:
        - rewrite all in TS
        - handle 'manual: { actions: string[], link: string }' which says that there are manual actions to do
    */

function addPackage(name, options) {
  if (!packageNameInstalled.includes(name)) {
    const projectRoot = options.root || process.cwd()
    packageNameInstalled.push(name)
    const pkg = packageList[name]

    if (pkg) {
      // Install externals
      if (pkg.externals?.length > 0) {
        execSync(
          `cd ${projectRoot} && npm install --save ${pkg.externals.join(' ')}`,
          {
            stdio: 'inherit'
          }
        )
      }
      // Install devExternals
      if (pkg.devExternals?.length > 0) {
        execSync(
          `cd ${projectRoot} && npm install --save-dev ${pkg.devExternals.join(' ')}`,
          {
            stdio: 'inherit'
          }
        )
      }

      // Remove unwanted files
      if (pkg.remove?.length > 0) {
        removeFiles(pkg.remove.join(' '), options)
      }

      // Required packages
      if (pkg.required && pkg.required.length > 0) {
        pkg.required.forEach((requiredPkg) => {
          if (requiredPkg === '*') {
            getAllPackages().forEach((rpkg) => {
              addPackage(rpkg, options)
            })
          } else {
            addPackage(requiredPkg, options)
          }
        })
      }

      // Files to copy
      if (pkg.files && pkg.files.length > 0) {
        pkg.files.forEach((file) => {
          copyFile(file, options)
        })
      }

      console.info(`✅ Package "${name}" installed`)
    } else {
      console.error(`Package "${name}" not found`)
    }
  }
}

function internalPath(destination) {
  return path.resolve(__dirname, '..', 'src', destination)
}

function externalPath(destination, options) {
  const root = (options && options.root) || process.cwd()
  return path.resolve(root, 'src', destination)
}

function removeFiles(files, options) {
  const root = options?.root || process.cwd()
  try {
    execSync(`cd ${path.resolve(root, 'src')} && rm ${files}`, {
      stdio: 'inherit'
    })
  } catch (e) {
    console.error(e)
  }
}

function copyFile(file, options) {
  try {
    fse.copySync(internalPath(file, options), externalPath(file, options), {
      overwrite: true
    })
  } catch (e) {
    console.error('Error during copy: ', e)
  }
}

function getAllPackages() {
  return Object.keys(packageList)
}

export default addPackage

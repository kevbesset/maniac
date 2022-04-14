const path = require('path')
const fse = require('fs-extra')
const packageList = require('./config')

const packageNameInstalled = []

/*
    TODO:
        - handle vite.config for path resolver / aliases
        - handle externals npm packages
        - check if has storybook
            -> yes: copy "stories" with same path
            -> no: do nothing
        - set options to global
        - handle a maniac.config.js to override options
        - rewrite all in TS
        - handle 'manual: { actions: string[], link: string }' which says that there are manual actions to do
    */

function installPackage(name, options) {
  if (!packageNameInstalled.includes(name)) {
    packageNameInstalled.push(name)
    // console.log(`Let's try to add "${name}" package to your project...`)
    const pkg = packageList[name]

    if (pkg) {
      // console.log(`Package "${name}" found!`)

      // Required packages
      if (pkg.required && pkg.required.length > 0) {
        // console.log(`Handling pre-requisites...`)
        pkg.required.forEach((requiredPkg) => {
          if (requiredPkg === '*') {
            getAllPackages().forEach((rpkg) => {
              installPackage(rpkg, options)
            })
          } else {
            installPackage(requiredPkg, options)
          }
        })
      }

      // Files to copy
      if (pkg.files && pkg.files.length > 0) {
        // console.log(`Handling files to copy...`)
        pkg.files.forEach((file) => {
          copyFile(file, options)
        })
      }

      // Stories to copy
      if (pkg.stories && pkg.stories.length > 0) {
        // console.log(`Handling stories to copy...`)
      }
    } else {
      console.error(`Package "${name}" not found`)
    }
  } else {
    // console.log(`Package "${name}" already installed`)
  }
}

function internalPath(destination, options) {
  return path.resolve(__dirname, '..', 'src', destination)
}

function externalPath(destination, options) {
  const root = (options && options.root) || process.cwd()
  return path.resolve(root, 'src', destination)
}

/**
 * TODO
 * - check if file already exist
 * - overwrite if options force = true
 */
function copyFile(file, options) {
  // console.log(
  //   `Copy from ${internalPath(file, options)} to ${externalPath(file, options)}`
  // )
  try {
    fse.copySync(internalPath(file, options), externalPath(file, options), {
      overwrite: !!options.force,
    })
  } catch (e) {
    console.log('Error during copy: ', e)
  }
}

function getAllPackages() {
  return Object.keys(packageList)
}

module.exports = { installPackage }

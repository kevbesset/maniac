const { execSync } = require('child_process')
const path = require('path')
const { installPackage } = require('./addPackage')
const packageList = require('./config')
const { createNvmFile } = require('./createNvmFile')

/**
 * TODO
 * - npm create vite@latest {name}
 * - move to project root
 * - add linter + prettier + .vscode
 * - handle full file copy (App.vue, main.ts, with all packages)
 * - install all externals
 * - disabled "manual" entry from packages
 * - handle option --minimal : only vite + linter + prettier + .vscode
 * - handle option --empty : only minimal + router
 */
function createProject(name, options) {
  // Create Vite project
  execSync(`npm create vite@latest ${name} -- --template vue-ts`, {
    stdio: 'inherit',
  })

  const projectRoot = path.resolve(process.cwd(), name)

  // Install all externals
  execSync(`cd ${projectRoot} && npm install ${getAllExternals().join(' ')}`, {
    stdio: 'inherit',
  })

  // Install all packages
  installPackage('project', {
    root: projectRoot,
    force: true,
  })

  // Create .nvmrc file
  createNvmFile({ root: projectRoot })
}

function getAllExternals() {
  const externals = []

  Object.keys(packageList).forEach((key) => {
    const pkg = packageList[key]

    if (pkg.externals && pkg.externals.length > 0) {
      pkg.externals.forEach((external) => {
        if (!externals.includes(external)) {
          externals.push(external)
        }
      })
    }
  })

  return externals
}

module.exports = { createProject }

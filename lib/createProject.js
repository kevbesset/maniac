import { execSync } from 'child_process'
import path from 'path'
import addPackage from './addPackage.js'
import createNvmFile from './createNvmFile.js'
import packageList from './config/index.js'

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
 *
 *
 *
 *
 * - Need to clean vite unused files (demo files)
 * - Handle remove properties
 */
function createProject(name /*, options */) {
  // Create Vite project
  execSync(`npm create vite@latest ${name} -- --template vue-ts`, {
    stdio: 'inherit'
  })

  const projectRoot = path.resolve(process.cwd(), name)
  // Install all externals
  execSync(
    `cd ${projectRoot} && npm install --save-dev ${getAllDevExternals().join(
      ' '
    )}`,
    {
      stdio: 'inherit'
    }
  )
  execSync(`cd ${projectRoot} && npm install --save ${getAllExternals().join(' ')}`, {
    stdio: 'inherit'
  })

  // Install all packages
  addPackage('project', {
    root: projectRoot
  })

  // Create .nvmrc file
  createNvmFile({ root: projectRoot })

  // Start local environment
  execSync(`cd ${projectRoot} && code .`, {
    stdio: 'inherit'
  })
}

function getAllDevExternals() {
  const externals = []

  Object.keys(packageList).forEach((key) => {
    const pkg = packageList[key]

    if (pkg.devExternals && pkg.devExternals.length > 0) {
      pkg.devExternals.forEach((external) => {
        if (!externals.includes(external)) {
          externals.push(external)
        }
      })
    }
  })

  return externals
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

export default createProject

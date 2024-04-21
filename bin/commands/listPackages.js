import prompts from 'prompts'
import packageList from '../config/packages.js'
import addPackage from './addPackage.js'

async function listPackages(options) {
  try {
    const response = await prompts({
      type: 'multiselect',
      name: 'value',
      message: `Select packages you want to install`,
      choices: Object.keys(packageList).map((pkg) => ({
        title: pkg,
        value: pkg
      })),
      hint: 'Press space to select. Return to submit. "a" to toggle all',
      instructions: false
    })

    for (const packageName of response.value) {
      await addPackage(packageName, options)
    }
  } catch (e) {
    console.error(e)
  }
}

export default listPackages

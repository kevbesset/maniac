#!/usr/bin/env node
import { program } from 'commander'
import version from 'project-version'

import setupProject from './commands/setupProject.js'
import addPackage from './commands/addPackage.js'
import listPackages from './commands/listPackages.js'
import createNvmFile from './commands/createNvmFile.js'

program.name('maniac').version(version, '-v, --version', 'Display the version number')

program
  .command('install')
  .alias('i')
  .description('Set up maniac for your project')
  .option('-f, --force', 'Directly overwrite files')
  .action(async (options) => {
    await setupProject(options)
  })

program
  .command('add')
  .alias('a')
  .description('Add a package to your project')
  .argument('<package-name>', 'Name of the package to add')
  .option('-f, --force', 'Directly overwrite files')
  .action(async (arg, options, action) => {
    const { args } = action
    for (const packageName of args) {
      await addPackage(packageName, options)
    }
  })

program
  .command('list')
  .alias('ls')
  .description('List and select packages to install')
  .option('-f, --force', 'Directly overwrite files')
  .action(async (options) => {
    await listPackages(options)
  })

program
  .command('nvm')
  .description('Create .nvmrc file with current Node version')
  .action(async (arg, options) => {
    await createNvmFile(options)
  })

program.parse()

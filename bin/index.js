#!/usr/bin/env node
import { program } from 'commander'
import createNvmFile from '../lib/createNvmFile.js'
import createProject from '../lib/createProject.js'
import addPackage from '../lib/addPackage.js'

program
  .name('maniac')
  .version('0.0.1', '-v, --version', 'output the current version')

program
  .command('create')
  .description('create a project')
  .argument('<project-name>', 'project name')
  .action((name, options) => {
    console.info('We create a project named', name)
    createProject(name, options)
  })

program
  .command('add')
  .description('add packages to your project')
  .argument('<packages>', 'packages to add')
  .option('-f, --force', 'overwrite files')
  .action((arg, options, action) => {
    const { args } = action

    args.forEach((pkg) => {
      addPackage(pkg, options)
    })
  })

program
  .command('nvm')
  .description('create .nvmrc file')
  .action((arg, options) => {
    createNvmFile(options)
  })

program.parse()

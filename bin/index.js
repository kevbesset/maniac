#!/usr/bin/env node

const { program } = require('commander')
const { createNvmFile } = require('../lib/createNvmFile')
const { createProject } = require('../lib/createProject')
const { installPackage } = require('../lib/addPackage')
const { runStorybook } = require('../lib/runDoc')

program
  .name('maniac')
  .version('0.0.1', '-v, --version', 'output the current version')

program
  .command('create')
  .description('create a project')
  .argument('<project-name>', 'project name')
  .action((name, options) => {
    console.log('We create a project named', name)
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
      installPackage(pkg, options)
    })
  })

program
  .command('doc')
  .description('show design system')
  .action(() => {
    console.log('Start storybook')
    runStorybook()
  })

program
  .command('nvm')
  .description('create .nvmrc file')
  .action((arg, options) => {
    createNvmFile(options)
  })

program.parse()

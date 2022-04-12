#!/usr/bin/env node
const { program } = require('commander')

program.name('maniac').description('my description').version('0.0.1')

program
  .command('add')
  .description('add a package')
  .arguments('<packages>', 'packages to add')
  .action((arg, options, action) => {
    console.log('add packages', action.args)
    /*
    TODO:
        - find package name in config.json
        - handle required packages
            - store package name complete in order to not repeat its install
        - copy "files" with same path
            - create folders if not exists
            - create file if not exists
            -> if options -f (--force) : overwrite files
        - check if has storybook
            -> yes: copy "stories" with same path
            -> no: do nothing
    */
  })

program.parse()

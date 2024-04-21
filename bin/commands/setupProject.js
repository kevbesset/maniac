import chalk from 'chalk'
import fs from 'fs'
import prompts from 'prompts'
import ora from 'ora'
import path from 'path'
import handleFile from './libs/handleFile.js'
import createNvmFile from './createNvmFile.js'

async function setupProject(options) {
  try {
    console.info(`Setting up ${chalk.bold.cyan('maniac')} for this project...`)
    await setupSass(options)
    await checkNvm(options)

    console.info()
    console.info(`✨ Ready to go. Last steps:`)
    console.info(
      `- Don't forget to import ${chalk.bold.cyan('src/assets/main.scss')} in your project (in ${chalk.italic('src/main.ts')})`
    )
    console.info(`- Make sure ${chalk.bold.cyan('sass')} is installed in your devDependencies`)
    console.info()
    console.info(
      chalk.dim.italic(
        `🎉 You can add components using ${chalk.cyan('maniac add <component-name>')}`
      )
    )
  } catch (e) {
    console.error(e)
  }
}

async function setupSass(options) {
  try {
    const sassDir = 'sass'
    const sass = chalk.cyan.italic(`./src/${sassDir}`)
    const sassPath = path.resolve(options?.root || process.cwd(), 'src', sassDir)
    const logger = ora(`Checking to install sass project in ${sass}`).start()

    if (!options?.force && (await fs.existsSync(sassPath))) {
      logger.stop()
      const response = await prompts({
        type: 'confirm',
        name: 'value',
        initial: true,
        message: `${sass} directory already exists, do you want to overwrite it?`
      })

      if (!response.value) {
        logger.fail(`Creating ${sass} directory canceled`)
        return
      }
    }

    logger.start(`Copying ${sass} in your project...`)
    await handleFile(sassDir, { ...options, force: true })
    logger.succeed(`${sass} added to your project`)
  } catch (e) {
    console.error(e)
  }
}

async function checkNvm(options) {
  try {
    const nvmrcFile = chalk.bold.cyan('.nvmrc')
    const filePath = path.resolve(options?.root || process.cwd(), '.nvmrc')
    if (await fs.existsSync(filePath)) {
      return
    }

    const response = await prompts({
      type: 'confirm',
      name: 'value',
      initial: true,
      message: `We didn't find a ${nvmrcFile}, do you want we create one for you?`
    })

    if (response.value) {
      await createNvmFile(options)
    }
  } catch (e) {
    console.error(e)
  }
}

export default setupProject

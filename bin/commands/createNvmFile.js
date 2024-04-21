import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import prompts from 'prompts'
import ora from 'ora'

async function createNvmFile(options) {
  try {
    const nodeVersion = chalk.bold.cyan(process.version)
    const nvmrcFile = chalk.bold.cyan('.nvmrc')
    const root = options?.root || process.cwd()
    const filePath = path.resolve(root, '.nvmrc')
    const logger = ora(`Checking for a ${nvmrcFile} file`).start()

    logger.text = `Node ${nodeVersion} found. Creating ${nvmrcFile} file...`

    if (await fs.existsSync(filePath)) {
      logger.stop()
      const response = await prompts({
        type: 'confirm',
        name: 'value',
        initial: true,
        message: `${nvmrcFile} already exists, do you want to overwrite it?`
      })

      if (!response.value) {
        logger.fail(`Creation of ${nvmrcFile} canceled`)
        return
      }
    }

    logger.start(`Creating ${nvmrcFile} file with Node version ${nodeVersion}`)
    await fs.writeFileSync(filePath, process.version)
    logger.succeed(`${nvmrcFile} file created with Node ${nodeVersion}`)
  } catch (e) {
    console.error(e)
  }
}

export default createNvmFile

import chalk from 'chalk'
import ora from 'ora'
import handleFile from './libs/handleFile.js'
import packageList from '../config/packages.js'
const packagesInstalled = []

async function addPackage(packageName, options, requiredFrom) {
  try {
    const fileSkipped = []
    const fileCopied = []
    const name = chalk.bold.cyan(packageName)
    const logger = ora(
      `Adding ${name} ${requiredFrom ? `(required in ${requiredFrom}) ` : ''}to your project...`
    ).start()

    if (!packagesInstalled.includes(packageName)) {
      packagesInstalled.push(packageName)

      const pkg = packageList[packageName]
      if (pkg) {
        if (pkg?.required?.length) {
          logger.stop()
          for (const requiredPackageName of pkg.required) {
            await addPackage(requiredPackageName, options, name)
          }

          logger.start(`Continue adding ${name} to your project...`)
        }

        if (pkg?.files?.length) {
          logger.text = `Copying files for ${name} in your project...`
          for (const file of pkg.files) {
            const isFileCopied = await handleFile(file, options)
            if (isFileCopied) fileCopied.push(file)
            else fileSkipped.push(file)
          }
        }
        logger.succeed(successMessage(name, fileSkipped.length, fileCopied.length, requiredFrom))
      } else {
        logger.fail(`Package ${name} not found`)
      }
    } else {
      // Skip it because it has already been added in this command
      logger.stop()
    }
  } catch (e) {
    console.error(e)
  }
}

function successMessage(name, countSkip, countCopy, requiredFrom) {
  const messageList = [`${name} added to the project.`]

  if (countSkip) messageList.push(`${chalk.yellow(`${countSkip} skipped`)},`)
  if (countCopy) messageList.push(`${chalk.green(`${countCopy} copied`)},`)
  messageList.push(`${countCopy} of ${countCopy + countSkip} total`)
  if (requiredFrom) messageList.push(`(required in ${requiredFrom})`)

  return messageList.join(' ')
}

export default addPackage

const { execSync } = require('child_process')
const path = require('path')

function runStorybook() {
  const root = path.resolve(__dirname, '..')

  execSync(`cd ${root} && npm run storybook`, {
    stdio: 'inherit',
  })
}

module.exports = { runStorybook }

const ecosystem = require('./ecosystem')
const tools = require('./tools')
const ui = require('./ui')

module.exports = {
  ...ui,
  ...ecosystem,
  ...tools,
}

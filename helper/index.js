const axios = require('axios')

const { githubApi } = require('./helper')

const Github = githubApi(axios)

module.exports = { Github }

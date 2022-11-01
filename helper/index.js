const axios = require('axios')

const { githubApi } = require('./helper')

const GitHub = githubApi(axios)

module.exports = { GitHub }

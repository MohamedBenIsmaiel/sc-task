const axios = require('axios')

const { githubApi } = require('./helper')

const Github = githubApi(axios)

Github.fetchRepo('MohamedBenIsmaiel', 'sp-task').then(msg => console.log(msg)).catch(e => console.log(e))
module.exports = { Github }

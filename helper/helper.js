const { githubOption, githubApiUrl } = require('../config/config')

function githubApi (fetch) {
  return {
    async fetchUser (userName) {
      githubOption.path = `${githubOption.path}/${userName}`
      const res = await fetch.get(`${githubApiUrl}/${userName}`, githubOption)
      return res
    }
  }
}

module.exports = { githubApi }

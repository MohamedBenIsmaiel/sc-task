const { githubOption, githubApiUrl } = require('../config/app.config')

function githubApi (fetch) {
  return {
    async fetchUser (userName) {
      githubOption.path = `${githubOption.path}/${userName}`
      const res = await fetch.get(`${githubApiUrl}/${userName}`, githubOption)
      if (res.status !== 200) {
        throw new Error(' Some thing wrong happen ')
      }
      return res.data
    }
  }
}

module.exports = { githubApi }

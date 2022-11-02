const { githubOption, githubApiUrl } = require('../config/app.config')

function githubApi (fetch) {
  return {
    async fetchUser (userName) {
      const res = await fetch.get(`${githubApiUrl}/users/${userName}`, githubOption)
      if (res.status !== 200) {
        throw new Error(' Some thing wrong happen ')
      }
      return res.data
    },

    async fetchRepo (userName, repoName) {
      const res = await fetch.get(`${githubApiUrl}/repos/${userName}/${repoName}`, githubOption)
      if (res.status !== 200) {
        throw new Error(' Repo not found !. ')
      }
      return res.data
    }

  }
}

module.exports = { githubApi }

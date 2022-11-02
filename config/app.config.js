require('dotenv').config()

module.exports = {
  githubOption: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
    },
    OAUth: process.env.GITHUBOAUTH
  },
  githubApiUrl: 'https://api.github.com'
}

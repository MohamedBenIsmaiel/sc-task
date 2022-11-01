module.exports = {
  db: {
    development: {
      username: 'mismaiel',
      password: '1234',
      database: 'secondProfit',
      host: '127.0.0.1',
      dialect: 'postgres',
      port: '5434'
    },
    test: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: null,
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  },
  githubOption: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
    },
    OAUth: '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'
  },
  githubApiUrl: 'https://api.github.com/users'
}

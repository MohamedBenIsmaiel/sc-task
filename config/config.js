module.exports = {
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
}

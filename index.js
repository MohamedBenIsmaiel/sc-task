const { Sequelize } = require('sequelize')
const db = require('./models/index')

const sequelize = new Sequelize('postgres://mismaiel:1234@127.0.0.1:5434/secondProfit');

(async function test () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    const [user] = await db.User.findOrCreate({
      where: { userName: 'Mohamed' }
    })
    console.log('###### users ', user)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

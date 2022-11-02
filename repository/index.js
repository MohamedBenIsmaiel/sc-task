const { users } = require('./repo')
const db = require('../models/index')

const userRepo = users(db)

module.exports = {
  userRepo
}

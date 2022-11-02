const { users, repos } = require('./repo')
const db = require('../models/index')

const userRepo = users(db)
const repositoryRepo = repos(db)

module.exports = {
  userRepo,
  repositoryRepo
}

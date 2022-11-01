
function users (db) {
  return {
    async getUser (userName) {
      return db.User.findOne({
        where: { userName }
      })
    },

    async  createUser (user) {
      return db.User.create(user)
    }

  }
}

module.exports = {
  users
}

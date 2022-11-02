
function users (db) {
  return {
    async getUser (userName) {
      return db.User.findOne({
        where: { userName }
      })
    },

    async  createUser (user) {
      return db.User.create(user)
    },

    async listUsers () {
      return db.User.findAll()
    },

    async getUsersByLocation (location) {
      return db.User.findAll({
        where: {
          location
        }
      })
    }

  }
}

module.exports = {
  users
}

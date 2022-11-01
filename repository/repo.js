
function users (db) {
  return {
    async getUser (userName) {
      return db.User.findOne({
        where: { userName }
      })
    },

    async  createUser ({ userName, location, email, photo }) {
      return db.User.create({ userName, location, email, photo })
    }

  }
}

module.exports = {
  users
}

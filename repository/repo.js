
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
          location: { [db.Sequelize.Op.iLike]: `%${location}%` }
        }
      })
    },

    async getUserRepos (userName) {
      return db.User.findAll({
        where: {
          userName
        },
        include: {
          model: db.Repo
        }
      })
    },

    async getUsersByProgrammingLang (language) {
      return db.User.findAll({
        include: {
          model: db.Repo,
          where: {
            language: { [db.Sequelize.Op.iLike]: `%${language}%` }
          }
        }
      })
    }

  }
}

function repos (db) {
  return {
    async getRepo (repoName) {
      return db.Repo.findOne({
        where: { repoName }
      })
    },

    async  createRepo (repo) {
      return db.Repo.create(repo)
    },

    async listRepos () {
      return db.Repo.findAll()
    },

    async getReposByLanguage (language) {
      return db.Repo.findAll({
        where: {
          language: { [db.Sequelize.Op.iLike]: `%${language}%` }
        }
      })
    }

  }
}

module.exports = {
  users,
  repos
}

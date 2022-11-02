/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Repos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      repoName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fork: {
        type: Sequelize.BOOLEAN
      },
      url: {
        type: Sequelize.STRING
      },
      pushedAt: {
        type: Sequelize.STRING
      },
      watchersCount: {
        type: Sequelize.INTEGER
      },
      language: {
        type: Sequelize.STRING
      },
      hasDownloads: {
        type: Sequelize.BOOLEAN
      },
      archived: {
        type: Sequelize.BOOLEAN
      },
      license: {
        type: Sequelize.STRING
      },
      defaultBranch: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Repos')
  }
}

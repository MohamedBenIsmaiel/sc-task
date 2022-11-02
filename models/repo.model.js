const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Repo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Repo.belongsTo(models.User)
      Repo.hasMany(models.Commit, {
        foreignKey: 'repoId'
      })
    }
  }
  Repo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    repoName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fork: {
      type: DataTypes.BOOLEAN
    },
    url: {
      type: DataTypes.STRING
    },
    pushed_at: {
      type: DataTypes.STRING
    },
    watchersCount: {
      type: DataTypes.INTEGER
    },
    language: {
      type: DataTypes.STRING
    },
    hasDownloads: {
      type: DataTypes.BOOLEAN
    },
    archived: {
      type: DataTypes.BOOLEAN
    },
    license: {
      type: DataTypes.STRING
    },
    defaultBranch: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Repo',
    timestamps: true
  })
  return Repo
}

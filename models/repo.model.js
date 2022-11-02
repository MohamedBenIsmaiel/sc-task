const { Model } = require('sequelize')
const user = require('./user.model')

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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: 'id'
      }
    },
    repoName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Repo',
    timestamps: true
  })
  return Repo
}

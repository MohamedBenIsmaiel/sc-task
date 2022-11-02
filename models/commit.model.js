const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Commit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Commit.belongsTo(models.Repo)
    }
  }
  Commit.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    RepoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Repos',
        key: 'id'
      }
    },
    commit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    commitId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Commit',
    timestamps: true
  })
  return Commit
}

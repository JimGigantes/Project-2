// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define(
    "Movie",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      plot: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      watched: {
        type: DataTypes.BOOLEAN,
        defaultvalue: false
      }
    },
    {
      freezeTableName: true
    }
  );

  Movie.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Movie.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Movie;
};

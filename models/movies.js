// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    // The email cannot be null, and must be a proper email before creation
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Movie.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Movie.belongsTo(models.User, { foreignKey: "email" });
  };
  return Movie;
};

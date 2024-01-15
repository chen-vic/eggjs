module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    name: STRING,
    age: INTEGER,
  });

  return User;
};
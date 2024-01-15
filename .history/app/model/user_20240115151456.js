module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    phone: INTEGER,
  });

  return User;
};
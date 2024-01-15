module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    phone: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
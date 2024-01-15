/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1705057066809_9017';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '101.42.138.154',
    port: '3306',
    database: 'test',
    username: 'root',
    password: '123456',
    define: {
      timestamps: false, // 禁用时间戳
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

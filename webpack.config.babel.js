import Config, { environment } from 'webpack-config';

require('dotenv').config();

environment.setAll({
  env: () => process.env.NODE_ENV,
});

console.log(`NODE_ENV=${process.env.NODE_ENV}`);

export default new Config().extend('conf/webpack.[env].config.js');

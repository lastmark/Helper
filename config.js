// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  token: process.env.HELPER_TOKEN,
  clientId: process.env.HELPER_CLIENT_ID,
  devId: process.env.DEV_ID || "1303357369622990889",
  redisUrl: process.env.REDIS_URL || 'redis://default:IujhJsEZHqzRuIukNKiOGGfRsUlpmlcw@yamanote.proxy.rlwy.net:12260'
};

const dotenv = require('dotenv');
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expiresInSec: required('JWT_EXPIRES_SEC', 86400),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12)),
  },
  host: {
    port: required('HOST_PORT', 8080),
  },
};

module.exports = config;

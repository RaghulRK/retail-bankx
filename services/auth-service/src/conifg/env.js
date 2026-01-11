const path = require('path');
const dotenv = require('dotenv');

const NODE_ENV = process.env.NODE_ENV || 'local';
const envFile = `.env.${NODE_ENV}`;

dotenv.config({
    path: path.resolve(envFile)
});
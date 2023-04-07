const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL, NODE_ENV } = process.env;
if (!process.env.DB_URL) throw new Error('No Database URL!!!');

const options = {
    connectionString: DB_URL,
    ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};
const connection = new Pool(options);

module.exports = connection;

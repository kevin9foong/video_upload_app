const { Sequelize } = require('sequelize');
const fs = require('fs');

const DB_HOST = process.env.POSTGRES_DB_HOST || 'localhost';
const DB_PORT = process.env.POSTGRES_DB_PORT || '5432';
const DB_NAME = process.env.POSTGRES_DB_NAME || 'postgres';
const DB_USER_NAME = process.env.POSTGRES_USER_NAME || 'postgres';
const DB_USER_PASSWORD_FILE = process.env.POSTGRES_USER_PASSWORD_FILE || null;
const DB_USER_PASSWORD = DB_USER_PASSWORD_FILE ? fs.readFileSync(DB_USER_PASSWORD_FILE, 'utf8').trim() : "postgres";

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER_NAME,
    DB_USER_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres',
    }
);

export default sequelize
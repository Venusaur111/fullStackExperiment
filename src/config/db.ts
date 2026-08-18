import pkg from 'pg';
import dotenv from 'dotenv';
import * as process from "node:process";

dotenv.config();

export const { Pool } = pkg;

export const dbPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 36000,
})

db.on('connect', () => {
    console.log('Successfully connected to the database');
})
db.on('error', err => {
    console.error(err.stack);
});
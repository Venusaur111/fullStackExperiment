import pg from 'pg';
import dotenv from 'dotenv';
import * as process from "node:process";

dotenv.config();

const { Pool } = pg;

export const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 36000,
})

pool.on('connect', () => {
    console.log('Successfully connected to the database');
})
pool.on('error', err => {
    console.error(err.stack);
})
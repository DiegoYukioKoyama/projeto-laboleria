import { db } from "../database/database.connection.js";

export async function createClientDB(name, address, phone){

    const result = await db.query(`INSERT INTO clients (name,address,phone) VALUES ($1,$2,$3);`, [name, address, phone]);
}

export async function getClientOrdersDB(id){

    const result = await db.query(`SELECT * FROM orders WHERE clientId = $1;`, [id]);
    return result;
}
import { db } from "../database/database.connection.js";

export async function createCakeDB(name, price, image, description){
    const result = await db.query(`INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4);`, [name, price, image, description]);
}

export async function checkCakeNameDB(name){
    const result = await db.query(`SELECT * FROM cakes where name = $1;`, [name]);
    return result;
}
import { db } from "../database/database.connection.js";

export async function getAllOrdersDB() {

    const result = await db.query(`SELECT * FROM orders`);
    return result;
}

export async function getOrderByDateDB(date) {

    const result = await db.query(`SELECT clients.id,
	clients.name,
	clients.address,
	clients.phone,
	cakes.id,
	cakes.name,
	cakes.price,
	cakes.description,
	cakes.image,
	orders.id,
	orders."createdAt",
	orders.quantity,
	orders."totalPrice"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
    WHERE orders."createdAt" = $1;`, [date]);
    
    return result;
}

export async function getOrderByIdDB(orderId) {

    const result = await db.query(`SELECT clients.id,
	clients.name,
	clients.address,
	clients.phone,
	cakes.id,
	cakes.name,
	cakes.price,
	cakes.description,
	cakes.image,
	orders.id,
	orders."createdAt",
	orders.quantity,
	orders."totalPrice"
    FROM orders 
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
	WHERE orders.id = $1;`, [orderId]);
    
    return result;
}

export async function createNewOrderDB(body) {

    const {clientId, cakeId, quantity, totalPrice} = body;

    const result = await db.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
    VALUES ($1, $2, $3, $4);`, [clientId, cakeId, quantity, totalPrice]);

    return result;
}

export async function checkClientId(clientId){

	const result = await db.query(`SELECT * FROM clients WHERE id = $1;`, [clientId]);

	return result;
}

export async function checkCakeId(cakeId){

	const result = await db.query(`SELECT * FROM cakes WHERE id = $1;`, [cakeId]);

	return result;
}
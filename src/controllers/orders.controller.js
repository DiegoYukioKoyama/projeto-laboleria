import { checkClientId, createNewOrderDB, getAllOrdersDB, getOrderByDateDB, getOrderByIdDB } from "../repositories/orders.repository.js";

export async function getAllOrders(req, res) {
    
    const {date} = req.body;

    try {
        if(date != null){
            const orders = await getOrderByDateDB(date);
            res.status(200).send(orders.rows);
        } else {
            const orders = await getAllOrdersDB();
            res.status(200).send(orders.rows);
        }
    } catch (err) {
        if(Array.isArray(err)){
            res.status(404).send(`não há nenhuma ordem`);
        } else {
            res.status(500).send(err.message)
        }
    }
} 

export async function getOrderById(req, res){
    
    const {id} = req.params;

    try {
        const order = await getOrderByIdDB(id);

        if (order.rowCount === 0){
            return res.status(404).send("pedido não encontrado!" );
        }

        res.status(200).send(order.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function createNewOrder(req, res){
    
    const {clienteId, cakeId, quantity, totalPrice} = req.body;

    try {
        const clientIdExist = await checkClientId(clienteId);
        if(!clientIdExist){
            return res.status(404).send("Cliente não encontrado!");
        }

        const cakeIdExist = await checkClientId(cakeId);
        if(!cakeIdExist){
            return res.status(404).send("Bolo não encontrado!");
        }

        if(quantity <= 0 || quantity >= 5){
            return res.status(400).send("Quantidade deve ser entre 1 e 5!");
        }
        
        const newOrder = await createNewOrderDB(clienteId, cakeId, quantity, totalPrice);

        res.status(201).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
}
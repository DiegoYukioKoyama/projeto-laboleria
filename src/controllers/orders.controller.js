import { getAllOrdersDB, getOrderByDateDB } from "../repositories/orders.repository.js";

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

export async function teste(req, res){
    try {
        res.status(200).send("ok")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
import client from "pg/lib/native/client.js";
import { createClientDB, getClientOrdersDB } from "../repositories/clients.repository.js";

export async function createClient(req, res){

    const {name, address, phone} = req.body;

    try {

        if(name.length === 0){
            return res.status(400).send("Por favor preencha o nome!");
        }

        if(address.length === 0){
            return res.status(400).send("Por favor preencha o endereço!");
        }

        if(phone.lenght <= 10 || phone.lenght >= 11){
            return res.status(400).send("O tefone dever ter entre 11 e 12 digitos!");
        }

        const newClient = createClientDB(name, address, phone);
        res.status(201).send();

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getClientOrders(req, res){

    const {id} = req.params;

    try {
        if(!id){
            return res.status(404).send("O id do cliente não existe!");
        }

        const clientOrder = await getClientOrdersDB(id);
        res.status(200).send(clientOrder.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }

}
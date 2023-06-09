import { checkCakeNameDB, createCakeDB } from "../repositories/cakes.repository.js";

export async function createCake(req, res){

    const {name, price, image, description} = req.body;

    try {
        const cakeExist = await checkCakeNameDB(name);
        if(cakeExist){
            return res.status(409).send("Esse Bolo já existe!");
        }
        if(name.length < 2){
            return res.status(400).send("O nome do bolo dever ter pelo menos 2 caracteres!");
        }

        if(price.length < 1){
            return res.status(400).send("O preço deve ser maior que 0");
        }

        const cake = await createCakeDB(name, price, image, description);
        res.status(201).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
}
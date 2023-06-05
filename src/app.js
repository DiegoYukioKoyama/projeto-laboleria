import express from "express";
import cors from "cors";

const app = express();

//configs
app.use(cors());
app.use(express.json);

//Endpoints



const PORT = 5000;
app.listen(PORT, () => console.log(`Rodando servidor na porta ${PORT}`));
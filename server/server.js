import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import { connectDB } from "./src/config/db.js";
import { initModels } from "./src/models/index.js";
import serverRoute from "./src/routes/server.route.js";
import bookRoute from "./src/routes/book.route.js";


const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));

// esperar conexão com o banco
const sequelize = await connectDB()

// inicializa os models
const models = initModels(sequelize);

app.locals.models = models;

app.use(serverRoute);
app.use(bookRoute);

app.listen(PORT, () => {
    console.log(`Servidor ${process.env.PROJECT_NAME} rodando em http://localhost:${PORT}/api/`);
});

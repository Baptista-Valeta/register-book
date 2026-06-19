import Sequelize from "sequelize";
import { DataTypes } from "sequelize";

import { config } from "./config.js";
import { books } from "../models/book.model.js";

export const connectDB = async () => {
    try {
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            {
                dialect: "mysql"
            }
        );

        books(sequelize, DataTypes);

        await sequelize.authenticate()           
        console.log("Database conectado com sucesso");


        return sequelize;
    }catch (err) {
        console.error({erro: err.message})
    }
} 
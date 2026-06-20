import Sequelize from "sequelize";

import { conf } from "./config.js";

let sequelize = null;

export const connectDB = async () => {
    if(!sequelize) {
        sequelize = new Sequelize(
            conf().database,
            conf().username,
            conf().password,
            {
                dialect: conf().dialect || "mysql"
            }
        );    
        
        try {
            sequelize.authenticate();
            console.log("Database conectado com sucesso", sequelize.config.database);

            return sequelize;
        }catch (err) {
            console.error("Erro ao conectar com o banco:", err.message);
        };
    };

    return sequelize;
};
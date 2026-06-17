import mongoose from "mongoose";

const dbUri = "mongodb://127.0.0.1:27017/books";

const connectDb = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log("DB conectado com sucesso");
    }catch (err) {
        console.error("Erro ao conectar com o banco mongoDB: ", err.message);
        process.exit(1);
    };
};

export default connectDb;
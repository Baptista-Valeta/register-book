import express from 'express';
import connectDb from './db.js';


connectDb();

const app = express();

app.get("/", (req, res) => {
    res.send("REGISTER BOOK INIT")
})

app.listen(3200, () => {
    console.log("Servidor rodando na porta ", 3200);
});

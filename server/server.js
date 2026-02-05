const express = require('express');

const app = express();


const connectDb = require('./db.js');


connectDb()
    .then(data => {
        console.log('DB conectada com sucesso')
        app.listen(3200, () => {
            console.log('servidor iniciado na porta 3200');
        }).on('error', err => 
            console.log('falha ao iniciar o servidor: ', err))
    })
    .catch(err => console.log('Erro ao conectar a DB', err));
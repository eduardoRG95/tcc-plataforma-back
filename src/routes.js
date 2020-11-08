const express = require('express');
const cors = require('cors');

const produtoController = require('./controllers/Produto.controller')

const routes = express.Router();

routes.use(cors());


routes.get('/Produto', produtoController.index);
routes.delete('/Produto/:id', produtoController.delete);


module.exports = routes;

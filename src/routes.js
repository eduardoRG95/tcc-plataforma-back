const express = require('express');
const cors = require('cors');

const produtoController = require('./controllers/Produto.controller')
const carrinhoController = require('./controllers/Carrinho.controller')

const routes = express.Router();

routes.use(cors());



routes.get('/Produto', produtoController.index);
routes.get('/Carrinho/:id', carrinhoController.GetProductsCart);
routes.get('/Produto/:name', produtoController.search);


module.exports = routes;

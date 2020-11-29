const connection = require('../database/connection');
//const crypto = require('crypto');

module.exports = {

    async GetProductsCart(request, response) {
        const { id } = request.params;
        const produtos = await connection('Produtos').where('id', id).select('*');
        return response.json(produtos)
    },

}
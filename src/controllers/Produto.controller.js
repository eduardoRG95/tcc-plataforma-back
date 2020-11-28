const connection = require('../database/connection');
//const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const produtos = await connection('Produtos').select('*');
        console.log(produtos)
        return response.json(produtos)
    },

    async search(request, response) {
        const { name } = request.params;
        const produtos = await connection('Produtos').where('nome', name).select('*');
        return response.json(produtos)
    },
}
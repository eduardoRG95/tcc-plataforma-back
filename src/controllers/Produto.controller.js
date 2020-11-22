const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const produtos = await connection('Produtos').select('*');
        return response.json(produtos)
    },

    async search(request, response) {
        const { name } = request.params;
        const produtos = await connection('Produtos').where('nome', name).select('*');
        return response.json(produtos)
    },


    async delete(request, response) {
        const { id } = request.params;
        await connection('Produtos').where('id', id).del();
        return response.json({ id });
    },  

}
const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {
    async index (req, res) {

        const receitas = await connection('receitas').select(' * ');
        
        return res.json(receitas);
    },

    async create(req, res) {

        const {autor, email, receitaNome, ingredientes, preparo, tempo, rendimento} = req.body;
        const receitaId =  crypto.randomBytes(2).toString('HEX');
        await connection('receitas').insert({
            receitaId,
            autor,
            email,
            receitaNome,
            ingredientes,
            preparo,
            tempo,
            rendimento
        })

        return res.json({receitaId, autor, receitaNome})
    }
}
const connection = require('../database/connection');


module.exports = {
    async index (req, res) {

        const receitas = await connection('receitas').select(' * ');
        
        return res.json(receitas);
    },

    async create(req, res) {

        const {receitaId, autor, email, receitaNome, ingredientes, preparo, tempo, rendimento} = req.body;
        await connection('receitas').insert({
            autor,
            email,
            receitaNome,
            ingredientes,
            preparo,
            tempo,
            rendimento
        })

        return res.json({autor, receitaNome, receitaId})
    },
    
    async update(req,res) {

        const {receitaNome, ingredientes, preparo, tempo, rendimento} =  req.body
        const {receitaId} = req.params

        await connection('receitas').update({
            receitaNome,
            ingredientes,
            preparo,
            tempo,
            rendimento
        }).where({receitaId})

        return res.json({receitaId, receitaNome, ingredientes, preparo, tempo, rendimento})
    },

    async delete (req, res) {
        
        const {autor, email, receitaNome, ingredientes, preparo, tempo, rendimento} = req.body;
        const { receitaId } = req.params;

        await connection('receitas').delete({
            autor,
            email,
            receitaNome,
            ingredientes,
            preparo,
            tempo,
            rendimento
        }).where({receitaId})

        return res.json(`Receita de id ${receitaId} foi deletada`);
    }
}
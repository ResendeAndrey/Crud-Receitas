const express = require('express');

const receitaController = require('./controllers/receitaController.js');


const routes = express.Router()

routes.get('/receitas', receitaController.index);
routes.post('/receitas', receitaController.create);

module.exports = routes
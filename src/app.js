const express = require('express');
const VeiculoRepository = require('./repositories/VeiculoRepository');
const EstacionamentoService = require('./services/EstacionamentoService');
const VeiculoController = require('./controllers/VeiculoController');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const repo = new VeiculoRepository();
const service = new EstacionamentoService(repo);
const controller = new VeiculoController(service);

app.get('/veiculos', (req, res) => controller.index(req, res));
app.post('/veiculos', (req, res) => controller.store(req, res));
app.delete('/veiculos/:vaga', (req, res) => controller.release(req, res));

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
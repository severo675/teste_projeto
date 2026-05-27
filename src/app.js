const express = require('express'); //IMPORTA O FRAMEWORK
const VeiculoRepository = require('./repositories/VeiculoRepository'); //IMPORTA AS CLASSES
const EstacionamentoService = require('./services/EstacionamentoService');
const VeiculoController = require('./controllers/VeiculoController');

const app = express(); //CRIAÇÃO DA ESTÂNCIA
app.use(express.json());
app.use(express.static('public'));

const repo = new VeiculoRepository(); //CRIA A BASE DE DADOS
const service = new EstacionamentoService(repo); //CRIA A REGRA DE NEGOCIO
const controller = new VeiculoController(service); //CRIA O CONTROLLER

app.get('/veiculos', (req, res) => controller.index(req, res)); //VINCULA O GET AO CONTROLLER
app.post('/veiculos', (req, res) => controller.store(req, res)); //VINCULA O POST, ENTRADA DE VEICULOS
app.delete('/veiculos/:vaga', (req, res) => controller.release(req, res));

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));//SERVIDOR DE REDE
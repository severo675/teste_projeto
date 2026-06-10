const express = require('express'); //importa
const VeiculoRepository = require('./repositories/VeiculoRepository'); //classes
const EstacionamentoService = require('./services/EstacionamentoService'); //classes
const VeiculoController = require('./controllers/VeiculoController'); //classes

const app = express(); //c estancia
app.use(express.json()); //estancia
app.use(express.static('public')); //estancia

const repo = new VeiculoRepository(); //c base dos dados
const service = new EstacionamentoService(repo); //c regra de negocio
const controller = new VeiculoController(service); //controller

app.get('/veiculos', (req, res) => controller.index(req, res)); // get vincula com controller, listação de veiculos
app.post('/veiculos', (req, res) => controller.store(req, res)); //post vincula com controller, entrada de veiculos
app.delete('/veiculos/:vaga', (req, res) => controller.release(req, res)); // delete vincula com controller, saida de veiculos

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
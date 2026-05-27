class VeiculoController {
    constructor(service) {  //RECEBE O SERVIÇO
        this.service = service;
    }

    async index(req, res) {
        const veiculos = await this.service.listarTodos();
        res.json(veiculos); //LISTA DE VEICULOS
    }

    async store(req, res) {
        try {
            const veiculo = await this.service.registrarEntrada(req.body);
            res.status(201).json(veiculo);//RETORNA AO VEICULO CRIADO
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async release(req, res) {
        try {
            const { vaga } = req.params;
            await this.service.registrarSaida(vaga);//LIBERAÇÃO DE VAGA
            res.json({ mensagem: "Vaga liberada!" });
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}
module.exports = VeiculoController;
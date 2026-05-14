class VeiculoController {
    constructor(service) {
        this.service = service;
    }

    async index(req, res) {
        const veiculos = await this.service.listarTodos();
        res.json(veiculos);
    }

    async store(req, res) {
        try {
            const veiculo = await this.service.registrarEntrada(req.body);
            res.status(201).json(veiculo);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async release(req, res) {
        try {
            const { vaga } = req.params;
            await this.service.registrarSaida(vaga);
            res.json({ mensagem: "Vaga liberada!" });
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}
module.exports = VeiculoController;
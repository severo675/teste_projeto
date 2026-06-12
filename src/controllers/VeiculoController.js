class VeiculoController {
    constructor(service) {
        this.service = service; // recebe serviço
    }

    async index(req, res) {
        const veiculos = await this.service.listarTodos();
        res.json(veiculos); // listação de veiculos
    }

    async store(req, res) {
        try {
            const { vaga, placa, nome, cpf, localidade } = req.body;
            
            const veiculo = await this.service.registrarEntrada(req.body);
            res.status(201).json(veiculo); // retorna para o veiculo criado
        } catch (error) {
            res.status(400).json({ erro: error.mensagem });
        }
    }

    async release(req, res) {
        try {
            const { vaga } = req.params;
            await this.service.registrarSaida(vaga); // liberar vaga
                res.json({ mensagem: "Vaga liberada!" });            
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}
module.exports = VeiculoController;
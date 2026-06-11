const VeiculoRepository = require('../repositories/VeiculoRepository');

class EstacionamentoService {
    constructor(repository) {
        this.repository = new VeiculoRepository; // banco
    }

    async listarTodos() {
        return await this.repository.findAll();
    }

    async registrarEntrada(dados) {
        const vaga = parseInt(dados.vaga);
        if (vaga < 1 || vaga > 9) throw new Error ("Vaga inexistente (escolha entre as vagas 1 e 9)!"); // total de vagas
        
        const ocupada = await this.repository.findByVaga(vaga);
        if (ocupada) throw new Error(`Vaga ${vaga} já ocupada!`); // não repetição de vagas

        return await this.repository.create(dados);
    }

    async registrarSaida(vaga) {
        const deletado = await this.repository.deleteByVaga(vaga);
        if (!deletado) throw new Error ("Vaga já está vazia!"); // saida

        return true;
    }
}
module.exports = EstacionamentoService;
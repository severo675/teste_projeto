class EstacionamentoService {
    constructor(repository) {
        this.repository = repository; //RECEBE O BANCO
    }

    async listarTodos() {
        return await this.repository.findAll();
    }

    async registrarEntrada(dados) {
        const vaga = parseInt(dados.vaga);
        if (vaga < 1 || vaga > 9) throw new Error("Vaga inexistente (use 1 a 9)!"); //LIMITAÇÃO DE VAGAS

        const ocupada = await this.repository.findByVaga(vaga);
        if (ocupada) throw new Error(`Vaga ${vaga} já ocupada!`); //PARA NÃO REPETIR VAGAS

        return await this.repository.create(dados);
    }

    async registrarSaida(vaga) {
        const deletado = await this.repository.deleteByVaga(vaga);
        if (!deletado) throw new Error("Vaga já está vazia!"); //CONSTAR SAIDA
        return true;
    }
}
module.exports = EstacionamentoService;
class VeiculoRepository {
    constructor() {
        this.bancoFalso = [];
    }

    async findAll() {
        return this.bancoFalso;
    }

    async findByVaga(vaga) {
        return this.bancoFalso.find(v => v.vaga === parseInt(vaga));
    }

    async create(dados) {
        const novo = { id: this.bancoFalso.length + 1, ...dados, vaga: parseInt(dados.vaga) };
        this.bancoFalso.push(novo);
        return novo;
    }

    async deleteByVaga(vaga) {
        const index = this.bancoFalso.findIndex(v => v.vaga === parseInt(vaga));
        if (index !== -1) {
            this.bancoFalso.splice(index, 1);
            return true;
        }
        return false;
    }
}
module.exports = VeiculoRepository;
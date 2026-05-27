const { createClient } = require('@supabase/supabase-js');

// 1. INSIRA AQUI AS SUAS CREDENCIAIS DO PAINEL DO SUPABASE
const SUPABASE_URL = 'https://hemnhvcgtdqixoinjtki.supabase.co';
const SUPABASE_KEY = 'sb_publishable_PaZHs5N8f5KNu_1n9MLQVg_2c-hiXSk';

class VeiculoRepository {
    constructor() {
        // Conecta diretamente com o cliente do Supabase na nuvem
        this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    }

    // BUSCA TODOS: Faz um SELECT em toda a tabela 'veiculos'
    async findAll() {
        const { data, error } = await this.supabase
            .from('veiculos')
            .select('*');
        
        if (error) throw new Error(error.message);
        return data; // Retorna a lista de veículos vinda da nuvem
    }

    // BUSCA POR VAGA: Procura na tabela o veículo que tem a vaga igual à enviada
    async findByVaga(vaga) {
        const { data, error } = await this.supabase
            .from('veiculos')
            .select('*')
            .eq('vaga', parseInt(vaga))
            .single(); // Traz apenas um registro

        // O erro 'PGRST116' significa que a vaga está vazia (isso é normal no Supabase)
        if (error && error.code !== 'PGRST116') throw new Error(error.message); 
        return data || null; // Se não achar nada, retorna null (vaga livre)
    }

    // CRIAR (ENTRADA/RESERVA): Faz um INSERT com os dados do carro e da vaga
    async create(dados) {
        const { data, error } = await this.supabase
            .from('veiculos')
            .insert([{ 
                modelo: dados.modelo, 
                placa: dados.placa, 
                vaga: parseInt(dados.vaga) 
            }])
            .select()
            .single();

        if (error) throw new Error(error.message);
        return data; // Retorna o carro que acabou de ser salvo
    }

    // DELETAR (SAÍDA): Faz um DELETE buscando pelo número da vaga
    async deleteByVaga(vaga) {
        const { data, error } = await this.supabase
            .from('veiculos')
            .delete()
            .eq('vaga', parseInt(vaga))
            .select();

        if (error) throw new Error(error.message);
        return data.length > 0; // Retorna true se encontrou e deletou o carro
    }
}

module.exports = VeiculoRepository;
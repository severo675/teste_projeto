const { createClient } = require('@supabase/supabase-js');

// 1. INSIRA AQUI AS SUAS CREDENCIAIS DO PAINEL DO SUPABASE
const SUPABASE_URL = 'https://hemnhvcgtdqixoinjtki.supabase.co';
const SUPABASE_KEY = 'sb_publishable_PaZHs5N8f5KNu_1n9MLQVg_2c-hiXSk';

class VeiculoRepository {
    constructor() {
        this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    }

    async findAll() {
        const { data, error } = await this.supabase
            .from('veiculos')
            .select('*');
        
        if (error) throw new Error(error.message);
        return data; 
    }

    async findByVaga(vaga) {
        const { data, error } = await this.supabase
            .from('veiculos')
            .select('*')
            .eq('vaga', parseInt(vaga))
            .single(); 

        if (error && error.code !== 'PGRST116') throw new Error(error.message); 
        return data || null; 
    }

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
        return data; 
    }

    async deleteByVaga(vaga) {
        const { data, error } = await this.supabase
            .from('veiculos')
            .delete()
            .eq('vaga', parseInt(vaga))
            .select();

        if (error) throw new Error(error.message);
        return data.length > 0; 
    }
}

module.exports = VeiculoRepository;
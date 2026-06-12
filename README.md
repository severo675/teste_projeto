# Deca Vagas

Sistema de gerenciamento de vagas de estacionamento desenvolvido em Node.js e JavaScript.

## Sobre o Projeto

O Deca Vagas permite controlar vagas de estacionamento de forma simples e visual.

### Funcionalidades

- Cadastro de usuário
- Validação de CPF
- Formatação automática de telefone
- Seleção de localidade
- Escolha entre:
  - Instituição
  - Estacionamento
- Listagem dinâmica de instituições e estacionamentos conforme a localidade escolhida
- Controle visual de vagas
- Cadastro de veículos por vaga
- Liberação de vagas ocupadas

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

---

## Estrutura do Projeto

```text
deca-vagas/
│
├── public/
│   ├── index.html
│   └── cadastro.html
│
├── src/
│   ├── controllers/
│   ├── repositories/
│   ├── services/
│   └── app.js
│
├── package.json
└── README.md
```

---

## ▶ Como Executar o Projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar o servidor

No terminal execute:

```bash
node src/app.js
```

Você verá a mensagem:

```text
Servidor rodando em http://localhost:3000
```

### 3. Abrir a tela de cadastro

Acesse:

```text
http://localhost:3000/cadastro.html
```

### 4. Fluxo de utilização

1. Preencha os dados do cadastro.
2. Escolha entre Instituição ou Estacionamento.
3. Selecione a localidade desejada.
4. Escolha a instituição ou estacionamento disponível.
5. Clique em **Salvar Cadastro**.
6. O sistema redirecionará automaticamente para a tela principal do estacionamento.

---

## Tela Principal

Após o cadastro, o usuário é direcionado para a página principal do sistema, onde é possível:

- Visualizar vagas livres e ocupadas
- Selecionar vagas
- Cadastrar veículos
- Liberar vagas ocupadas

---

Ficaram algumas pendências, como a questão do valor que deveria ser cobrado conforme fosse selecionado o local que o cliente estacionaria, a parte do cadastro foi muito complexa e acabou ocupando muito, sendo assim, fica como melhorias futuras, assim que escolher a localidade e o tempo que ficará estacionado, será cobrado um valor fixo.

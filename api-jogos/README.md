# API REST - Loja de Jogos

## Descrição

Este projeto consiste no desenvolvimento de uma API REST simples para uma loja de jogos, utilizando Node.js e o framework Express. O objetivo principal foi compreender a comunicação entre front-end e back-end, além de aplicar conceitos fundamentais de desenvolvimento web.

A aplicação permite a listagem de jogos por meio de uma API, e esses dados são consumidos por uma interface web desenvolvida com HTML, CSS e JavaScript.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js para execução do JavaScript no servidor
- Express para criação das rotas da API
- HTML5 para estrutura da interface
- CSS3 para estilização
- JavaScript com Fetch API para comunicação com o servidor

---

## Funcionamento do Sistema

O servidor foi configurado para rodar na porta 3000 e possui rotas responsáveis por fornecer dados em formato JSON. A principal rota da aplicação retorna uma lista de jogos previamente definida em memória, simulando um banco de dados simples.

Além disso, foi implementada uma rota de teste para verificar se o servidor está funcionando corretamente.

No front-end, a interface foi construída de forma simples e moderna, contendo um botão que, ao ser clicado, realiza uma requisição para a API utilizando Fetch. Os dados recebidos são então exibidos dinamicamente na tela em formato de cards.

---

## Interface

A interface foi desenvolvida com foco em simplicidade e organização visual, utilizando:

- Layout com cores suaves
- Estrutura em cards para exibição dos jogos
- Botão interativo para carregar os dados
- Efeitos visuais básicos (hover)

---

## Endpoints da API

A API possui duas rotas principais:

- **GET /games** → retorna a lista de jogos
- **GET /teste** → verifica se o servidor está ativo

---

## Conceitos Aplicados

Durante o desenvolvimento, foram aplicados conceitos importantes como:

- Criação de APIs REST
- Uso de rotas com Express
- Comunicação cliente-servidor
- Manipulação de DOM
- Consumo de API com Fetch

---

## Conclusão

Este projeto serviu como base para o entendimento de como funciona uma aplicação web completa, integrando front-end e back-end. A partir dele, é possível evoluir para sistemas mais complexos, adicionando banco de dados, autenticação de usuários e operações completas de CRUD.

---

## Autor

Desenvolvido por **Angelo Dos Santos**
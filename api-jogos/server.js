// Importação
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static('public'));

// "Banco de dados" em memória
let games = [
  { id: 1, titulo: 'GTA V', descricao: 'Jogo de ação' },
  { id: 2, titulo: 'Minecraft', descricao: 'Jogo sandbox' }
];

// ROTAS

// GET - listar todos
app.get('/games', (req, res) => {
  res.status(200).json(games);
});

// POST - criar jogo
app.post('/games', (req, res) => {
  const { titulo, descricao } = req.body;

  // Validação
  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ error: 'Título é obrigatório' });
  }

  const novoJogo = {
    id: Date.now(), // ID único simples
    titulo: titulo.trim(),
    descricao: descricao ? descricao.trim() : ''
  };

  games.push(novoJogo);

  res.status(201).json(novoJogo);
});

// DELETE - deletar por ID
app.delete('/games/:id', (req, res) => {
  const id = Number(req.params.id);

  const existe = games.some(g => g.id === id);

  if (!existe) {
    return res.status(404).json({ error: 'Jogo não encontrado' });
  }

  games = games.filter(g => g.id !== id);

  res.status(200).json({ message: 'Jogo deletado com sucesso' });
});

// DELETE - limpar tudo
app.delete('/games', (req, res) => {
  games = [];
  res.status(200).json({ message: 'Lista limpa com sucesso' });
});

// START
app.listen(3000, () => {
  console.log(' Servidor rodando em http://localhost:3000');
});
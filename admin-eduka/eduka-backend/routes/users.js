// backend/routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para listar todos os usuários
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
    res.json(results);
  });
});

// DELETE - deletar usuário por ID
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao deletar usuário' });
    res.json({ message: 'Usuário deletado com sucesso' });
  });
});

// PUT - editar usuário
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, pontos, horas_estudo } = req.body;

  db.query(
    'UPDATE users SET name = ?, email = ?, pontos = ?, horas_estudo = ? WHERE id = ?',
    [name, email, pontos, horas_estudo, userId],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Erro ao atualizar usuário' });
      res.json({ message: 'Usuário atualizado com sucesso' });
    }
  );
});

// Total geral
router.get('/total', (req, res) => {
  db.query('SELECT COUNT(*) AS total FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao contar usuários' });
    res.json({ total: results[0].total });
  });
});

// Total por dia
router.get('/total/day/:date', (req, res) => {
  const { date } = req.params;
  db.query(
    'SELECT COUNT(*) AS total FROM users WHERE DATE(data_cadastro) = ?',
    [date],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro ao contar usuários por dia' });
      res.json({ total: results[0].total });
    }
  );
});

// Total por mês
router.get('/total/month/:month', (req, res) => {
  const { month } = req.params; // formato YYYY-MM
  db.query(
    'SELECT COUNT(*) AS total FROM users WHERE DATE_FORMAT(data_cadastro, "%Y-%m") = ?',
    [month],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro ao contar usuários por mês' });
      res.json({ total: results[0].total });
    }
  );
});


module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../db');


// ------------------ USUÁRIOS ------------------

// Listar todos os usuários
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
    res.json(results);
  });
});

// Deletar usuário
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao deletar usuário' });
    res.json({ message: 'Usuário deletado com sucesso' });
  });
});

// Atualizar usuário
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, pontos, horas_estudo } = req.body;

  db.query(
    'UPDATE users SET name = ?, email = ?, pontos = ?, horas_estudo = ? WHERE id = ?',
    [name, email, pontos, horas_estudo, userId],
    (err) => {
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


// ------------------ VÍDEO-AULAS ------------------

// Adicionar vídeo-aula
router.post('/videoaula', (req, res) => {
  const { titulo_videoaula, url_videoaula, duracao_videoaula, id_topico } = req.body;

  if (!titulo_videoaula || !url_videoaula || !id_topico) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
  }

  const sql = `INSERT INTO VideoAula (titulo_videoaula, url_videoaula, duracao_videoaula, id_topico) VALUES (?, ?, ?, ?)`;

  db.query(sql, [titulo_videoaula, url_videoaula, duracao_videoaula, id_topico], (err, result) => {
    if (err) {
      console.error('Erro ao adicionar vídeo-aula:', err);
      return res.status(500).json({ error: 'Erro ao adicionar vídeo-aula.' });
    }
    res.status(201).json({ message: 'Vídeo-aula adicionada com sucesso.' });
  });
});


// Listar vídeo-aulas
router.get('/videoaulas', (req, res) => {
  db.query('SELECT * FROM VideoAula', (err, results) => {
    if (err) {
      console.error('Erro ao listar vídeo-aulas:', err);
      return res.status(500).json({ error: 'Erro ao listar vídeo-aulas.' });
    }
    res.json(results);
  });
});


// ------------------ PDF ------------------


router.get('/pdfs', (req, res) => {
  db.query('SELECT * FROM PDF', (err, results) => {
    if (err) {
      console.error('Erro ao listar PDFs:', err);
      return res.status(500).json({ error: 'Erro ao listar PDFs.' });
    }
    res.json(results);
  });
});

// Adicionar PDF
router.post('/pdf', (req, res) => {
  const { titulo_pdf, url_pdf, num_paginas_pdf, id_topico } = req.body;

  if (!titulo_pdf || !url_pdf || !id_topico) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
  }

  const sql = `INSERT INTO PDF (titulo_pdf, url_pdf, num_paginas_pdf, id_topico) VALUES (?, ?, ?, ?)`;

  db.query(sql, [titulo_pdf, url_pdf, num_paginas_pdf, id_topico], (err, result) => {
    if (err) {
      console.error('Erro ao adicionar PDF:', err);
      return res.status(500).json({ error: 'Erro ao adicionar PDF.' });
    }
    res.status(201).json({ message: 'PDF adicionado com sucesso.' });
  });
});

router.get('/disciplinas', (req, res) => {
  db.query('SELECT * FROM Disciplina', (err, results) => {
    if (err) {
      console.error('Erro ao listar Disciplina:', err);
      return res.status(500).json({ error: 'Erro ao listar Disciplina' });
    }
    res.json(results);
  });
});


module.exports = router;

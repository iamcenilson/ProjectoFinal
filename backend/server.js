const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");


const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eduka",
});


db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("tá conectado");
});

// Registro
app.post("/api/register", (req, res) => {
  console.log("Recebendo registro:", req.body); 
  const { name, email, password } = req.body;

  // Verificação dos campo sabão
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Preencha todos campos multimediano" });
  }

  // Verifica o email sabão
  const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error("Erro ao verificar email:", err);
      return res.status(500).json({ message: "Erro no servidor." });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "Email já está em uso." });
    }


    const insertUserQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(insertUserQuery, [name, email, password], (err) => {
      if (err) {
        console.error("Erro ao registrar usuário:", err);
        return res.status(500).json({ message: "Erro no servidor." });
      }

      res.status(201).json({ message: "Seja Bem-Vindo ao Eduka!" });
    });
  });
});

// Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios multimediano." });
  }

  // Verificação de login chefe
  const loginQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(loginQuery, [email, password], (err, results) => {
    if (err) {
      console.error("Erro ao fazer login:", err);
      return res.status(500).json({ message: "Erro no servidor." });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "A tua senha ou email está errada!" });
    }

    res.status(200).json({ message: "Login bem-sucedido!", user: results[0] });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Se tá rodar deixa já ${PORT}`);
});

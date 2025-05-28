import React, { useEffect, useState } from 'react';
import { getTotalUsers } from '../services/UserService';
import './Dashboard.css';
import { FaUsers } from 'react-icons/fa'; // ícone de usuários

function Dashboard() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotalUsers()
      .then(res => setTotal(res.data.total))
      .catch(err => console.error('Erro ao buscar total de usuários:', err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Painel Administrativo</h2>
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-icon">
            <FaUsers size={36} color="#ffffff" />
          </div>
          <div className="card-info">
            <span className="card-label">Total de Usuários</span>
            <span className="card-number">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from 'react';
import {
  getTotalUsers,
  getUsersByDay,
  getUsersByMonth
} from '../services/UserService';
import './Dashboard.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, subMonths } from 'date-fns';

function Dashboard() {
  const [total, setTotal] = useState(0);
  const [hoje, setHoje] = useState(0);
  const [mes, setMes] = useState(0);
  const [dadosMensais, setDadosMensais] = useState([]);

  useEffect(() => {
  const dataHoje = new Date().toISOString().slice(0, 10); // "2025-05-27"
  const mesAtual = dataHoje.slice(0, 7); // YYYY-MM


  getTotalUsers().then(res => setTotal(res.data.total));
  getUsersByDay(dataHoje).then(res => setHoje(res.data.total));
  getUsersByMonth(mesAtual).then(res => setMes(res.data.total));

  const meses = Array.from({ length: 6 }, (_, i) => {
    const date = subMonths(new Date(), i);
    return format(date, 'yyyy-MM');
  }).reverse();

  Promise.all(meses.map(m =>
    getUsersByMonth(m).then(res => ({ mes: m, total: res.data.total }))
  )).then(setDadosMensais);
}, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Painel Administrativo</h2>

      <div className="report-grid">
        <div className="report-card total">
          <h3>Total Cadastrados</h3>
          <p>{total}</p>
        </div>
        <div className="report-card hoje">
          <h3>Cadastrados Hoje</h3>
          <p>{hoje}</p>
        </div>
        <div className="report-card mes">
          <h3>Cadastrados Este Mês</h3>
          <p>{mes}</p>
        </div>
      </div>

      <div className="chart-container">
        <h3>Cadastro nos Últimos Meses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dadosMensais} margin={{ top: 20, right: 30, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#4f46e5" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;

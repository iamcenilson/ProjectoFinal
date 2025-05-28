import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/UserService';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.error('Erro ao buscar usuários', err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      deleteUser(id)
        .then(() => {
          alert('Usuário deletado com sucesso!');
          fetchUsers();
        })
        .catch(err => alert('Erro ao deletar usuário'));
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = () => {
    updateUser(editingUser.id, editingUser)
      .then(() => {
        alert('Usuário atualizado com sucesso!');
        setEditingUser(null);
        fetchUsers();
      })
      .catch(err => alert('Erro ao atualizar usuário'));
  };

  return (
    <div className="user-container">
      <h2 className="title">Usuários Cadastrados</h2>

      {editingUser && (
        <div className="edit-form">
          <h3>Editar Usuário</h3>
          <input
            placeholder="Nome"
            value={editingUser.name}
            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
          />
          <input
            placeholder="Email"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          />
          <input
            placeholder="Pontos"
            type="number"
            value={editingUser.pontos}
            onChange={(e) => setEditingUser({ ...editingUser, pontos: e.target.value })}
          />
          <input
            placeholder="Horas de Estudo"
            type="number"
            value={editingUser.horas_estudo}
            onChange={(e) => setEditingUser({ ...editingUser, horas_estudo: e.target.value })}
          />
          <div className="form-buttons">
            <button className="btn save" onClick={handleUpdate}>Salvar</button>
            <button className="btn cancel" onClick={() => setEditingUser(null)}>Cancelar</button>
          </div>
        </div>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Pontos</th>
            <th>Horas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.pontos}</td>
              <td>{user.horas_estudo}</td>
              <td>
                <button className="btn edit" onClick={() => handleEdit(user)}>Editar</button>
                <button className="btn delete" onClick={() => handleDelete(user.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

import axios from 'axios';

const API = 'http://localhost:5000/api/users';

export const getUsers = () => axios.get(`${API}`);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);
export const updateUser = (id, user) => axios.put(`${API}/${id}`, user);
export const getTotalUsers = () => axios.get(`${API}/total`);

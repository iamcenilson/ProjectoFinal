import axios from 'axios';

const API = 'http://localhost:5000/api/users';

export const getUsers = () => axios.get(`${API}`);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);
export const updateUser = (id, user) => axios.put(`${API}/${id}`, user);
export const getTotalUsers = () => axios.get(`${API}/total`);
export const getUsersByDay = () => axios.get(`${API}/day`);
export const getUsersByMonth = () => axios.get(`${API}/month`);
export const getVideoaulas = () => axios.get(`${API}/videoaulas`);
export const addVideoaula = (video) => axios.post(`${API}/videoaula`, video);
export const getPDFs = () => axios.get(`${API}/pdfs`);
export const addPDF = (pdf) => axios.post(`${API}/pdf`, pdf);


import React, { useEffect, useState } from 'react';
import { getVideoaulas, addVideoaula } from '../services/UserService';
import './pages.css';

export default function VideoAulas() {
  const [videoaulas, setVideoaulas] = useState([]);
  const [formData, setFormData] = useState({
    titulo_videoaula: '',
    url_videoaula: '',
    duracao_videoaula: '',
    id_topico: ''
  });

  useEffect(() => {
    fetchVideoaulas();
  }, []);

  const fetchVideoaulas = async () => {
    const res = await getVideoaulas();
    setVideoaulas(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVideoaula(formData);
    setFormData({ titulo_videoaula: '', url_videoaula: '', duracao_videoaula: '', id_topico: '' });
    fetchVideoaulas();
  };

  return (
    <div className="VideoAula">
      <h1>Gerenciamento de Vídeo-aulas</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={formData.titulo_videoaula}
          onChange={(e) => setFormData({ ...formData, titulo_videoaula: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL"
          value={formData.url_videoaula}
          onChange={(e) => setFormData({ ...formData, url_videoaula: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duração"
          value={formData.duracao_videoaula}
          onChange={(e) => setFormData({ ...formData, duracao_videoaula: e.target.value })}
        />
        <input
          type="text"
          placeholder="ID do Tópico"
          value={formData.id_topico}
          onChange={(e) => setFormData({ ...formData, id_topico: e.target.value })}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {videoaulas.map((video) => (
          <li key={video.id_videoaula}>
            {video.titulo_videoaula} - {video.duracao_videoaula}
          </li>
        ))}
      </ul>
    </div>
  );
}

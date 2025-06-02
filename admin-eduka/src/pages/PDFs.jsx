import React, { useEffect, useState } from 'react';
import { getPDFs, addPDF } from '../services/UserService';
import './pages.css';

export default function PDFs() {
  const [pdfs, setPDFs] = useState([]);
  const [formData, setFormData] = useState({
    titulo_pdf: '',
    url_pdf: '',
    num_paginas_pdf: '',
    id_topico: ''
  });

  useEffect(() => {
    fetchPDFs();
  }, []);

  const fetchPDFs = async () => {
    try {
      const res = await getPDFs();
      setPDFs(res.data);
    } catch (error) {
      console.error('Erro ao buscar PDFs:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPDF(formData);
      setFormData({ titulo_pdf: '', url_pdf: '', num_paginas_pdf: '', id_topico: '' });
      fetchPDFs();
    } catch (error) {
      console.error('Erro ao adicionar PDF:', error);
    }
  };

  return (
    <div className="PDFs">
      <h1>Gerenciamento de PDFs</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={formData.titulo_pdf}
          onChange={(e) => setFormData({ ...formData, titulo_pdf: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL"
          value={formData.url_pdf}
          onChange={(e) => setFormData({ ...formData, url_pdf: e.target.value })}
        />
        <input
          type="text"
          placeholder="Número de Páginas"
          value={formData.num_paginas_pdf}
          onChange={(e) => setFormData({ ...formData, num_paginas_pdf: e.target.value })}
        />
        <input
          type="text"
          placeholder="ID do Tópico"
          value={formData.id_topico}
          onChange={(e) => setFormData({ ...formData, id_topico: e.target.value })}
        />
        <button type="submit">Adicionar PDF</button>
      </form>

      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf.id_pdf}>
            <a href={pdf.url_pdf} target="_blank" rel="noopener noreferrer">
              {pdf.titulo_pdf}
            </a> - {pdf.num_paginas_pdf} páginas
          </li>
        ))}
      </ul>
    </div>
  );
}

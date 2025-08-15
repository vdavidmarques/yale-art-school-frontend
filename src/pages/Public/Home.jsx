import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/publications`)
      .then(response => response.json())
      .then(data => setPublications(data))
      .catch(error => console.error('Erro ao buscar publicações:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Publicações Recentes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {publications.map(publication=>          
          <div key={publication.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{publication.title}</h2>
            <div className="prose prose-p:text-red-600" dangerouslySetInnerHTML={{ __html: publication.body }} />         
            {/* <img src={publication.image} alt={publication.title} srcset="" /> */}
            <Link to={`/publicacoes/${publication.id}`} className="text-blue-500 hover:underline mt-2 inline-block">Leia mais</Link>
          </div>
        )}
          
      </div>
    </div>
  )}
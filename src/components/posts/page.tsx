import { POST_URL, PURE_URL } from '@/config/app-config';
import '@/styles/globals.css'
import Image from 'next/image';

export default async function PostCards() {
  // Faz a requisição para os dados
  const res = await fetch(POST_URL + '?sort[createdAt]=desc&populate=cover&populate=categorie&populate=author&_start=0&_limit=1');
  
  // Verifica se a resposta é bem-sucedida
  if (!res.ok) {
    return <p className="error">Erro ao carregar os produtos.</p>;
  }
  
  // Converte a resposta para JSON
  const data: DatabaseResponse = await res.json();

  return (
    <div className='main-container'>
      <div className="posts-container">
        <>
          {data.data.map((item, index) => (
            <div key={index} className='post-item'>
              <div className="post-item-img" style={{ position: 'relative', width: '200px', height: '200px' }}>
                <Image
                  src={PURE_URL + item.cover.url}
                  alt="Imagem do post"
                  fill // Usando o layout="fill" para a imagem
                  quality={100}
                  style={{ objectFit: 'cover' }}  // Ajuste de estilo para a imagem
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw" // Definindo o comportamento da imagem em diferentes larguras de tela
                />
              </div>
              <div className='post-item-text'>
                {item.tittle}
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

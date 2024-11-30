/* eslint-disable @typescript-eslint/no-explicit-any */
import { POST_URL, PURE_URL } from "@/config/app-config";
import { marked } from "marked";
import Image from "next/image";
import Header from "@/components/header/page";
import '@/styles/globals.css'

export default async function Post({ params }: { params: { slug: string } }) {
  // Faz a requisição para a API usando o parâmetro slug
  const { slug } = await params; // Aguarda a resolução do parâmetro

  const res = await fetch(POST_URL + `?filters[slug][$eq]=${slug}&populate=cover&populate=categorie&populate=author`, {
    cache: 'no-store' // Evita cache de dados, garantindo que cada requisição seja nova
  });
  
  // Verifica se a resposta é bem-sucedida
  if (!res.ok) {
    return <p className="error">Erro ao carregar o post.</p>;
  }

  // Converte a resposta para JSON
  const data: DatabaseResponse = await res.json();
  
  // Converte o conteúdo Markdown para HTML
  const markdownContent = data.data[0]?.content.map((block: any) => block.children.map((child: any) => child.text).join('')).join('\n');
  const htmlContent = marked(markdownContent);

  return (
    <>
      <Header></Header>
      <div className="mainIst-container">
        <h1 className="postIst-tiitle">{data.data[0]?.tittle}</h1>
        <div className="postsIst-container">
          {data.data.map((item: any, index: number) => (
            <div key={index} className="post-item">
              <div className="postIst-item-img" style={{ position: 'relative', width: '200px', height: '200px' }}>
                <Image
                  src={PURE_URL + item.cover.url}
                  alt="Imagem do post"
                  fill // Usando a propriedade fill
                  quality={100}
                  style={{ objectFit: 'cover', cursor: 'pointer' }}  // Ajuste de estilo para a imagem
                  sizes="(max-width: 768px) 100vw, 50vw"  // Ajuste para a performance da imagem em diferentes tamanhos de tela
                  priority // Marcar a imagem como prioritária para melhorar a performance de carregamento
                />
              </div>
            </div>
          ))}
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="postIst-text" />
        </div>
      </div>
    </>
  );
}

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import PostCardsDynamic from "@/containers/post-dinamic/page";
import DisqusClient from "@/components/coments/page";
import { Metadata as NextMetadata } from "next";
import { notFound } from "next/navigation";
import Head from "next/head";
import { SITE_NAME } from "@/config/app-config";
import { removeHtml } from "@/lib/remove-html";

interface ExtendedMetadata extends NextMetadata, DataItem {}

export const revalidate = 60; // Revalida a página a cada 60 segundos

export async function generateStaticParams() {
  const res = await fetch(
    "https://blog-strap.onrender.com/api/posts?populate=cover&populate=categorie&populate=author",
    { cache: "force-cache" } // Garante que a API seja chamada apenas no build
  );

  if (!res.ok) {
    throw new Error(`Erro ao carregar os posts: ${res.status}`);
  }

  const data = await res.json();
  const posts = data.data;

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

const getPostSlug = async (slug: string) => {
  const res = await fetch(
    `https://blog-strap.onrender.com/api/posts?filters[slug][$eq]=${slug}&populate=cover&populate=categorie&populate=author`,
    { cache: "force-cache" } // Força o cache para geração estática
  );

  if (!res.ok) {
    throw new Error(`Erro ao carregar o post para o slug ${slug}: ${res.status}`);
  }

  const data = await res.json();

  if (!data.data || data.data.length === 0) {
    throw new Error(`Post não encontrado para o slug: ${slug} 1`);
  }

  return data.data[0]; // Retorna apenas o primeiro post correspondente
};

  

// Função para obter o post
async function GetPost(params: Promise<{ slug: string }>): Promise<ExtendedMetadata> {
    const { slug } = await params; // Aguarde a resolução de `params`
  

  
    try {
        const post = await getPostSlug(slug);

    
        // Cria os metadados a partir do post recuperado
        const metadata: ExtendedMetadata = {
          ...post,
          title: post.tittle, // Certifique-se de que o campo correto está sendo mapeado
        };

    
        return metadata;
      } catch (error) {
        console.error("Erro em generateStaticParams:", error);
        throw notFound(); // Redireciona para página de erro
      }
  }
  

// Página principal
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const post = await GetPost(params); // Aguarde a resolução de `params`
  
  
    return (
      <>
            <Head>
            <title>{post.tittle} - {SITE_NAME}</title>
            <meta name='description'content={post.content
      .map(i => i.children.map(child => removeHtml(child.text)).join(' '))
      .join(' ')
      .slice(0,150)}
      />
            </Head>
        <Header />
        <PostCardsDynamic post={post} />
        <DisqusClient slug={post.slug} tittle={post.tittle} />
        <Footer />
      </>
    );
  }
  

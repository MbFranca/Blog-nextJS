// lib/api.ts
import { POST_URL } from '@/config/app-config';
 // Ajuste conforme a localização das interfaces

// Função para buscar múltiplos posts
export const fetchPosts = async (): Promise<DatabaseResponse> => {
  const res = await fetch(`${POST_URL}?sort[createdAt]=desc&populate=cover&populate=categorie&populate=author&_start=0&_limit=5`);

  if (!res.ok) {
    throw new Error('Erro ao carregar os posts');
  }

  const data: DatabaseResponse = await res.json();
  return data;
};

// Função para buscar um post específico
export const fetchPostBySlug = async (slug: string): Promise<DatabaseResponseSingle> => {
  const res = await fetch(`${POST_URL}?filters[slug][$eq]=${slug}&populate=cover&populate=categorie&populate=author`);

  if (!res.ok) {
    throw new Error('Erro ao carregar o post');
  }

  const data: DatabaseResponseSingle = await res.json();
  return data;
};

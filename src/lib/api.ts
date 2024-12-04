// src/utils/fetchPosts.ts

import { POST_URL } from "@/config/app-config";

export const fetchPosts = async () => {
    const res = await fetch(POST_URL + '?sort[createdAt]=desc&populate=cover&populate=categorie&populate=author&_start=0&_limit=1');
  
    if (!res.ok) {
      throw new Error('Erro ao carregar os posts');
    }
  
    const data: DatabaseResponse = await res.json();
    return data;
  };
  

  export const fetchPostDynamic = async (slug: string) => {
    const res = await fetch(POST_URL + `?filters[slug][$eq]=${slug}&populate=cover&populate=categorie&populate=author`, {
      cache: 'no-store',  // Evita cache de dados
    });
  
    if (!res.ok) {
      throw new Error('Erro ao carregar os post');
    }
  
    const data: DatabaseResponse = await res.json();
  
    // Verifica se não há posts no resultado
    if (!data.data || data.data.length === 0) {
      throw new Error('Post não encontrado');
    }
  
    return data;  // Retorna os dados caso a resposta seja válida
  };
  

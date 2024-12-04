// src/components/coments/DisqusClient.tsx
'use client'; // Marque esse componente como de cliente

import { DiscussionEmbed } from 'disqus-react';
import { Container } from '@/components/container/page';

export interface CommentsProps {
  slug: string;
  tittle: string;
}

export default function DisqusClient({ slug, tittle }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="daylimour" // Substitua pelo seu shortname do Disqus
        config={{
          url: `http://localhost:3000/post/${slug}`, // URL do post
          identifier: slug, // Identificador único do post (geralmente o slug)
          title: tittle, // Título do post
          language: 'pt-BR', // Definindo o idioma para português
        }}
      />
    </Container>
  );
}

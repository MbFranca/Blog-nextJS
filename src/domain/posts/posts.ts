/* eslint-disable @typescript-eslint/no-unused-vars */
// Representa um texto simples dentro de um parágrafo
interface Text {
    type: "text";  // Tipo fixo
    text: string;  // Conteúdo do texto
  }
  
  // Representa um parágrafo composto por um ou mais textos
  interface Paragraph {
    type: "paragraph";  // Tipo fixo
    children: Text[];   // Array de objetos Text
  }
  
  // Representa o conteúdo de um artigo/documento, composto por parágrafos
  interface Content {
    type: "paragraph";  // Tipo fixo (pode ser expandido para outros tipos)
    children: Text[];   // Array de objetos Text
  }
  
  // Informações sobre o arquivo de mídia (imagem, vídeo, etc.)
  interface Media {
    id: number;                 // ID único do arquivo
    documentId: string;         // ID do documento relacionado
    name: string;               // Nome do arquivo
    alternativeText: string | null;  // Texto alternativo (para acessibilidade)
    caption: string | null;         // Legenda do arquivo
    width: number;                  // Largura da imagem
    height: number;                 // Altura da imagem
    formats: {                     // Formatos da imagem
      thumbnail: {                 // Miniatura
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        sizeInBytes: number;
        url: string;               // URL da miniatura
      };
      small: {                      // Versão pequena
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        sizeInBytes: number;
        url: string;               // URL da imagem pequena
      };
    };
    hash: string;                 // Hash do arquivo
    ext: string;                  // Extensão do arquivo
    mime: string;                 // Tipo MIME do arquivo
    size: number;                 // Tamanho total do arquivo
    url: string;                  // URL do arquivo original
    previewUrl: string | null;    // URL de visualização (caso exista)
    provider: string;             // Serviço de armazenamento (ex: "local", "cloud")
    provider_metadata: string | null;  // Metadados adicionais sobre o provedor
    createdAt: string;            // Data de criação
    updatedAt: string;            // Data de atualização
    publishedAt: string;          // Data de publicação
  }
  
  // Representa a categoria associada a um post
  interface Category {
    id: number;                  // ID único da categoria
    documentId: string;          // ID do documento relacionado
    name: string;                // Nome da categoria
    createdAt: string;           // Data de criação
    updatedAt: string;           // Data de atualização
    publishedAt: string;         // Data de publicação
  }
  
  // Representa o autor do post
  interface Author {
    id: number;                  // ID único do autor
    documentId: string;          // ID do documento relacionado
    name: string;                // Nome do autor
    createdAt: string;           // Data de criação
    updatedAt: string;           // Data de atualização
    publishedAt: string;         // Data de publicação
  }
  
  // Representa um item de dados (como um artigo ou documento)
  interface DataItem {
    id: number;                  // ID único do item
    documentId: string;          // ID do documento
    tittle: string;              // Título do item
    content: Content[];          // Array de conteúdos do item
    slug: string;                // Caminho amigável para a URL
    createdAt: string;           // Data de criação
    updatedAt: string;           // Data de atualização
    publishedAt: string;         // Data de publicação
    cover: Media;                // Capa associada ao item (tipo Media)
    categorie: Category;         // Categoria associada ao item
    author: Author;              // Autor do post
  }
  
  // Informações sobre a paginação dos resultados
  interface Pagination {
    page: number;                // Página atual
    pageSize: number;            // Quantidade de itens por página
    pageCount: number;           // Número total de páginas
    total: number;               // Número total de itens
  }
  
  // Metadados da resposta, incluindo a paginação
  interface Meta {
    pagination: Pagination;      // Informações sobre a paginação
  }
  
  // Resposta da base de dados com múltiplos itens
  interface DatabaseResponse {
    map(arg0: (post: DatabaseResponseSingle ) => { params: { slug: string; }; }): unknown;
    data: DataItem[];            // Array de itens de dados
    meta: Meta;                  // Metadados da resposta, incluindo a paginação
  }
  
  // Resposta da base de dados com um único item
  interface DatabaseResponseSingle {
    data: DataItem;              // Um único item de dados
    meta: Meta;                  // Metadados da resposta
  }
  
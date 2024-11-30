export interface Post {
    id: string | number;
    tittle: string;
    content: { children: { text: string }[] }[];
    slug: string;
  }
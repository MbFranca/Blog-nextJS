import { fetchPostDynamic } from "@/lib/api";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import '@/styles/globals.css';
import PostCardsDynamic from "@/containers/post-dinamic/page";
import DisqusClient from "@/components/coments/page";



export default async function Post({ params }: { params: { slug: string }, className?: string }) {
  const { slug } = params;
  let data;

  try {
    data = await fetchPostDynamic(slug);  
  } catch (error) {
    return <p className="error">{(error as Error).message}</p>;
  }

  if (!data || !data.data || data.data.length === 0) {
    return <p className="error">Post não encontrado.</p>;
  }
  const post = data.data[0];
  return (
    <>
      <Header />
      <PostCardsDynamic post={post} />
      <DisqusClient slug={slug} tittle={post.tittle}/>
      <Footer />
    </>
  );
}

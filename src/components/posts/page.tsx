import { fetchPosts } from '@/lib/api';
import '@/styles/globals.css';
import PostTitle from '../post-tittle/page';
import PostImage from '../imageContent/page';
import { Container } from '../container/page';
import Link from 'next/link';

export default async function PostCards() {
  let data;
  try {
    data = await fetchPosts(); // Retorna os posts
  } catch (error) {
    return <p className="error">{(error as Error).message}</p>;
  }

  return (
    <Container>
      <div className="posts-container">
        {data.data.map((item, index) => (
          <div key={index} className='post-item'>
            <Link href="/post/[slug]" as={`post/${item.slug}`} className='link'>
            <div className="post-item-img">
              <PostImage alt={item.tittle} url={item.cover.url} className='item-img'/>
            </div>
            <div className='item-txt'>
            <PostTitle title={item.tittle} className='tittle'/>
            </div>
            
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

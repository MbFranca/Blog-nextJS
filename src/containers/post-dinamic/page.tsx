import '@/styles/globals.css';
import PostImage from '../../components/imageContent/page';
import PostDetails from '../../components/post-details/page';
import PostContent from '../../components/postContent/page';
import { Container } from '../../components/container/page';
import PostTitle from '@/components/post-tittle/page';

interface PostCardsDynamicProps {
    post: DataItem;  // Tipo DataItem como propriedade
  }
export default async function PostCardsDynamic( {post}: PostCardsDynamicProps) {

    
  return (
    <Container >
    <PostTitle title={post.tittle} className='tittle-dynamic'></PostTitle>
    <PostImage url={post.cover.url} alt={post.tittle} className="post-item-img" />
    <PostDetails author={post.author.name} date={post.createdAt} />
    <PostContent content={post.content} className="custom-content-class" />
    </Container>
  );
}

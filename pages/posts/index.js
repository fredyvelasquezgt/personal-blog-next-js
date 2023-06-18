
import AllPosts from '../../components/posts/all-posts';   
import { getStaticProps } from '../index';
    
  

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />
}

export function getStaticProps() {
  
}

export default AllPostsPage;
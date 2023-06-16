
import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
    {
      slug: "getting-started-with-next-js",
      title: "Getting Started with Next JS",
      image: "getting-started-nextjs.png",
      excerpt: "learn easy nextJS",
      date: '2023-06-15',
    },
    {
      slug: "getting-started-with-next-js2",
      title: "Getting Started with Next JS",
      image: "getting-started-nextjs.png",
      excerpt: "learn easy nextJS",
      date: '2023-06-15',
    },
    {
      slug: "getting-started-with-next-js3",
      title: "Getting Started with Next JS",
      image: "getting-started-nextjs.png",
      excerpt: "learn easy nextJS",
      date: '2023-06-15',
    },
    {
      slug: "getting-started-with-next-js4",
      title: "Getting Started with Next JS",
      image: "getting-started-nextjs.png",
      excerpt: "learn easy nextJS",
      date: '2023-06-15',
    }
  
  ];
  

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage;
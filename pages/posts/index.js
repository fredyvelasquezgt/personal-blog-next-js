import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return(
    <Fragment>
    <Head>
      <title>Al Posts</title>
      <meta name="description" content="a list of all posts" />
    </Head>
    <AllPosts posts={props.posts} />
  </Fragment>
  )
 
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;

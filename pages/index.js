import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPOsts } from "../lib/posts-util";
import Head from 'next/head'


function HomePage(props) {
  
  return (
    <Fragment>
      <Head>
        <title>Fredy's blog</title>
        <meta name="description"
        content="I post about interesting stuff" 
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPOsts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;

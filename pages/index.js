import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPOsts } from "../lib/posts-util";



function HomePage() {
  
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
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

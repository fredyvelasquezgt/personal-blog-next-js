import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from '../components/home-page/hero'

const DUMMY_POSTS = [
  {
    slug: '', title, image, excerpt, date
  }
]

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

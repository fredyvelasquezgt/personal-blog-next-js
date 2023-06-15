import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from '../components/home-page/hero'

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={} />
    </Fragment>
  );
}

export default HomePage;

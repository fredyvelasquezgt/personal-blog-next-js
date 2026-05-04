import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import ExperienceCarousel from '../components/home-page/experience-carousel';
import FeaturedProjects from '../components/home-page/featured-projects';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPOsts } from '../lib/posts-util';
import { getFeaturedProjects } from '../lib/projects-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Fredy Velasquez — Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio y blog de Fredy Velasquez, desarrollador Full Stack especializado en React y Node.js."
        />
      </Head>
      <Hero />
      <ExperienceCarousel />
      <FeaturedProjects projects={props.projects} />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPOsts();
  const featuredProjects = getFeaturedProjects();

  return {
    props: {
      posts: featuredPosts,
      projects: featuredProjects,
    },
  };
}

export default HomePage;

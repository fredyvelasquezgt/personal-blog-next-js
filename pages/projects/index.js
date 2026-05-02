import Head from 'next/head';
import { Fragment } from 'react';
import AllProjects from '../../components/projects/all-projects';
import { getAllProjects } from '../../lib/projects-util';

function AllProjectsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Projects</title>
        <meta name="description" content="All my development projects" />
      </Head>
      <AllProjects projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
}

export default AllProjectsPage;

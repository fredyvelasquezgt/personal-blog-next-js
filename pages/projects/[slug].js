import ProjectContent from '../../components/projects/project-detail/project-content';
import { getProjectData, getProjectsFiles } from '../../lib/projects-util';
import Head from 'next/head';
import { Fragment } from 'react';

function ProjectDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.project.title}</title>
        <meta name="description" content={props.project.description} />
      </Head>
      <ProjectContent project={props.project} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
  };
}

export function getStaticPaths() {
  const projectFilesnames = getProjectsFiles();

  const slugs = projectFilesnames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectDetailPage;

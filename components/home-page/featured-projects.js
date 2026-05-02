import ProjectsGrid from '../projects/projects-grid';
import classes from './featured-projects.module.css';

function FeaturedProjects(props) {
  return (
    <section className={classes.featured}>
      <h2>Featured Projects</h2>
      <ProjectsGrid projects={props.projects} />
    </section>
  );
}

export default FeaturedProjects;

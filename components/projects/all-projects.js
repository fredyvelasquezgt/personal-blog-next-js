import classes from './all-projects.module.css';
import ProjectsGrid from './projects-grid';

function AllProjects(props) {
  return (
    <section className={classes.projects}>
      <h1>All Projects</h1>
      <ProjectsGrid projects={props.projects} />
    </section>
  );
}

export default AllProjects;

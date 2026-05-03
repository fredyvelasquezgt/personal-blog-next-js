import Image from 'next/image';
import classes from './project-header.module.css';

function ProjectHeader(props) {
  const { title, image, slug, tech, githubUrl, demoUrl } = props.project;
  const imagePath = `/images/projects/${slug}/${image}`;

  return (
    <header className={classes.header}>
      <div className={classes.meta}>
        <h1 className={classes.title}>{title}</h1>
        {tech && tech.length > 0 && (
          <ul className={classes.techList}>
            {tech.map((t) => (
              <li key={t} className={classes.techBadge}>
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className={classes.actions}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.actionLink}
            >
              → View on Github
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.actionLinkPrimary}
            >
              → Live demo
            </a>
          )}
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src={imagePath}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </header>
  );
}

export default ProjectHeader;

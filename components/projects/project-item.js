import Link from 'next/link';
import Image from 'next/image';
import classes from './project-item.module.css';

function ProjectItem(props) {
  const { title, description, image, tech, githubUrl, demoUrl, slug } = props.project;

  const imagePath = `/images/projects/${slug}/${image}`;
  const linkPath = `/projects/${slug}`;

  return (
    <li className={classes.card}>
      <Link href={linkPath}>
        <div className={classes.imageWrapper}>
          <Image
            src={imagePath}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority={false}
          />
        </div>
        <div className={classes.body}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
          {tech && tech.length > 0 && (
            <ul className={classes.techList}>
              {tech.map((t) => (
                <li key={t} className={classes.techBadge}>
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
      <div className={classes.links}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkBtn}
          >
            GitHub
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkBtnPrimary}
          >
            Demo
          </a>
        )}
      </div>
    </li>
  );
}

export default ProjectItem;

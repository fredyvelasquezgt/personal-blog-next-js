import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import ProjectHeader from './project-header';
import classes from './project-content.module.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('py', python);

function ProjectContent(props) {
  const { project } = props;

  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName && node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/projects/${project.slug}/${image.properties.src}`}
              alt={image.properties.alt || 'Project image'}
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
        );
      }
      return <p>{props.children}</p>;
    },
    code(code) {
      if (!code.className) {
        return <code>{code.children[0]}</code>;
      }
      const _array = code.className.split('-');
      const _language = _array[1];

      return (
        <SyntaxHighlighter language={_language} style={atomDark}>
          {code.children[0]}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <ProjectHeader project={project} />
      <ReactMarkdown components={customRenderers}>
        {project.content}
      </ReactMarkdown>
    </article>
  );
}

export default ProjectContent;

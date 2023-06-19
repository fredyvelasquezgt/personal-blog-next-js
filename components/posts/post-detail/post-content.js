import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import PostHeader from './post-header';
import classes from './post-content.module.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

  //try new images

  function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
   
    const customRenderers = {
      p: ({ node, ...props }) => {
        console.log(node.children[0]);
        if (node.children[0].tagName && node.children[0].tagName === 'img') {
          const image = node.children[0];
          return (
            <div className={classes.image}>
              {
                <Image
                  src={`/images/posts/getting-started-with-nextjs/${image.properties.src}`}
                  alt={image.properties.alta}
                  width={600}
                  height={300}
                />
              }
            </div>
          );
        }
        return <p>{props.children}</p>;
      },

      code(code) {
        const _array = code.className.split("-");
        const _language = _array[1];
   
        return (
      <SyntaxHighlighter language={_language} style={atomDark}>
            {code.children[0]}
          </SyntaxHighlighter>
      

        )
              }};
   
    return (
      <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      </article>
    );
  }
  

export default PostContent;
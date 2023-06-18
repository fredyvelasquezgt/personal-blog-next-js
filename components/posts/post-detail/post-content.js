import ReactMarkdown from 'react-markdown';
import Image from 'next/image'
import PostHeader from './post-header';
import classes from './post-content.module.css'



  //try new images

  function PostContent(props) {

    const {post} = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenderer = {
    

      paragraph(paragraph) {
        const {node} = paragraph;

        if(node.children[0].type === 'image') {
          const image = node.children[0];

          return <div className={classes.image} >
                <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />

          </div>
        }
      }
    };

    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderer}>{post.content}</ReactMarkdown>
    </article>

}

export default PostContent;
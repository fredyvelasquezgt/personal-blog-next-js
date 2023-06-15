import Link from 'next/link'
import classes from './post-item.module.css'

function PostItem(props) {

    const {title, image, excerpt, date, slug} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts`

    return <li className={classes.post} >
        <Link>
            <a>
                <div className={classes.image}>
                    <Image src="" alt={title} width={300} height={200} />
                </div>
                <div className={classes.content} >
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excertp}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostItem;
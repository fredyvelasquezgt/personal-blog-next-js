import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // for the image be sure to have the right name
  const imagePath = `/images/posts/${slug}/${image}`;
  console.log(imagePath)
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath} legacyBehavior>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={400}
              height={300}
              layout="responsive"
              legacybehavior
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;

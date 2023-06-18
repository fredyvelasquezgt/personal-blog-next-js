import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage() {
    return <PostContent />
}

export function getStaticProps(context) {
    const {params} = context;
    const {slug} = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {

    const postFilesnames = getPostsFiles()

    const slugs = postFilesnames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: [],
        fallback: false
    }
}

export default PostDetailPage;
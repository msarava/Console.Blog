import { getOnePost, getPosts } from 'services/api.services';

export default function index({ onePost }) {
  return (
    <div>
      <h1>{onePost.title}</h1>
      {onePost.content}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const onePost = await getOnePost(postId);

  return {
    props: {
      onePost,
    },
  };
}

export const getStaticPaths = async () => {
  const allPosts = await getPosts();
  const paths = allPosts.map((post) => {
    return { params: { postId: post._id } };
  });
  return {
    paths,
    fallback: false,
  };
};

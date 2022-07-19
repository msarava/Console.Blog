import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { getPosts } from 'services/api.services';
import CardComp from '@/components/post/Card';

export default function Home({ allPosts }) {
  return (
    <div >
      <Head>
        <title>Console.Blog()</title>
        <meta name='description' content='Page d\accueil' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.list}>
        {allPosts.map((post) => (
          <CardComp key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getPosts();

  return {
    props: { allPosts },
  };
}

// export const getStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: false,
//   };
// };

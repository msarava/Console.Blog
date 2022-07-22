import CardAdmin from '@/components/admin/CardAdmin';
import styles from '@/styles/PostAdmin.module.css';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getPosts } from 'services/api.services';
import AuthContext from 'services/auth.service';

export default function Index({ allPosts }) {
  const [postList, setPostList] = useState(allPosts);
  return (
    <div className={styles.container}>
      <h2>&gt;admin_</h2>
      <div className={styles.btnContainer}>
        <Link href='/admin/create'>
          <Button variant='contained' sx={{ backgroundColor: '#fb6565' }}>
            Créer un billet
          </Button>
        </Link>
      </div>
      <h2>&gt; liste des billets_</h2>
      {postList.map((post) => (
        <CardAdmin
          key={post._id}
          post={post}
          postList={postList}
          setPostList={setPostList}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const allPosts = await getPosts();
  return {
    props: { allPosts },
  };
}

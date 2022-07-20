import CardAdmin from '@/components/admin/CardAdmin';
import styles from '@/styles/PostAdmin.module.css';
import { Button } from '@mui/material';
import { getPosts } from 'services/api.services';

export default function index({ allPosts }) {
  return (
    <div className={styles.container}>
      <h1>&gt;admin_</h1>
      <div className={styles.btnContainer}><Button variant='contained' sx={{ backgroundColor: '#fb6565' }}>Créer un billet</Button></div>
      <h2>&gt; liste des billets_</h2>
      {allPosts.map((post) => (
        <CardAdmin key={post._id} post={post} />
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

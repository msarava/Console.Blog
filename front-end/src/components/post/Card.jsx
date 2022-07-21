import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import { useRouter } from 'next/router';
import { DateTime } from 'luxon';
import { Chip, Stack } from '@mui/material';
import styles from '@/styles/Post.module.css';

export default function CardComp({ post }) {
  const router = useRouter();
  const handleClickCard = () => {
    router.push(`/post/${post._id}`);
  };
  const handleClickCat = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };
  const date = DateTime.fromISO(post.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div onClick={handleClickCard}>
        <CardMedia
          component='img'
          height='194'
          image={post.picture}
          alt='picture'
        />
        <div className={styles.chips}>
          {post.category.map((el) => (
            <Chip
              key={el._id}
              label={el.name}
              sx={{
                backgroundColor: '#fb6565',
                color: '#ffffff',
                fontWeight: 'bold',
              }}
              onClick={() => handleClickCat(el._id)}
            />
          ))}
        </div>
        <h1 className={styles.title}>{`> ${post.title}`}</h1>
        <p className={styles.cardContent}>{post.content}</p>
        <div className={styles.cardFooter}>
          <div className={styles.authorInfo}>
            <Avatar sx={{ bgcolor: red[500] }} src={post.author.picture} />
            <div className={styles.cardDetails}>
              <p className={styles.authorName}>{post.author.firstname}</p>
              <div className={styles.date}> {date} </div>
            </div>
          </div>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

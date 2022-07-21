import React from 'react';
import { DateTime } from 'luxon';
import card from '@/styles/Category.module.css';
import MessageIcon from '@mui/icons-material/Message';


function CategoryCard({ post }) {
  const date = DateTime.fromISO(post.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  console.log(post);
  const commentsCount = post.comment.length;
  const hasComment = commentsCount > 0;
  return (
    <div className={card.container}>
      <div className={card.cardTitle}>{post.title}</div>
      <div className={card.details}>
        <div className={card.date}>{date}</div>
        <div className={card.comment}>{commentsCount}<MessageIcon/></div>
      </div>

    </div>
  );
}

export default CategoryCard;

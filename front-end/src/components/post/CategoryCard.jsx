import React from 'react';
import { DateTime } from 'luxon';
import card from '@/styles/Category.module.css';
import MessageIcon from '@mui/icons-material/Message';
import { useRouter } from 'next/router';


function CategoryCard({ post }) {
  const router=useRouter()
  const date = DateTime.fromISO(post.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  const commentsCount = post.comment.length;
  const hasComment = commentsCount > 0;
  const handleClick = ()=>{
    router.push(`/post/${post._id}`)
  }
  return (
    <div className={card.container} onClick={handleClick}>
            <img src={post.picture} alt={post.title} height='50px'/>
<div className={card.cardTitle}>{post.title}</div>
      <div className={card.details}>
        <div className={card.date}>{date}</div>
        <div className={card.comment}>{commentsCount}<MessageIcon/></div>
      </div>

    </div>
  );
}

export default CategoryCard;

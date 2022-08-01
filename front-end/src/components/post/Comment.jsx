import React from 'react';
import styles from '@/styles/Comment.module.css';
import { Avatar } from '@mui/material';
// import { DateTime } from 'luxon';

function Comment({comment}) {
  const date = DateTime.fromISO(comment.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  return (
    <div className={styles.cointainer}>
      <div className={styles.header}>
        <div className={styles.userdetails}>
          <Avatar src={comment.author.picture} />
          <h3>{comment.author.firstname}</h3>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
      <p className={styles.content}>{comment.content}</p>
    </div>
  );
}

export default Comment;

import React from 'react';
import styles from '@/styles/Comment.module.css';
import { Avatar } from '@mui/material';
import { DateTime } from 'luxon';

function Comment() {
  const comment = {
    _id: '62d7e8338e7542df032e3206',
    content: 'WORKS ???last Commentaire test here',
    author: '62d194da24309f61ad631f40',
    post: '62d7dc09c98f866e1a8bfa5e',
    createdAt: '2022-07-20T11:34:11.351Z',
    updatedAt: '2022-07-20T11:34:11.352Z',
    __v: 0,
  };

  const date = DateTime.fromISO(comment.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  return (
    <div className={styles.cointainer}>
      <div className={styles.header}>
        <Avatar />
        <div className={styles.date}>{date}</div>
      </div>
      <p className={styles.content}>{comment.content}</p>
    </div>
  );
}

export default Comment;

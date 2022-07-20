import React from 'react';
import { DateTime } from 'luxon';
import card from '@/styles/PostAdmin.module.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

function CardAdmin({ post }) {
  console.log(post);
  const date = DateTime.fromISO(post.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  return (
    <div className={card.cardContainer}>
      <div>
        <div className={card.date}>{date}</div>
        <div className={card.title}>{post.title}</div>
      </div>
      <div className={card.icons}>
        <div>
          <IconButton aria-label='edit' sx={{ backgroundColor: '#fb6565' }}>
            <CreateIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label='delete' sx={{ backgroundColor: '#fb6565' }}>
            <DeleteForeverIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;

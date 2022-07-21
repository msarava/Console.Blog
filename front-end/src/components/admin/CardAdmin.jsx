import React, { useState } from 'react';
import { DateTime } from 'luxon';
import card from '@/styles/PostAdmin.module.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { updateOnePostAPI } from 'services/api.services';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function CardAdmin({ post, postList, setPostList }) {
  const date = DateTime.fromISO(post.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
const [isVisible, setIsVisible] = useState(post.visible)
  const switchVisible = async () => {
    await updateOnePostAPI({ ...post, visible: !post.visible }, post._id);
    setIsVisible(!isVisible)
  };
  return (
    <div className={card.cardContainer}>
      <Link href={`/post/${post._id}`}>
          <div>
            <div className={card.date}>{date}</div>
            <div className={card.title}>{post.title}</div>
          </div>
        </Link>
      <div className={card.icons}>
        <div>
          <Link href={`/admin/${post._id}/edit`}>
            <IconButton aria-label='edit' sx={{ backgroundColor: '#fb6565' }}>
              <CreateIcon />
            </IconButton>
          </Link>
        </div>
        <div>
          {isVisible ? (
            <IconButton
              aria-label='delete'
              sx={{ backgroundColor: '#fb6565' }}
              onClick={switchVisible}
            >
              <VisibilityIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label='delete'
              sx={{ backgroundColor: '#808080' }}
              onClick={switchVisible}
            >
              <VisibilityOffIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;

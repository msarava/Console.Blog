import {
  getCommentFromPostAPI,
  getOnePost,
  getPosts,
} from 'services/api.services';
import styles from '@/styles/Post.module.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { DateTime } from 'luxon';
import { Avatar, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import SignInButton from '@/components/post/SignInButton';
import Comment from '@/components/post/Comment';
import { useContext, useEffect, useState } from 'react';
import AuthContext from 'services/auth.service';
import CommentForm from '@/components/post/CommentForm';
import { useRouter } from 'next/router';
import {
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  TwitterShareButton,
  MailruShareButton,
} from 'react-share';
import Image from 'next/image';

export default function Index({ onePost, commentList }) {
  const [comments, setComments] = useState(commentList);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const commentsCount = comments.length;
  const hasComment = commentsCount > 0;
  const handleClickCat = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };
  const date = DateTime.fromISO(onePost.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  return (
    <div className={styles.container}>
      <Image
        className={styles.postPicture}
        alt='illustration'
        src='/assets/pictures/code.jpg'
        width='350'
        height='250'
      />
      <Stack direction='row' spacing={1}>
        {onePost.category.map((el) => (
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
      </Stack>
      <h1 className={styles.title}>&gt; {onePost.title}</h1>
      <div className={styles.date}>{date}</div>
      <div className={styles.user}>
        <Avatar src={onePost.author.picture}></Avatar>
        {onePost.author.firstname}
      </div>
      <div className={styles.comment}>
        {hasComment && `${commentsCount} commentaire(s) `}
        {hasComment && <MessageIcon color='action' />}
      </div>

      <div className={styles.content}>{onePost.content}</div>

      <h2 className={styles.titleSecond}>Envie de Réagir ?</h2>
      <div className={styles.share}>
        <h2 className={styles.titleThird}>_Partage !</h2>
        <TwitterShareButton url={'http://www.google.com'}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={'http://www.google.com'}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <a href='mailto:test@pm.me' target='_blank' rel='noreferrer'>
          <EmailIcon size={32} round={true} />
        </a>
      </div>
      <div className={styles.share}>
        <h2 className={styles.titleThird}>_Laisse un com&apos; !</h2>
        <p className={styles.commentCount2}>{commentsCount} commentaire(s)</p>
      </div>
      {user ? (
        <div>
          <CommentForm
            user={user}
            postId={onePost._id}
            setComments={setComments}
          />
        </div>
      ) : (
        <div className={styles.btnContainer}>
          <SignInButton />
        </div>
      )}
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
export async function getStaticProps({ params }) {
  const { postId } = params;
  const onePost = await getOnePost(postId);
  const commentList = await getCommentFromPostAPI(postId);

  return {
    props: {
      onePost,
      commentList,
    },
  };
}

export const getStaticPaths = async () => {
  const allPosts = await getPosts();
  const paths = allPosts.map((post) => {
    return { params: { postId: post._id } };
  });
  return {
    paths,
    fallback: false,
  };
};

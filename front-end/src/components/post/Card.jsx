import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea } from '@mui/material';

export default function CardComp({ post }) {
  // const post = {
  //   _id: '62d72c8194ee5cb1e25ed74d',
  //   title: "Un billet pour l'exemple",
  //   content:
  //     "le nouveau billet pour l'exemple et visualisation, c'est quelque chose de très important.",
  //   picture:
  //     'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //   author: '62d194da24309f61ad631f40',
  //   category: ['62d56e3e5964e4f73b3f604f'],
  //   createdAt: '2022-07-19T22:13:21.160Z',
  //   updatedAt: '2022-07-19T22:13:21.160Z',
  //   __v: 0,
  // };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
      href={`/post/${post._id}`}
      >
      <CardMedia
        component='img'
        height='194'
        image={
          post.picture
            ? post.picture
            : 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        }
        alt='picture'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
          A
        </Avatar>
        <CardHeader title={post.title} subheader={post.createdAt} />
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}

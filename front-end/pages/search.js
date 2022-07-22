import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import styles from '@/styles/Search.module.css';
import { useState } from 'react';
import { getPosts } from 'services/api.services';
import CategoryCard from '@/components/post/CategoryCard';

function search({ allPosts }) {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Rechercher</h1>
        <TextField
          name='search'
          type='text'
          id='searchInput'
          placeholder='Recherche'
          value={searchValue}
          variant='standard'
          onChange={handleChange}
          helperText=''
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        {allPosts
          .filter(
            (post) =>
              post.title.includes(searchValue) ||
              post.content.includes(searchValue) 
              //||
              // post.category.filter(cat => cat.name.includes(searchValue) )
              )
          .map((post) => (
            <CategoryCard key={post._id} post={post} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getPosts();

  return {
    props: {
      allPosts,
    },
  };
}

export default search;

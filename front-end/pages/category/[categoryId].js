import { getCategoryAPI, getCategoryByIdAPI } from 'services/api.services';
import post from '@/styles/Category.module.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryCard from '@/components/post/CategoryCard';
import { Chip } from '@mui/material';
import { useRouter } from 'next/router';

export default function CategoryId({ category, allCategories }) {
  const router=useRouter()
  const handleClickCat = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };
  return (
    <div className={post.generalContainer}>
      <div className={post.categories}>
        {allCategories.map((el) => (
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
      <h1 className={post.title}>
        <LocalOfferIcon color='action' />
        {category.name}
      </h1>
      <div className={post.mainContainer}>
        {category.posts.length>0 ? category.posts
          .filter((post) => post.visible === true)
          .map((post) => (
            <CategoryCard key={post._id} post={post} />
          )): <p className={post.noPost}>Pas de billet dans cette catégorie</p>}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { categoryId } = params;
  const category = await getCategoryByIdAPI(categoryId);
  const allCategories = await getCategoryAPI();

  return {
    props: { category, allCategories },
  };
}

export const getStaticPaths = async () => {
  const allCategories = await getCategoryAPI();
  const paths = allCategories.map((cat) => {
    return { params: { categoryId: cat._id } };
  });
  return {
    paths,
    fallback: false,
  };
};

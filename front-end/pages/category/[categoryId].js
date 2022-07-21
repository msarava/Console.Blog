import { getCategoryAPI, getCategoryByIdAPI } from 'services/api.services';
import post from '@/styles/Category.module.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryCard from '@/components/post/CategoryCard';


export default function categoryId({ category }) {
  return (
    <div>
      <h1 className={post.title}>
        <LocalOfferIcon color='action' />
        {category.name}
      </h1>
      <div className={post.mainContainer}>
        {category.posts
          .filter((post) => post.visible === true)
          .map((post) => (
            <CategoryCard post={post} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { categoryId } = params;
  const category = await getCategoryByIdAPI(categoryId);
  return {
    props: { category },
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

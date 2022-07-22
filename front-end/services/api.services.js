import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};
//Auth
export async function registerApi(userDatas) {
  const { lastname, firstname, email, password, picture } = userDatas;
  const url = 'user/register';
  const results = Api.post(url, {
    lastname,
    firstname,
    email,
    password,
    picture,
  }).then((response) => response.data);
  return results;
}

export async function loginApi(userLog) {
  const { email, password } = userLog;
  const url = 'user/login';
  const results = await Api.post(url, { email, password }, config);
  return results;
}
export async function logOutApi() {
  const url = 'user/logout';
  const results = await Api.get(url);
  return results;
}

//Post
export async function getPosts() {
  const url = 'post';
  const allPosts = await Api.get(url);
  return allPosts.data;
}

export async function getOnePost(postId) {
  const url = `post/${postId}`;
  const onePost = await Api.get(url).then((response) => response.data[0]);
  return onePost;
}

export async function createOnePostAPI(post) {
  const { title, content, category, picture } = post;
  const url = `post`;
  const createdPost = await Api.post(
    url,
    {
      title,
      content,
      category,
      picture,
    },
    config
  ).then((response) => response.data[0]);
  return createdPost;
}

export async function updateOnePostAPI(post, postId) {
  const { title, content, category, picture, visible } = post;
  const url = `post/${postId}`;
  const createdPost = await Api.put(
    url,
    {
      title,
      content,
      category,
      picture,
      visible,
    },
    config
  ).then((response) => response.data[0]);
  return createdPost;
}
export async function deleteOnePostAPI(post) {
  const { title, content, category, picture } = post;
  const url = `post`;
  const deletedPost = await Api.put(
    url,
    {
      title,
      content,
      category,
      picture,
    },
    config
  ).then((response) => response.data[0]);
  return deletedPost;
}

export async function getCommentFromPostAPI(postId) {
  const url = `comment/post/${postId}`;
  const comment = await Api.get(url).then((response) => response.data);
  return comment;
}
//Comment
export async function getCommentByIdAPI(commentId) {
  const url = `comment/${commentId}`;
  const comment = await Api.get(url).then((response) => response.data);
  return comment;
}

export async function createCommentAPI(comment, postId) {
  const { content } = comment;
  const url = `comment/${postId}`;
  const newComment = await Api.post(url, { content }, config).then(
    (response) => response.data
  );
  return newComment;
}
export async function updateCommentAPI(comment, postId) {
  const { content } = comment;
  const url = `comment/${postId}`;
  const updatedComment = await Api.put(url, { content }).then(
    (response) => response.data
  );
  return updatedComment;
}

export async function deleteCommentAPI(commentId) {
  const url = `comment/${commentId}`;
  const deletedComment = await Api.delete(url).then(
    (response) => response.data
  );
  return deletedComment;
}

//Category
export async function createCategoryAPI(category) {
  const { name } = category;
  const url = `category`;
  const newCategory = await Api.post(url, { name }).then(
    (response) => response.data
  );
  return newCategory;
}

export async function getCategoryAPI() {
  const url = `category`;
  const categories = await Api.get(url).then((response) => response.data);
  return categories;
}
export async function getCategoryByIdAPI(categoryId) {
  const url = `category/${categoryId}`;
  const categories = await Api.get(url).then((response) => response.data[0]);
  return categories;
}
export async function updateCategoryAPI(category, categoryId) {
  const { name } = category;
  const url = `category/${categoryId}`;
  const updatedCategory = await Api.put(url).then((response) => response.data);
  return updatedCategory;
}

export async function deleteCategoryAPI(categoryId) {
  const url = `category/${categoryId}`;
  const deletedCategory = await Api.delete(url).then(
    (response) => response.data
  );
  return deletedCategory;
}

import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export function registerApi(userDatas) {
  const { lastname, firstname, email, password } = userDatas;
  const url = 'user/register';
  const results = Api.post(url, { lastname, firstname, email, password }).then(
    (response) => response.data
  );

  return results;
}

export async function loginApi(userLog) {
  const { email, password } = userLog;
  const url = 'user/login';
  const results = await Api.post(url, { email, password });
  return results;
}
export async function logOutApi() {
  const url = 'user/logout';
  const results = await Api.post(url);
  return results;
}
export async function getPosts() {
  const url = 'post';
  const allPosts = await Api.get(url);
  return allPosts.data;
}

export async function getOnePost(postId) {
  const url = `post/${postId}`;
  const onePost = await Api.get(url);
  return onePost.data[0];
}

export async function createOnePostAPI(post) {
  const { title, content, category, picture } = post;
  const url = `post`;
  const createdPost = await Api.post(url, {
    title,
    content,
    category,
    picture,
  });
  return createdPost.data[0];
}

export async function updateOnePostAPI(post) {
  const { title, content, category, picture } = post;
  const url = `post`;
  const createdPost = await Api.put(url, {
    title,
    content,
    category,
    picture,
  });
  return createdPost.data[0];
}
export async function deleteOnePostAPI(post) {
  const { title, content, category, picture } = post;
  const url = `post`;
  const deletedPost = await Api.put(url, {
    title,
    content,
    category,
    picture,
  });
  return deletedPost.data[0];
}

export async function getCommentFromPostAPI(postId) {
  const url = `comment/post/${postId}`;
  const comment = await Api.get(url);
  return comment.data;
}

export async function getCommentByIdAPI(commentId) {
  const url = `comment/${commentId}`;
  const comment = await Api.get(url);
  return comment.data;
}

export async function createCommentAPI(comment, postId) {
  const { content } = comment;
  const url = `comment/${postId}`;
  const newComment = await Api.post(url, { content });
  return newComment.data;
}
export async function updateCommentAPI(comment, postId) {
  const { content } = comment;
  const url = `comment/${postId}`;
  const updatedComment = await Api.put(url, { content });
  return updatedComment.data;
}

export async function deleteCommentAPI(commentId) {
  const url = `comment/${commentId}`;
  const deletedComment = await Api.delete(url);
  return deletedComment.data;
}

export async function createCategoryAPI(category) {
  const { name } = category;
  const url = `category`;
  const newCategory = await Api.post(url, { name });
  return newCategory.data;
}

export async function getCategoryAPI() {
  const url = `category`;
  const categories = await Api.get(url);
  return categories.data;
}

export async function updateCategoryAPI(category, categoryId) {
  const { name } = category;

  const url = `category/${categoryId}`;
  const updatedCategory = await Api.put(url);
  return updatedCategory.data;
}

export async function deleteCategoryAPI(categoryId) {
  const url = `category/${categoryId}`;
  const deletedCategory = await Api.delete(url);
  return deletedCategory.data;
}

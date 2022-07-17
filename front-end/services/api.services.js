import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export function registerApi(userDatas) {
  const { lastname, firstname, email, password } = userDatas;
  const url = 'users/register';
  const results = Api.post(url, { lastname, firstname, email, password }).then(
    (response) => response.data
  );

  return results;
}

export async function loginApi(userLog) {
  const { email, password } = userLog;
  const url = 'users/login';
  const results = await Api.post(url, { email, password });
  return results;
}

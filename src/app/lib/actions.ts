'use server';

import axios from 'axios';

interface User {
    username: string;
    password: string;
}

export async function fetchProxy(url: string, body: User) {
  const fullUrl = `${process.env.API_URL}${url}`;
  console.log(fullUrl, body);
  const res = await axios.post(fullUrl, body);
  console.log(res);

  return {
    code: 0,
    msg: 'hello',
  };
}

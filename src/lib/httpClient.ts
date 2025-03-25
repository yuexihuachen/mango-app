import axios from 'axios';
import Cookies from 'js-cookie';
import { Response, At } from '~/types';

// axios instance
const httpRequest = axios.create({
  baseURL: process.env.API_URL,
  timeout: 15000,
});

const refreshUserToken = () => {
  const url = `${process.env.API_URL}/refresh`;
  const rt = Cookies.get('rt')
  return httpRequest
    .post(url, {
      rt
    })
    .then(res => {
      return res
    })
}

const errorHandler = (error) => {
  /* eslint-disable */
  let errorMessage: any = {}
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    errorMessage = error.response
  } else {
    // The request was made but no response was received
    // Server api exception && Redirection exception
    errorMessage.data = {
      message: 'ERROR',
      errorCode: 'OTHERS',
    }
  }
  return Promise.resolve(errorMessage)
}

httpRequest.interceptors.request.use(function(config) {
  const at = Cookies.get('at');
  config.headers['Authorization'] = `Bearer ${at?at:''}`;

  return config
}, errorHandler)

httpRequest.interceptors.response.use(
  res => {
    if ([200, 201].includes(res.status)) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  async error => {
    const res = error.response
    // after token expired to refresh token
    if (res && res.data && res.data.msg === 'INVALID_ACCESS_TOKEN') {
      const refreshTokenResponse = await refreshUserToken() as unknown as Response<At>
      if (refreshTokenResponse.code !== 0) {
        Cookies.remove('at');
        Cookies.remove('rt');
        window.location.href = '/signin'
      } else {
        Cookies.set('at', refreshTokenResponse.data.at, { expires: 1 });
      }
      return Promise.resolve(refreshTokenResponse)
    }
    return errorHandler(error)
  },
)

export default httpRequest

import axios, { AxiosError } from 'axios';
import { Response, AccessToken } from '@/types';
import {docCookies} from '@/utils/utils';

// axios instance
const httpRequest = axios.create({
  baseURL: '/',
  timeout: 15000,
});

const refreshUserToken = () => {
  const url = `/refresh`;
  return httpRequest
    .post(url, {
      rt: docCookies.getItem('rt')
    })
    .then(res => {
      if (res?.msg === "INVALID_REFRESH_TOKEN") {
        window.history.pushState({}, '/signin');
        window.history.go();
      }
      return res;
    })
}

const errorHandler = (error: AxiosError) => {
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
  config.headers['Authorization'] = `Bearer ${docCookies.getItem('at')}`;
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
      const refreshTokenResponse = await refreshUserToken() as unknown as Response<AccessToken>
      if (refreshTokenResponse.code === 0) {
        return httpRequest.request(res.config)
      }
      return Promise.resolve(refreshTokenResponse)
    }
    return errorHandler(error)
  },
)

export default httpRequest

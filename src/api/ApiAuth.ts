import axios, {AxiosResponse, AxiosRequestConfig} from 'axios'
import Cookies from 'js-cookie'

import {url as API_URL} from './index'
import {IAuthResponse} from '../common/types/authResponseTypes'

export const $api = axios.create({
  baseURL: API_URL,
})

export const TOKEN_EXPIRATION_TIME =
  new Date(new Date().getTime() + 30 * 60 * 1000)

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  }
  return config
})

$api.interceptors.response.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<IAuthResponse>(
          `${API_URL}/users/refreshUser`,
          {
            withCredentials: true
          }
        )
        Cookies.set(
          'token',
          response.data.accessToken,
          {expires: TOKEN_EXPIRATION_TIME}
        )
        Cookies.set(
          'refreshToken',
          response.data.refreshToken,
          {expires: TOKEN_EXPIRATION_TIME}
        )
        return $api.request(originalRequest)
      } catch (e) {
        console.log('is not authorized!')
      }
    }
    throw error
  }
)

export const ApiAuth = {
  async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/users/auth', {
      email,
      password
    })
  },

  async register(
    name: string,
    secondname: string,
    email: string,
    password: string,
    phone: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/users/register', {
      name,
      secondname,
      email,
      password,
      phone
    })
  },

  async logout(): Promise<void> {
    return $api.post('/users/logout')
  },
}

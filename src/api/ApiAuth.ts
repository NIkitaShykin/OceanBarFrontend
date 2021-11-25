import axios, {AxiosResponse, AxiosRequestConfig} from 'axios'
import Cookies from 'js-cookie'

import {url as API_URL} from './index'
import {IAuthResponse} from '../common/types/authResponseTypes'

export const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL
})

export const inThirtyMinutes = new Date(new Date().getTime() + 30 * 60 * 1000)

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  }
  return config
})

$api.interceptors.response.use((config: AxiosRequestConfig) => {
  return config
}, (async (error) => {
  const originalRequest = error.config
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true
    try {
      const response = await axios.get<IAuthResponse>(
        `${API_URL}/users/refreshUser`,
        // {withCredentials: true}
      )
      Cookies.set(
        'token',
        response.data.accessToken,
        {expires: inThirtyMinutes}
      )
      return $api.request(originalRequest)
    } catch (error) {
      console.log('is not authorized!')
    }
  }
  throw error
})
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
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/users/register', {
      email,
      password
    })
  },

  async logout(): Promise<void> {
    return $api.post('/users/logout')
  },
}

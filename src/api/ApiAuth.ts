import {IAuthResponse} from '../common/types/authResponseTypes'
import axios, {AxiosResponse} from 'axios'
import Cookies from 'js-cookie'

// export const API_URL = 'http://13.51.224.150:3000/api'
export const API_URL = 'http://localhost:3001/api'

export const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config: any) => { // AxiosRequestConfig
  config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  return config
})

$api.interceptors.response.use((config: any) => {
  return config
}, (async (error) => {
  const originalRequest = error.config
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true
    try {
      const response = await axios.get<IAuthResponse>(
        `${API_URL}/refresh`,
        {withCredentials: true}
      )
      Cookies.set('token', response.data.accessToken, {expires: 30})
      return $api.request(originalRequest)
    } catch (error) {
      console.log('is not authorized!')
    }
  }
  throw error
})
)

export const ApiAuth = {
  // eslint-disable-next-line max-len
  async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/users/auth', {
      email,
      password
    })
  },

  // eslint-disable-next-line max-len
  async register(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/users/registration', {
      email,
      password
    })
  },

  async logout(): Promise<void> {
    return $api.post('/users/logout')
  },
}

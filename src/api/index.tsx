import axios from 'axios'
export const url = 'http://16.170.196.85/api/'
export const instance = axios.create({
  baseURL: `http://16.170.196.85/api/`,
})

export const API = {
  getAllDish() {
    return instance.get('menu/')
  },
}

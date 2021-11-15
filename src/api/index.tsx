import axios from 'axios'
export const url = 'http://13.51.76.107/api/'
export const instance = axios.create({
  baseURL: `http://13.51.76.107/api/`,
})

export const API = {
  getAllDish() {
    return instance.get('menu/')
  },
}

import axios from 'axios'

export const url = 'http://13.51.224.150:3000/api'

export const instance = axios.create({
  baseURL: url,
})

export const API = {
  getAllDish() {
    return instance.get('menu/')
  },
}

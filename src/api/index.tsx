export const url: string = 'http://13.51.224.150:3000/api'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.51.224.150:3000/'
})

export const API = {
  getAllDish() {
    return instance.get('api/menu/')
  },
}

import axios from 'axios'

export const url = 'http://13.53.248.177/api'


export const instance = axios.create({
  baseURL: url,

})

export const API = {
  getAllDish() {
    return instance.get('menu/')
  },
}

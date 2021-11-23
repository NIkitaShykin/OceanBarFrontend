import axios from 'axios'

export const url = 'http://13.51.130.234/api'


export const instance = axios.create({
  baseURL: url,

})

export const API = {
  getAllDish() {
    return instance.get('menu/')
  },
}

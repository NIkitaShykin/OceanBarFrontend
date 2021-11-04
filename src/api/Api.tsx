import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.49.241.158:3000/',
})


export const API = {
  getAllDish() {
    const promise = instance.get('api/menu/')
    return promise
  }
}

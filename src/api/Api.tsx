import axios from 'axios'

const instance = axios.create({
  baseURL: ' http://13.51.224.150:3000/',
})


export const API = {
  getAllDish() {
    const promise = instance.get('api/menu/')
    return promise
  }
}

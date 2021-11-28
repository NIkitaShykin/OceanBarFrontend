import axios from 'axios'

<<<<<<< Updated upstream
// export const url = 'http://13.51.224.150:3000/api'
export const url = 'http://localhost:3001/api'
=======
export const url = 'http://localhost:3001/api'

>>>>>>> Stashed changes

export const instance = axios.create({
  baseURL: url,
})

export const API = {
  getAllDish() {
    return instance.get('menu/')
  },
}

import axios from 'axios'
import {url as baseURL} from './index'
import Cookies from 'js-cookie'
const token = Cookies.get('token')

const instance = axios.create({
  baseURL
})

export const ApiAdmin = {
  getNewDishImgFileUrl(file?:any) {
    {
      return Promise.resolve(
        instance.post('menu/image', file,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
      )
    }
  },
  setNewDish(newDish:any) {
    console.log(newDish)
    {
      return Promise.resolve(
        instance.post('menu/', newDish,
          {headers: {Authorization: `Bearer ${token}`}}
        )
      )
    }
  },
  deleteDish(dishId:number) {
    {
      return Promise.resolve(
        instance.delete(`menu/${dishId}`,
          {headers: {Authorization: `Bearer ${token}`}}
        )
      )
    }
  }
}

// / eslint-disable react/jsx-no-comment-textnodes /
import axios, {AxiosResponse} from 'axios'
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {url} from '../../../../api'
import {Form, Button, FormControl} from 'react-bootstrap'
import './search.scss'

type Dish = {
  id: string,
  name: string,
  price: number,
  weight: string
  calories: string
  imageURL: string
  ingredients: string,
  dishCategory: string
}

type ResponseType = {data:{data:{dishes:Array<Dish>}}}

/ tslint:disable /
const SearchField = () => {
  const history = useHistory()

  const [dishes, setMenu] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getMenu = async () => {
      const response: ResponseType = await axios.get(`${url}/menu/?name=${searchTerm}`)
      setMenu(response.data.data.dishes)     
    }
    getMenu()
  }, [searchTerm])


  useEffect(() => {
    if (searchTerm) {
      setIsOpen(true)

      const filteredDishes = dishes.filter((dish: Dish) => {
        // eslint-disable-next-line max-len
        return dish.name.toLowerCase().includes(searchTerm.toLowerCase())
      })

      setMenu(filteredDishes)
    } else {
      setIsOpen(false)
    }
  }, [searchTerm])


  const itemClickHandler = (id: string) => {
    const newDish = dishes.find((dish: Dish) => dish.id === id)
    setSearchTerm('')
    setIsOpen(!isOpen)
    history.push(`/menu/dishes/id `)
    // eslint-disable-next-line max-len
    // history.push(`/${newDish.name}`)  // оставить, пока не будет работающего пути к блюду
  console.log(newDish);
  
  }

  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos '>
        <FormControl
          type='text'
          placeholder='Search...'
          className='form-control-pad nav-input '
          aria-label='Search'
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />

        {isOpen && (
          <ul className='autocomplete'>
            {dishes.map((val: Dish, index: number) => {
              return <li
                key={index}
                className='autocomplete__item'
                onClick={() => itemClickHandler(val.id)}
              >
                {val.name}
              </li>
            })}
          </ul>
        )}

        <Button variant='link'
          className=' btn-input'>
          <i className='fas fa-search icon-height search-icon'></i>
        </Button>
      </Form>
    </>
  )
}

export default SearchField

/* eslint-disable react/jsx-no-comment-textnodes */
import axios, {AxiosResponse} from 'axios'
import React, {useEffect, useRef, useState} from 'react'
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

/* tslint:disable */
const SearchField = () => {
  const history = useHistory()

  const [dishes, setMenu] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const wasSearched = useRef(null)

  useEffect(() => {
    
    if (searchTerm) {
      const getMenu = async (key: string) => {
        const response: AxiosResponse = await axios.get(`${url}?name={key}`)
        // @ts-ignore
        console.log(response.data)
        // @ts-ignore
        setMenu(response.data)
      }
      getMenu(searchTerm)
    } else return null
  }, [wasSearched])


  useEffect(() => {
    if (!wasSearched.current) {
      wasSearched.current.value = searchTerm
    }
    
    if (searchTerm) {
      setIsOpen(true)

      // const filteredDishes = dishes.filter((dish: Dish) => {
      //   // eslint-disable-next-line max-len
      //   return dish.name.toLowerCase().includes(searchTerm.toLowerCase())
      // })

      // setMenu(filteredDishes)
    } else {
      setIsOpen(false)
    }
  }, [wasSearched])


  const itemClickHandler = (id: string) => {
    const newDish = dishes.find((dish: Dish) => dish.id === id)
    setSearchTerm('')
    setIsOpen(!isOpen)
    history.push(`/menu/dishes/id `)
    // eslint-disable-next-line max-len
    // history.push(`/${newDish.name}`)  // оставить, пока не будет работающего пути к блюду
  }

  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos '>
        <FormControl
          type='text'
          placeholder='Search...'
          className='form-control-pad nav-input '
          aria-label='Search'
          key={searchTerm}
          value={searchTerm}
          ref={wasSearched}
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



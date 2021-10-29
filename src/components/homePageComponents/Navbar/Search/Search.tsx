/* eslint-disable react/jsx-no-comment-textnodes */
import axios, {AxiosResponse} from 'axios'
import React, {useEffect, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {url} from '../../../../api'
import {Form, Button, FormControl} from 'react-bootstrap'
import './search.scss'
import Dish from 'src/pages/menuPage/Menu/Dishes/Dish'



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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const prepareSearchQuery = (query: string) => {
    const urlQuery = `${url}/menu?name=${query}`

    return encodeURI(urlQuery)
  }

  const searchDishName = async (query: string) => {
    setSearchQuery(query)
    if (!query || query.trim() === '') return

    setIsOpen(true)
    const URL = prepareSearchQuery(searchQuery)

    await axios.get<Dish[]>(URL).catch((err) => {
      throw new Error(err)
    })

      .then((response: any) => {
        console.log('Response:', response.data)
      
        setMenu(response.data)
      })
    
    setIsOpen(false)
  }

  // const itemClickHandler = (id: string) => {
  //   const newDish = dishes.find((dish: Dish) => dish.id === id)
  //   setSearchQuery('')
  //   setIsOpen(!isOpen)
  //   history.push(`/menu/dishes/id `)
  //   // eslint-disable-next-line max-len
  //   // history.push(`/${newDish.name}`)  // оставить, пока не будет работающего пути к блюду
  // }
// @ts-ignore
  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos '>
        <FormControl
          type='text'
          placeholder='Search...'
          className='form-control-pad nav-input '
          aria-label='Search'
          // key={searchQuery}
          value={searchQuery}
          onChange={(event) => {
            searchDishName(event.target.value)
          }}
        />

        {isOpen && (
          <ul className='autocomplete'>
            
            {dishes.map((val: Dish, index: number) => {
              return <li
                key={index}
                className='autocomplete__item'
                // onClick={() => itemClickHandler(val.id)}
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


// useEffect(() => {
  //   if (!wasSearched.current) {
  //     wasSearched.current.value = searchTerm
  //   }
    
  //   if (searchTerm) {
  //     setIsOpen(true)

  //     // const filteredDishes = dishes.filter((dish: Dish) => {
  //     //   // eslint-disable-next-line max-len
  //     //   return dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     // })

  //     // setMenu(filteredDishes)
  //   } else {
  //     setIsOpen(false)
  //   }
  // }, [wasSearched])

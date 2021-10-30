/* eslint-disable require-jsdoc */
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {url} from '../../../../api'
import {Form, FormControl} from 'react-bootstrap'
import {useClickOutside} from 'react-click-outside-hook'
import useDebounce from '../../../../utils/useDebounce'

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

const SearchField = () => {
  const history = useHistory()

  const [dishes, setMenu] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const noQuery = searchQuery && searchQuery.length === 0
  const isEmpty = !dishes || dishes.length === 0
  const [ref, isClickedOutside] = useClickOutside()
  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  // const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getMenu = async (query: string) => {
      setSearchQuery(query)
      setIsOpen(true)
      if (!query || query.trim() === '') return
      // setIsLoading(true)

      // eslint-disable-next-line max-len
      const response: ResponseType = await axios.get(`${url}/menu/?name=${searchQuery}`)
      setMenu(response.data.data.dishes)
    }
    getMenu(debouncedSearchQuery)
    setIsOpen(false)
    // setIsLoading(false)
  }, [debouncedSearchQuery])

  useEffect(() => {
    if (searchQuery) {
      setIsOpen(true)
      // setIsLoading(true)
      const filteredDishes = dishes.filter((dish: Dish) => {
        // eslint-disable-next-line max-len
        return dish.name.toLowerCase().includes(searchQuery.toLowerCase())
      })

      setMenu(filteredDishes)
    } else {
      setIsOpen(false)
      // setIsLoading(false)
    }
  }, [debouncedSearchQuery])

  useEffect(() => {
    if (isClickedOutside) {
      setIsOpen(false)
      setSearchQuery('')
    }
  }, [isClickedOutside])

  const itemClickHandler = (id: string) => {
    const newDish = dishes.find((dish: Dish) => dish.id === id)
    setSearchQuery('')
    setIsOpen(!isOpen)
    history.push(`/menu/dishes/id `)
    // eslint-disable-next-line max-len
    // history.push(`/${newDish.name}`)  // оставить, пока не будут подгружены блюда с бэка 
    console.log(newDish)
  }

  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos justify-content-end'
        ref={ref}>
        <FormControl
          type='text'
          placeholder='Search...'
          className='form-control-pad nav-input '
          aria-label='Search'
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value)
          }}
        />
        {noQuery && (
          <ul className='autocomplete autocomplete-warn'>
              Начните вводить название блюда
          </ul>)}

        {isOpen && isEmpty && (
          <ul className='autocomplete autocomplete-warn'>
              Совпадений не найдено
          </ul>)}

        {isOpen && !isEmpty &&(
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

        <i className='fas fa-search icon-height search-icon'></i>
      </Form>
    </>
  )
}

export default SearchField



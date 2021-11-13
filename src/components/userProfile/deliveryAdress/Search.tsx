import axios from 'axios'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form, FormControl} from 'react-bootstrap'
import {useClickOutside} from 'react-click-outside-hook'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {ApiDelivery} from '../../../api/ApiDelivery'

import useDebounce from '../../../utils/useDebounce'
import Spinner from '../../Spinner/Spinner'

import './search.scss'
import {url} from '../../../api/index'

type Dish = {
  id: string
  name: string
  price: number
  weight: string
  calories: string
  imageURL: string
  ingredients: string
  dishCategory: string
}

type ResponseType = {
  data: {
    data: {
      dishes: Array<Dish>
    }
  }
}

const SearchField = () => {
  const [ref, isClickedOutside] = useClickOutside()

  const [dishes, setMenu] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const noQuery = searchQuery && searchQuery.length === 0
  const isEmpty = !dishes || dishes.length === 0

  const debouncedSearchQuery = useDebounce(searchQuery, 2000)

  useEffect(() => {
    const getMenu = async (query: string) => {
      setSearchQuery(query)
      setIsOpen(true)
      setIsLoading(true)
      if (!query || query.trim() === '') return

      const response: any = await
      ApiDelivery.getDelivery(searchQuery)
      // axios.get(
      //   `${url}menu/?name=${searchQuery}`
      // )
      setIsLoading(false)

      console.log('первый ')
      console.log(response.data.suggestions)
      console.log('-----------------------------')


      setMenu(response.data.suggestions)
    }
    getMenu(debouncedSearchQuery)
    setIsOpen(false)
  }, [debouncedSearchQuery])

  console.log('вне эффекта ')
  console.log(dishes)
  console.log('-----------------------------')


  useEffect(() => {
    if (searchQuery) {
      setIsOpen(true)
      setIsLoading(true)
      const filteredDishes = dishes.filter((dish: any) =>
        dish.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
      console.log('второй ')
      console.log(dishes)
      console.log(filteredDishes)
      console.log('-----------------------------')

      setMenu(filteredDishes)
    } else {
      setIsOpen(false)
      setIsLoading(false)
    }
  }, [debouncedSearchQuery])

  useEffect(() => {
    console.log('33333')
    if (isClickedOutside) {
      setIsOpen(false)
      setSearchQuery('')
      setIsLoading(false)
    }
  }, [isClickedOutside])

  const itemClickHandler = (value: any) => {
    // dishes.find((dish: Dish) => dish.id === id)
    console.log('selected')
    console.log(value)
    setSearchQuery('')
    setIsOpen(false)
  }

  return (
    <>
      <Form ref={ref}>
        <input
          placeholder='Улица'
          name='search'
          type='text'
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)} />

        {isLoading && <Spinner />}
        {noQuery && isEmpty && isOpen && (
          <ul className='autocomplete autocomplete-warn'>
            Начните вводить название улицы
          </ul>
        )}

        {isOpen && isEmpty && !isLoading && (
          <ul className='autocomplete autocomplete-warn'>
            Совпадений не найдено для &quot;{debouncedSearchQuery}&quot;
          </ul>
        )}

        {isOpen && !isEmpty && !isLoading && (
          <ul >
            {dishes.map((adress: any, index: number) => {
              return (
                <li
                  key={index}
                  onClick={() => itemClickHandler(adress)}
                >
                  {adress.value}
                </li>
              )
            })}
          </ul>
        )}
      </Form>
    </>
  )
}

export default SearchField

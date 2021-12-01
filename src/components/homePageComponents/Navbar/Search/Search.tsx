import axios from 'axios'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form, FormControl} from 'react-bootstrap'
import {useClickOutside} from 'react-click-outside-hook'

import useDebounce from '../../../../utils/useDebounce'
import Spinner from '../../../Spinner/Spinner'
import {url} from '../../../../api'

import './search.scss'


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
  const history = useHistory()
  const [ref, isClickedOutside] = useClickOutside()

  const [dishes, setMenu] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const noQuery = searchQuery && searchQuery.length === 0
  const isEmpty = !dishes || dishes.length === 0

  const debouncedSearchQuery = useDebounce(searchQuery, 1000)

  useEffect(() => {
    const getMenu = async (query: string) => {
      setSearchQuery(query)
      setIsOpen(true)
      setIsLoading(true)
      if (!query || query.trim() === '') return

      const response: ResponseType = await axios.get(
        `${url}/menu/?name=${searchQuery}`
      )
      setIsLoading(false)
      setMenu(response.data.data.dishes)
    }
    getMenu(debouncedSearchQuery)
    setIsOpen(false)
  }, [debouncedSearchQuery])

  useEffect(() => {
    if (searchQuery) {
      setIsOpen(true)
      setIsLoading(true)
      const filteredDishes = dishes.filter((dish: Dish) =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
      )

      setMenu(filteredDishes)
    } else {
      setIsOpen(false)
      setIsLoading(false)
    }
  }, [debouncedSearchQuery])

  useEffect(() => {
    if (isClickedOutside) {
      setIsOpen(false)
      setSearchQuery('')
      setIsLoading(false)
    }
  }, [isClickedOutside])

  const itemClickHandler = (id: string) => {
    dishes.find((dish: Dish) => dish.id === id)
    setSearchQuery('')
    setIsOpen(false)
    history.push(`/dishes/${id} `)
  }

  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos' ref={ref}>
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

        {isLoading && <Spinner />}
        {noQuery && isEmpty && isOpen && (
          <ul className='autocomplete autocomplete-warn'>
            Начните вводить название блюда
          </ul>
        )}

        {isOpen && isEmpty && !isLoading && (
          <ul className='autocomplete autocomplete-warn'>
            Совпадений не найдено для &quot;{debouncedSearchQuery}&quot;
          </ul>
        )}

        {isOpen && !isEmpty && !isLoading && (
          <ul className='autocomplete'>
            {dishes.map((val: Dish, index: number) => {
              return (
                <li
                  key={index}
                  className='autocomplete__item'
                  onClick={() => itemClickHandler(val.id)}
                >
                  {val.name}
                </li>
              )
            })}
          </ul>
        )}

        <i className='fas fa-search icon-height search-icon'></i>
      </Form>
    </>
  )
}

export default SearchField

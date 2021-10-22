// tslint:disable
import axios, {AxiosResponse} from 'axios'
import React, {useEffect, useState} from 'react'
import {Form, Button, FormControl} from 'react-bootstrap'
import './search.scss'

/* tslint:disable */
const SearchField: React.FC = () => {

  // const [dishes, setMenu] = useState([])

  // useEffect(() => {
  //   const getMenu = async () => {
  //     const response = await axios.get(' http://localhost:3001/api/menu/')
  //     console.log(response.data.dishes.name)
  //     setMenu(response.data[dishes].name)
  //   }

  //   getMenu()
  // }, [])

  // const [value, setValue] = useState('')

  // const filteredDishes = dishes.filter((dish) => {
  //   return dish.toLowerCase().includes(value.toLowerCase())
  // })

  // const [isOpen, setIsOpen] = useState(true)

  // const itemClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value)
  //   setIsOpen(!isOpen)
  // }

  // const inputClickHandler = () => {
  //   setIsOpen(true)
  // }

  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos '>
        <FormControl
          // {...dishes}
          type='text'
          placeholder='Search...'
          className='form-control-pad nav-input '
          aria-label='Search'
          // value={value}
          // onChange={(event) => setValue(event.target.value)}
          // onClick={inputClickHandler}
        />
        {/* <ul className='autocomplete'>
          {
            value && isOpen ? filteredDishes.map((dish: string, index) => {
              return (
                <li
                  key={index}
                  dish={dish}
                  className='autocomplete-item'
                  onClick={() => itemClickHandler}>
                  {dish.names}
                </li>
              )
            }) : null
          }
        </ul> */}
        <Button variant='link'
          className=' btn-input'>
          <i className='fas fa-search icon-height search-icon'></i>
        </Button>
      </Form>
    </>
  )
}

export default SearchField


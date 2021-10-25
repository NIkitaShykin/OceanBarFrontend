/* eslint-disable react/jsx-no-comment-textnodes */
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Form, Button, FormControl} from 'react-bootstrap'
import './search.scss'

/* tslint:disable */
const SearchField = () => {
  const [dishes, setMenu] = useState([])

  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(' http://localhost:3001/api/menu/')
      // @ts-ignore
      console.log(response.data.data.dishes)
      // @ts-ignore
      setMenu(response.data.data.dishes)
    }

    getMenu()
  }, [])

  // const [value, setValue] = useState('')

  // const filteredDishes = dishes.filter((dish) => {
  //   return dish.includes(value.toLowerCase())
  // })

  // const [isOpen, setIsOpen] = useState(true)

  // const itemClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value)
  //   setIsOpen(!isOpen)
  // }

  // const itemClickHandler = () => {
  //   setIsOpen(true)
  // }

  // const [searchTerm, setSearchTerm] = useState['']

  return (
    <>
      <Form className='d-flex mx-6 d-flex-pos '>
        <FormControl
          // {...dishes, name}
          type='text'
          placeholder='Search...'
          className='form-control-pad nav-input '
          aria-label='Search'
          // value={searchTerm}
          // onChange={(event) => {
          //   setSearchTerm(event.target.value)
          // }}
          // onClick={inputClickHandler}
        />


        <ul className='autocomplete'>

          {dishes.map((val, index) => {
            // @ ts-ignore
            return <li
              key={index}
              className='autocomplete__item'
              // onClick={() => itemClickHandler}
            >
              {val.name}
            </li>
          })}
        </ul>
        
        <Button variant='link'
          className=' btn-input'>
          <i className='fas fa-search icon-height search-icon'></i>
        </Button>
      </Form>
    </>
  )
}

export default SearchField




// {/* <ul className='autocomplete'>
//           {dishes
//           //   .filter((val) => {
//           //   if (searchTerm == '') {
//           //     return val
//           //   // eslint-disable-next-line max-len
//           // eslint-disable-next-line max-len
//           //   } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//           //     return val
//           //   }
//           // })
//             // .map((val, index) => {
//             //   // @ ts-ignore
//             //   return <li
//             //     key={index}
//             //     className='autocomplete__item'
//             //     // onClick={() => itemClickHandler}
//             //   >
//             //     {val.name}
//             //   </li>
//             // })}

//           {/* {
//             value && isOpen ? filteredDishes.map((dish, index) => {
//               return (
//                 <li
//                   key={index}
//                   // @ts-ignore
//                   dish={dish}
//                   className='autocomplete-item'
//                   onClick={() => itemClickHandler}>

//                   {dish.name}
//                 </li>
//               )
//             }) : null
//           } */}
//         {/* </ul> */} */}
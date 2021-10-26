/* eslint-disable react/jsx-no-comment-textnodes */
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

/* tslint:disable */
const SearchField = () => {
  const history = useHistory()

  const [dishes, setMenu] = useState<Dish[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getMenu = async () => {
      const response: AxiosResponse = await axios.get(`${url}/menu/`)
      // @ts-ignore
      // console.log(response.data.data.dishes)
      // @ts-ignore
      setMenu(response.data.data.dishes)
    }
    getMenu()
  }, [])


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
    // history.push(`/${newDish.name}`)
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
          // onClick={inputClickHandler}
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





// /* tslint:disable */
// const SearchField = () => {
//   const [dishes, setMenu] = useState([])

//   useEffect(() => {
//     const getMenu = async () => {
//       const response: AxiosResponse = await axios.get(`${url}/menu/`)
//       // @ts-ignore
//       console.log(response.data.data.dishes)
//       // @ts-ignore
//       setMenu(response.data.data.dishes)
//     }

//     getMenu()
//   }, [])


//   // const filteredDishes = dishes.filter((dish) => {
//   //   return dish.includes(value.toLowerCase())
//   // })

//   // const [isOpen, setIsOpen] = useState(true)

//   // const itemClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setSearchTerm(e.target.value)
//   //   setIsOpen(!isOpen)
//   // }

//   // const itemClickHandler = () => {
//   //   setIsOpen(true)
//   // }

//   const [searchTerm, setSearchTerm] = useState('')

//   return (
//     <>
//       <Form className='d-flex mx-6 d-flex-pos '>
//         <FormControl
//           {...dishes, name}
//           type='text'
//           placeholder='Search...'
//           className='form-control-pad nav-input '
//           aria-label='Search'
//           value={searchTerm}
//           onChange={(event) => {
//             setSearchTerm(event.target.value)
//           }}
//           // onClick={inputClickHandler}
//         />


//         <ul className='autocomplete'>
//         // @ ts-ignore
//           {dishes.map((val: {}, index: number) => {
//             // @ ts-ignore
//             return <li
//               key={index}
//               className='autocomplete__item'
//               // onClick={() => itemClickHandler}
//             >
//               {val.name}
//             </li>
//           })}
//         </ul>

//         <Button variant='link'
//           className=' btn-input'>
//           <i className='fas fa-search icon-height search-icon'></i>
//         </Button>
//       </Form>
//     </>
//   )
// }

// export default SearchField




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

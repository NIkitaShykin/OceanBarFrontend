import {ChangeEvent, FocusEvent, useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {useClickOutside} from 'react-click-outside-hook'
import {useSelector} from 'react-redux'

import {DeliveryAdressType, UserType} from '../../common/types/userTypes'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {ApiDelivery} from '../../api/ApiDelivery'
import useDebounce from '../../utils/useDebounce'
import Spinner from '../Spinner/Spinner'

import './searchStreet.scss'


type PropsType = {
  required?: boolean,
  searchValue: (value:string) => void,
  isInvalid?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
}

const SearchField = (props:PropsType) => {
  const [ref, isClickedOutside] = useClickOutside()

  const user = useSelector<AppStoreType, UserType & DeliveryAdressType>(
    (state) => state.user.userProfile)

  const [adress, setAdress] = useState<DeliveryAdressType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const noQuery = !searchQuery && searchQuery.length === 0
  const isEmpty = !adress || adress.length === 0
  const [street, setStreet] = useState(`${user.street}`)
  const debouncedSearchQuery = useDebounce(searchQuery, 1000)

  useEffect(() => {
    const getData = async (query: string) => {
      setSearchQuery(query)
      setIsOpen(true)
      setIsLoading(true)
      if (!query || query.trim() === '') return

      const response: {data:any} = await
      ApiDelivery.getDelivery(searchQuery)
      setIsLoading(false)
      setAdress(response.data.suggestions)
    }
    getData(debouncedSearchQuery)
    setIsOpen(false)
  }, [debouncedSearchQuery])

  useEffect(() => {
    if (searchQuery) {
      setIsOpen(true)
      setIsLoading(true)
      const filteredAdress = adress.filter((adress: any) =>
        adress.value.toLowerCase().includes(searchQuery.toLowerCase())
      )

      setAdress(filteredAdress)
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

  const itemClickHandler = (value: string) => {
    props.searchValue(value)
    setStreet(value)
    setSearchQuery('')
    setIsOpen(false)
  }

  return (
    <>
      <Form ref={ref}>
        <Form.Control
          placeholder={street}
          name='search'
          type='text'
          defaultValue={searchQuery}
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
          <ul className={'autocomplete'}>
            {adress.map((adress:any, index: number) => {
              const temp=adress.value.split(' ')
              return (
                <li className={'autocomplete__item'}
                  key={index}
                  onClick={() => itemClickHandler(temp[1])}
                >
                  {temp[1]}
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

import {useEffect, useState} from 'react'
import {Form} from 'react-bootstrap'
import {useClickOutside} from 'react-click-outside-hook'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {ApiDelivery} from '../../../api/ApiDelivery'
import useDebounce from '../../../utils/useDebounce'
import Spinner from '../../Spinner/Spinner'

import './search.scss'

type PropsType = {
  required?: boolean,
  searchValue: (value:string) => void,
  isInvalid?: boolean,
  onChange?: any,
  onBlur?: any,
}

const SearchField = (props:PropsType) => {
  const [ref, isClickedOutside] = useClickOutside()

  const [adress, setAdress] = useState<DeliveryAdressType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [street, setStreet] = useState('Улица')

  const noQuery = searchQuery && searchQuery.length === 0
  const isEmpty = !adress || adress.length === 0

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
          style={{borderRadius: '4px'}}
          placeholder={street}
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

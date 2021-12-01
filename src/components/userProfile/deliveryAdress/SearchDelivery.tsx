import {useEffect, useState, ChangeEvent, FocusEvent} from 'react'
import {Form} from 'react-bootstrap'
import {useClickOutside} from 'react-click-outside-hook'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {ApiDelivery} from '../../../api/ApiDelivery'
import useDebounce from '../../../utils/useDebounce'
import Spinner from '../../Spinner/Spinner'
import './searchDelivery.scss'

type PropsType = {
  searchValue: (value:string) => void
  currentValue:string
  required?: boolean,
  isInvalid?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
}

const SearchDelivery = (props:PropsType) => {
  const [ref, isClickedOutside] = useClickOutside()

  const [adress, setAdress] = useState<DeliveryAdressType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    setSearchQuery('')
    setIsOpen(false)
  }

  return (
    <>
      <Form className='mx-6 d-flex-pos justify-content-end' ref={ref}>
        <label htmlFor='search' className='street-lable'>Улица</label>
        <Form.Control
          placeholder={props.currentValue}
          required
          name='search'
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />

        {isLoading && <Spinner />}
        {isEmpty && isOpen && (
          <ul className='autocomplete_delivery autocomplete-warn'>
            Начните вводить название улицы
          </ul>
        )}

        {isOpen && isEmpty && !isLoading && (
          <ul className='autocomplete_delivery autocomplete-warn'>
            Совпадений не найдено для &quot;{debouncedSearchQuery}&quot;
          </ul>
        )}

        {isOpen && !isEmpty && !isLoading && (
          <ul
            className='autocomplete_delivery'
          >
            {adress.map((adress:any, index: number) => {
              const temp=adress.value.split(' ')
              return (
                <li
                  className='autocomplete__item_delivery'
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

export default SearchDelivery

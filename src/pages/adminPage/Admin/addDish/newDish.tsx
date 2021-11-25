import React, {useState, ChangeEvent} from 'react'
import {useSelector} from 'react-redux'
// import DatePicker from 'react-date-picker'
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap'
import {AppStoreType} from '../../../../redux/reducers/rootReducer'
import {ValidationType} from '../../../../common/types/userTypes'
import {useValidation} from '../../../../utils/validation'
import {UserType} from '../../../../common/types/userTypes'
import AddIngridients from './AddIngredients'
// import {bookingOrderType} from '../../../../common/types/bookingTypes'
import './newDishForms.scss'


interface IReserveATableFormProps {
  handleNewDishData: (newDish: any) => void
}

const ReserveATableForm: React.FC<IReserveATableFormProps> =
  ({handleNewDishData}) => {
    const user =
     useSelector<AppStoreType, UserType>((state) => state.user.userProfile)

    const [dishName, setDishName] = useState<string>('')
    const [dishPrice, setDishPrice] = useState<number>()
    const [dishWeight, setDishWeight] = useState<number>()
    const [dishCalories, setDishCalories] = useState<number>()
    const [dishIngredients, setDishIngredients] =
     useState<Array<string>>(['', '', '', ''])
    const [dishCategory, setDishCategory] = useState<string>('')
    // const [tableSize, setTableSize] = useState<number>(2)
    // const [isTimeInputSkipped,
    // setTimeInputSkipped] = useState<boolean>(false)
    // const [isTableInputSkipped,
    // setTableInputSkipped] = useState<boolean>(false)

    const useInput = (initialValue: string, validations: ValidationType) => {
      const [value, setValue] = useState(initialValue)
      const [isDirty, setDirty] = useState(false)
      const valid = useValidation(value, validations)

      const onChange = (e: any) => {
        setValue(e.target.value)
      }

      const onBlur = (e: any) => {
        setDirty(true)
      }

      return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
      }
    }

    // const table = useInput('', {isEmpty: true})
    // const time = useInput('', {isEmpty: true})

    const phoneNumber = useInput(`${user.phone}`, {
      isEmpty: true,
      phoneNumberError: true,
    })

    const userName = useInput(`${user.name}`, {
      isEmpty: true,
      firstNameError: true,
      minLengthError: 2,
      maxLengthError: 30,
    })

    const inputDishName=(e: any)=>{
      setDishName(e.target.value)
    }

    const inputDishPrice=(e: any)=>{
      setDishPrice(+e.target.value)
    }

    const inputDishWeight=(e: any)=>{
      setDishWeight(+e.target.value)
    }

    const inputDishCalories=(e: any)=>{
      setDishCalories(+e.target.value)
    }

    const inputDishIngredients=(e: any, id: number)=>{
      const copyIngredients=[...dishIngredients]
      copyIngredients[id]=e.target.value
      setDishIngredients(copyIngredients)
    }

    const addIngredientsField=(e: any)=>{
      const copyIngredients=[...dishIngredients]
      copyIngredients.push('')
      setDishIngredients(copyIngredients)
    }

    const dishCategoryArray: Array<string> = [
      'Плато', 'Салаты', 'Супы', 'Запеченные устрицы', 'Десерты'
    ]

    const isPhoneNumberInvalid = phoneNumber.isDirty &&
    (phoneNumber.isEmpty || phoneNumber.phoneNumberError)

    const isUserNameInvalid = (userName.firstNameError && userName.isDirty) ||
    (userName.isEmpty && userName.isDirty)

    const newDish={
      name2: dishName,
      price2: dishPrice,
      weight2: dishWeight,
      calories2: dishCalories,
      imageURL: 'https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%A3%D1%81%D1%82%D1%80%D0%B8%D1%86.jpg',
      ingredients2: dishIngredients,
      dishCategory2: dishCategory,
      name: userName.value,
      phone: phoneNumber.value,
    }
    // ---------------------return-----------------------------------
    return (
      <div className='reserve-a-table-form-booking shadow'>

        <div className='form-sectionAdmin'>
          <div className='form-adminField'>

            <div className='section-header'>
              <span>Название блюда</span>
            </div>

            <Form.Control
              style={{width: '400px'}}
              id='userName'
              type='text'
              placeholder='введите название'
              value={dishName}
              // isInvalid={isUserNameInvalid}
              onChange={(e) => inputDishName(e)}
              // onBlur={(e) => userName.onBlur(e)}
            />

          </div>
        </div>

        <div className='form-sectionAdmin'>
          <div className='form-adminField'>

            <div className='section-header'>
              <span>Стоимость (рубли)</span>
            </div>

            <Form.Control
              style={{width: '400px'}}
              id='userName'
              type='number'
              placeholder='укажите стоимость блюда'
              value={dishPrice}
              // isInvalid={isUserNameInvalid}
              onChange={(e) => inputDishPrice(e)}
              onBlur={(e) => userName.onBlur(e)}
            />

          </div>
        </div>

        <div className='form-sectionAdmin'>
          <div className='form-adminField'>
            <div className='section-header'>
              <span>Вес (граммы)</span>
            </div>
            <Form.Control
              style={{width: '400px'}}
              id='userName'
              type='number'
              placeholder='укажите вес блюда'
              value={dishWeight}
              // isInvalid={isUserNameInvalid}
              onChange={(e) => inputDishWeight(e)}
              onBlur={(e) => userName.onBlur(e)}
            />
          </div>
        </div>

        <div className='form-sectionAdmin'>
          <div className='form-adminField'>
            <div className='section-header'>
              <span>Калории</span>
            </div>
            <Form.Control
              style={{width: '400px'}}
              id='userName'
              type='number'
              placeholder={'укажите калории'}
              value={dishCalories}
              // isInvalid={isUserNameInvalid}
              onChange={(e) => inputDishCalories(e)}
              onBlur={(e) => userName.onBlur(e)}
            />
          </div>
        </div>


        <div className='form-sectionAdmin'>
          <div className='form-adminField'>
            <div className='section-header'>
              <span>Категория блюда</span>
            </div>
            <FloatingLabel
              controlId='floatingSelectGrid'
              label='выбирите из списка:'
            >
              <Form.Select
                aria-label='Floating label select example'
                defaultValue='дефолт'
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setDishCategory(e.target.value)
                  // setTableInputSkipped(!e.target.value)
                }}
                // onBlur={(e) => table.onBlur(e)}
                // isInvalid={isTableInputSkipped}
              >
                {/* <option value=''></option> */}
                {dishCategoryArray.map((size, idx) => (
                  <option
                    value={size}
                    key={idx}
                  >
                    {size}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </div>
        </div>


        {/* -------------Ингридиенты---------------------- */}
        <div className='form-sectionAdmin'>
          <div className='form-adminField'>
            <div className='section-header'>
              <div>
                <span>Введите ингридиенты</span>
                <br/>
                <br/>
                <button onClick={addIngredientsField}>...больше</button>
              </div>
            </div>

            <AddIngridients
              inputDishIngredients={inputDishIngredients}
              ingredients={dishIngredients}
            />
          </div>
        </div>
        {/* --------------------------------------------- */}


        <div className='form-sectionAdmin'>
          <div className='form-separation'></div>
        </div>

        <div className='form-sectionAdmin'>
          <div className='form-adminField'>

            <div className='section-header'>
              <span>Контактные данные</span>
            </div>

            <div >


              <Form.Control
                style={{width: '400px'}}
                id='userName'
                type='text'
                placeholder='userName'
                value={userName.value}
                isInvalid={isUserNameInvalid}
                onChange={(e) => userName.onChange(e)}
                onBlur={(e) => userName.onBlur(e)}
              />

              {
                isUserNameInvalid &&
                  <div className='error'>
                   Имя обязательно
                  </div>
              }


              <Form.Control
                style={{width: '400px'}}
                id='userPhones'
                type='phoneNumber'
                placeholder='phones'
                value={phoneNumber.value}
                isInvalid={isPhoneNumberInvalid}
                onChange={(e) => phoneNumber.onChange(e)}
                onBlur={(e) => phoneNumber.onBlur(e)}
              />

              {
                isPhoneNumberInvalid &&
                  <div className='error'>
                    Телефон должен содержать код в формате
                    +375 (+ опционально) либо 80 и 9 цифр основного номера.
                    Обязательно к заполнению.
                  </div>
              }


            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-buttons'>
            <Modal.Footer className='justify-content-center border-0'>
              <Button
                onClick={()=>handleNewDishData(newDish)}
                style={{width: '160px'}}
                variant='outline-warning'
                // disabled={!isUserNameInvalid || !isPhoneNumberInvalid
                // }
              >
              Добавить блюдо
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </div>
    )
  }

export default ReserveATableForm

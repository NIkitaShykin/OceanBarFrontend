import React, {useState, ChangeEvent} from 'react'
// import {useSelector} from 'react-redux'
// import DatePicker from 'react-date-picker'
import {Form, Button, FloatingLabel,
  // Row, Col
} from 'react-bootstrap'
// import {AppStoreType} from '../../../../redux/reducers/rootReducer'
// import {ValidationType} from '../../../../common/types/userTypes'
// import {useValidation} from '../../../../utils/validation'
// import {UserType} from '../../../../common/types/userTypes'
import AddIngridients from './AddIngredients'
import FilesOperations from './FilesOperations'
// import {bookingOrderType} from '../../../../common/types/bookingTypes'
import './newDishForms.scss'


interface IReserveATableFormProps {
  handleNewDishData: (newDish: any) => void
  handleNewDishImgFile: (dishImageFile: any ) => void
}

const ReserveATableForm: React.FC<IReserveATableFormProps> =
  ({handleNewDishData, handleNewDishImgFile}) => {
    // const user =
    //  useSelector<AppStoreType, UserType>((state) => state.user.userProfile)

    const [dishName, setDishName] = useState<string>('')
    const [dishPrice, setDishPrice] = useState<number>()
    const [dishWeight, setDishWeight] = useState<number>()
    const [dishCalories, setDishCalories] = useState<number>()
    const [dishIngredients, setDishIngredients] =
     useState<Array<string>>(['', ''])
    const [dishCategory, setDishCategory] = useState<string>('')
    const [dishURL, setDishURL] = useState<string>('')
    // const [dishImgFile, setDishImgFile]=useState<any>({})

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

    const inputDishURL=(e: any)=>{
      setDishURL(e.target.value)
    }

    const inputDishFile=(dishImageFile: any)=>{
      // setDishImgFile(dishImageFile)
      handleNewDishImgFile(dishImageFile)
    }

    const dishCategoryArray: Array<string> = [
      'Плато', 'Салаты', 'Супы', 'Запеченные устрицы', 'Десерты'
    ]

    const newDish={
      name: dishName,
      price: dishPrice,
      weight: dishWeight,
      calories: dishCalories,
      imageURL: dishURL,
      // imageURL: 'https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%A3%D1%81%D1%82%D1%80%D0%B8%D1%86.jpg',
      ingredients: dishIngredients,
      dishCategory: dishCategory,
    }

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
              onChange={(e) => inputDishName(e)}
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
              // onBlur={(e) => userName.onBlur(e)}
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
              // onBlur={(e) => userName.onBlur(e)}
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
              // onBlur={(e) => userName.onBlur(e)}
            />
          </div>
        </div>

        <div className='form-sectionAdmin'>
          <div className='form-adminField'>
            <div className='section-header'>
              <span>Фотография блюда</span>
            </div>
            <div>
              <Form.Control
                style={{width: '250px'}}
                id='userName'
                type='text'
                placeholder={'по URL адрессу'}
                value={dishURL}
                onChange={(e) => inputDishURL(e)}
              />
            </div>
          </div>
        </div>

        { dishURL.length>1 ?<>
          <div className='form-sectionAdmin' style={{height: '210px'}}>
            <div className='form-adminField'>
              <div className='section-header'>
                <span> Миниатюра изображения</span>
              </div>
              <div
                style={{
                  height: '200px',
                  width: '250px',
                  backgroundImage: `url(${dishURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
            </div>
          </div>
        </>:null}

        <FilesOperations inputDishFile={inputDishFile}/>

        {/* <div className='form-sectionAdmin'>
          <div className='form-adminField'>
            <div className='section-header'>
              <span>Фотография блюда</span>
            </div>
            <div>
              <Form.Control
                style={{width: '250px'}}
                id='userName'
                type='text'
                placeholder={'по URL адрессу'}
                value={dishURL}
                // isInvalid={isUserNameInvalid}
                onChange={(e) => inputDishURL(e)}
              // onBlur={(e) => userName.onBlur(e)}
              />
              <Button
                onClick={()=>handleNewDishData(newDish)}
                style={{
                  width: '250px',
                  background: '#FFFAFA',
                  color: 'gray',
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px',
                  lineHeight: '30px',
                  justifyContent: 'space-around',
                  fontSize: '12px',
                  marginTop: '10px'
                }}
                variant='outline-warning'
              >
              загрузка изображене с диска <h4>&#8635;</h4>
              </Button>
            </div>
          </div>
        </div>
        <br/> */}

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
                defaultValue={dishCategory}
                style={{width: '250px'}}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setDishCategory(e.target.value)
                }}
              >
                <option value=''>Выбрать...</option>
                {dishCategoryArray.map((category, idx) => (
                  <option
                    value={category}
                    key={idx}
                  >
                    {category}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </div>
        </div>

        <br/>
        <div className='form-sectionAdmin' style={{height: '100%'}}>
          <div className='form-adminField'>
            <div className='section-header'>
              <div>
                <span>Добавьте ингридиенты</span>
                <br/>

                <Button
                  onClick={addIngredientsField}
                  style={{
                    width: '10px',
                    background: '#FFFAFA',
                    color: 'gray',
                    display: 'flex',
                    alignItems: 'center',
                    height: '20px',
                    justifyContent: 'space-around',
                  }}
                  variant='outline-warning'
                >
                  +
                </Button>
              </div>
            </div>

            <AddIngridients
              inputDishIngredients={inputDishIngredients}
              ingredients={dishIngredients}
            />
          </div>
        </div>
        <div className='form-sectionAdmin'>
          <div className='form-separation'></div>
        </div>

        {/* ---------------------контактные данные----------------------- */}
        {/*
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
        </div> */}
        {/* ---------------------контактные данные----------------------- */}

        {/* <div className='form-section'> */}
        {/* <div className='form-buttons'> */}
        {/* <Modal.Footer className='justify-content-center border-0'> */}
        <Button
          onClick={()=>handleNewDishData(newDish)}
          style={{width: '160px'}}
          variant='outline-warning'
          // disabled={!isUserNameInvalid || !isPhoneNumberInvalid
          // }
        >
              Добавить блюдо
        </Button>
        {/* </Modal.Footer> */}
        {/* </div> */}
        {/* </div> */}
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

export default ReserveATableForm

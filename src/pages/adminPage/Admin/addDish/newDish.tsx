import React, {useState, ChangeEvent, useEffect} from 'react'
import {Form, Button, FloatingLabel} from 'react-bootstrap'
import AddIngridients from './AddIngredients'
import FilesOperations from './FilesOperations'
import './newDishForms.scss'
import {DishType} from './../../../../common/types/dishesType'

interface newDishType {
  handleNewDishData: (newDish: DishType) => void
  setClearForm: (status: boolean) => void
  clearForm: boolean
}

const newDish: React.FC<newDishType> =
  ({handleNewDishData, clearForm, setClearForm}) => {
    const [dishName, setDishName] = useState<string>('')
    const [dishPrice, setDishPrice] = useState<number>()
    const [dishWeight, setDishWeight] = useState<number>()
    const [dishCalories, setDishCalories] = useState<number>()
    const [dishIngredients, setDishIngredients] =
     useState<Array<string>>(['', ''])
    const [dishCategory, setDishCategory] = useState<string>('')
    const [dishURL, setDishURL] = useState<string>('')
    const [fileImgIsLoaded, setFileImgIsLoaded]=useState<boolean>(false)
    const [dishDataErr, setDishDataErr]=useState<boolean>(false)

    const handleCLearFrom=()=>{
      setClearForm(false)
      setDishName('')
      setDishPrice(0)
      setDishWeight(0)
      setDishCalories(0)
      setDishIngredients(['', ''])
      setDishCategory('')
      setDishURL('')
      setFileImgIsLoaded(false)
      setDishDataErr(false)
    }

    useEffect(() => {
      if (clearForm) {
        handleCLearFrom()
      }
    }, [clearForm])

    const inputDishName=(e: any)=>{
      setDishName(e.target.value)
    }

    const inputDishPrice=(e: any)=>{
      e.preventDefault()
      setDishPrice(+e.target.value)
    }

    const inputDishWeight=(e: any)=>{
      e.preventDefault()
      setDishWeight(+e.target.value)
    }

    const inputDishCalories=(e: any)=>{
      e.preventDefault()
      setDishCalories(+e.target.value)
    }

    const inputDishIngredients=(e: any, id: number)=>{
      e.preventDefault()
      const copyIngredients=[...dishIngredients]
      copyIngredients[id]=e.target.value
      setDishIngredients(copyIngredients)
    }

    const addIngredientsField=(e: any)=>{
      e.preventDefault()
      const copyIngredients=[...dishIngredients]
      copyIngredients.push('')
      setDishIngredients(copyIngredients)
    }

    const deleteDishIngredients=(ingredientId: number)=>{
      const copyIngredients=[...dishIngredients]
      copyIngredients.splice(ingredientId, 1)
      setDishIngredients(copyIngredients)
    }

    const inputDishURL=(e: any)=>{
      e.preventDefault()
      setDishURL(e.target.value)
    }

    const inputDishImage=(ImgDeplUrl: any)=>{
      setDishURL(ImgDeplUrl)
      setFileImgIsLoaded(true)
    }

    const dishCategoryArray: Array<string> = [
      'Плато', 'Салаты', 'Супы', 'Запеченные устрицы', 'Десерты'
    ]
    const ingredientsStr: string=dishIngredients.join(';')

    const newDish: any ={
      name: dishName,
      price: dishPrice,
      weight: `${dishWeight} гр`,
      calories: `${dishCalories} ккал`,
      imageURL: dishURL,
      ingredients: `${ingredientsStr}`,
      dishCategory: dishCategory
    }

    const checkDataForSend=(newDish: DishType)=>{
      if (dishIngredients.length<2 || dishIngredients[0]=='' ||
      dishIngredients[1]=='' || dishName.length<1 || dishCategory.length<1 ||
      dishPrice==undefined || dishWeight==undefined ||
       dishCalories==undefined ) {
        setDishDataErr(true)
      } else {
        setDishDataErr(false)
        handleNewDishData(newDish)
      }
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
              onChange={(e) => inputDishPrice(e)}
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
              onChange={(e) => inputDishWeight(e)}
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
              onChange={(e) => inputDishCalories(e)}
            />
          </div>
        </div>

        <div className='form-sectionAdmin' style={{height: '100px'}}>
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
                placeholder={'по URL адресу'}
                value={dishURL}
                onChange={(e) => inputDishURL(e)}
              />
            </div>
          </div>
        </div>


        { dishURL.length>1 && !fileImgIsLoaded ?<>
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

        {dishCategory.length>1 && dishName.length>0 ?
          <FilesOperations
            inputDishImage={inputDishImage}
            dishCategory={dishCategory}
            dishName={dishName}
          />:null}

        <br/>
        <div className='form-sectionAdmin' style={{height: '100%'}}>
          <div className='form-adminField'>
            <div className='section-header'>
              <div>
                <span>Добавьте ингредиенты</span>
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
              deleteDishIngredients={deleteDishIngredients}
              ingredients={dishIngredients}
            />
          </div>
        </div>

        <div className='form-sectionAdmin' style={{height: '20px'}}>
          <div className='form-separation'></div>
        </div>

        {dishDataErr ?
          <div style={{
            color: 'red',
            fontSize: '16px',
            marginTop: '10px',
            marginBottom: '20px',
          }}>
                    некорректно заполнены данные
          </div>: null}

        <Button
          onClick={()=>checkDataForSend(newDish)}
          style={{width: '160px'}}
          variant='outline-warning'
        >
              Добавить блюдо
        </Button>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

export default newDish

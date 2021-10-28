import {useState} from 'react'
import foodData from '../../pages/menuPage/Menu/DB/foodData'
// import {useParams} from 'react-router-dom'
import './maybeIntresting.scss'
// import {useDispatch, useSelector} from 'react-redux'
// import DishIngredients from './DishIngridients'
// import ListItem from '../Assortment/ListItem'
import ListItem from '../../pages/menuPage/Menu/Assortment/ListItem'
// import {updateIngridientsAC} from "../../../../bll/cartReducer";
// import {AppStoreType} from "../../../../bll/store";
// // import spinerImg from "../../../../bll/spiner.gif"

function CompletedDish(props: any) {
  let [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex: any) => {
    if (selectedIndex=="previous" && index > 0 ) {setIndex(--index) }
    if (selectedIndex=="next" && index < (foodData[3].length - 4)) {setIndex(++index) }
  }
  
  let i=index
  let y=index+4
  const intrestingDishes: any = []

  for (i; i < y; i++) {
    intrestingDishes.push(foodData[3][i])
  }

  return (
    // <div className={'main-dish'}>
      <div className={'may-be-intresting'}>
        <h2 style={{paddingLeft:"15%"}}>Вас так же могут заинтересовать</h2>
        <div style={{
          display:"flex",
          alignItems: "center",
          // alignSelf: "center",
          justifyContent:"center"
           }}>
          <i className='arrow bi bi-arrow-left-circle'
           onClick={()=>{handleSelect("previous")}}
          ></i>
             <ListItem isIntresting={true} data={intrestingDishes} />
          <i className='arrow bi bi-arrow-right-circle'
           onClick={()=>{handleSelect("next")}}
          ></i>
        </div>
      </div>
    // </div>
  )
}

export default CompletedDish

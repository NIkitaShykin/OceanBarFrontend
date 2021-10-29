import { IngredientType } from '../../../redux/reducers/dishesReducer'
import { IngredientsType } from '../../../redux/reducers/dishesReducer'
import { DishType } from '../../../redux/reducers/dishesReducer'

type PropsType = {
  categoryDish: Array<DishType>
}

type ImgData = any

function SliderGallertItem(props: PropsType) {

  const imgWidth = "300px"
  const imgPadding = "10px"

  return (
    <div style={{
      display: "flex", flexWrap: "wrap",
      justifyContent: "center"
    }}>
     <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        // src={props.categoryDish[0].imageURL}
        src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
        alt="Second slide"
      />
      <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        // src={props.categoryDish[1].imageURL}
        src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
        alt="Second slide"
      />
      <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        // src={props.categoryDish[2].imageURL}
        src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
        alt="Second slide"
      />
    </div>
  );
}

export default SliderGallertItem

import {DishType} from '../../../common/types/dishesType'

type PropsType = {
  categoryDish: DishType[]
}

const SliderGallertItem = (props: PropsType) => {
  const imgWidth = '400px'
  const imgHeight = '300px'
  const imgMargin = '20px'

  return (
    <div
      key={props.categoryDish[0].id}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          margin: imgMargin,
          height: imgHeight,
          width: imgWidth,
          backgroundImage: `url(${props.categoryDish[0].imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div
        style={{
          margin: imgMargin,
          height: imgHeight,
          width: imgWidth,
          backgroundImage: `url(${props.categoryDish[1].imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div
        style={{
          margin: imgMargin,
          height: imgHeight,
          width: imgWidth,
          backgroundImage: `url(${props.categoryDish[2].imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  )
}

export default SliderGallertItem

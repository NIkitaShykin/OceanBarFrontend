/* eslint-disable react/prop-types */
interface DishViewProps {
  name: string,
  quantity: number,
  price: number,
  defaultIngredients: string,
  addedIngredients: string
}

const DishView: React.FC<DishViewProps> = ({
  name,
  quantity,
  price,
  defaultIngredients,
  addedIngredients
}) => {
  const getRemovedIngredients = (
    defaultIngredients: string,
    addedIngredients: string
  ) => {
    const defaultListArr = defaultIngredients.split(';')
    const addedListArr = addedIngredients.slice(1, -1).split(';')
    const removedListArr =
      defaultListArr.filter((el) => addedListArr.indexOf(el) === -1)

    return removedListArr.join(', ')
  }

  return (
    <div className='history-order-item'>
      <div className='history-header-name flex-column'>
        <span className='details-name'>
          {name}
        </span>
        {
          defaultIngredients.length !== addedIngredients.slice(1, -1).length &&
          <>
            <span className='details-notice'>
              без добавления ингредиента:
            </span>
            <span className='details-notice'>
              {getRemovedIngredients(defaultIngredients, addedIngredients)}
            </span>
          </>
        }
      </div>
      <div className='history-header-quant'>
        <span className='counter'>
          {quantity}
        </span>
      </div>
      <div className='history-header-price'>
        <span>
          {price} BYN
        </span>
      </div>
    </div>
  )
}

export default DishView

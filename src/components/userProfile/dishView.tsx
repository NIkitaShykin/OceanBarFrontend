/* eslint-disable react/prop-types */
interface DishViewProps {
  name: string,
  price: number
}

const DishView: React.FC<DishViewProps> = ({name, price}) => {
  return (
    <div className='history-order-item'>
      <div className='history-header-name'>
        <span className='details-name'>{name}</span>
      </div>
      <div className='history-header-price'>
        <span>{price} BYN</span>
      </div>
    </div>
  )
}

export default DishView

import {ChangeEvent, useState} from 'react'
import {FloatingLabel, Form} from 'react-bootstrap'

import {useAppSelector} from '../../redux/hooks'
import NewBankCardContainer from '../userProfile/myCards/NewBankCardContainer'


const ChoosePaymentCart = () => {
  const [isDirty, setDirty] = useState<boolean>(false)
  const [isAddingCard, setIsAddingCard] = useState<boolean>(false)

  const myCards = useAppSelector(
    (state) => state.bankCard.userCards
  )

  const changeIsAddingCard=()=>{
    setIsAddingCard(!isAddingCard)
  }
  // const [card, setPaymentCard] = useState<BankCardType>()

  return (
    <div className='choose-cards-select'>
      {isAddingCard ?
        <div className='shadow new-card'>
          <NewBankCardContainer changeStatus={changeIsAddingCard}/>
        </div> :
        <>
          <FloatingLabel
            className='choose-cards-select'
            controlId='floatingSelect'
            label='Выберите карту для оплаты'
          >
            <Form.Select
              aria-label='Select payment card'
              // defaultValue={card.name}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                // setPaymentCard(e.target.value)
                setDirty(!e.target.value)
              } }
              onBlur={() => setDirty(true)}
              isInvalid={isDirty}
            >
              <option value=''>Выбрать...</option>
              {myCards.map((card) => (
                <>
                  {/* <i className='far fa-credit-card'></i> */}
                  <option
                    value={card.number}
                    key={card.id}
                  >
                карта No {card.number}
                  </option>
                </>
              ))}
            </Form.Select>
          </FloatingLabel>
          <button
            className='add-btn btn btn-outline-secondary'
            onClick={() => changeIsAddingCard()}
          >
            + Добавить карту
          </button>
        </>
      }
    </div>
  )
}

export default ChoosePaymentCart

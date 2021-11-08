import React from 'react'
import {useState} from 'react'
import {ButtonGroup, ToggleButton} from 'react-bootstrap'

import {TRadioBtnParams} from '../../common/types/cartTypes'

interface ITogglerProps {
  radios: TRadioBtnParams[],
  size: 'sm' | 'lg',
  checkedBtn: string,
  handleRadioValueChange: (value: string) => void
}

const Toggler: React.FC<ITogglerProps> =
  ({radios, size, checkedBtn, handleRadioValueChange}) => {
    const [radioValue, setRadioValue] = useState<string>(checkedBtn)

    const showCheckedOrderType = (checkedValue: string) => {
      handleRadioValueChange(checkedValue)
    }

    return (
      <>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              size={size}
              key={radio.value}
              id={`radio-${idx}`}
              type='radio'
              variant='outline-warning'
              name='radio'
              value={radio.value}
              checked={checkedBtn !== '' && radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value)
                showCheckedOrderType(e.currentTarget.value)
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    )
  }

export default Toggler

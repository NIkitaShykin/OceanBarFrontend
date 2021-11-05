import React from 'react'
import {useState} from 'react'
import {ButtonGroup, ToggleButton} from 'react-bootstrap'

type radioBtnParams = {
  name: string,
  value: string
}[]

interface ITogglerProps {
  radios: radioBtnParams,
  size: 'sm' | 'lg',
  handleRadioValueChange: (value: string) => void
}

const Toggler: React.FunctionComponent<ITogglerProps> =
({radios, size, handleRadioValueChange}) => {
  const [radioValue, setRadioValue] = useState('')

  const showCheckedOrderType = (checkedValue: string) => {
    // debugger //
    handleRadioValueChange(checkedValue)
  }

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            size={size}
            key={idx}
            id={`radio-${idx}`}
            type='radio'
            variant='outline-warning'
            name='radio'
            value={radio.value}
            checked={radioValue === radio.value}
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

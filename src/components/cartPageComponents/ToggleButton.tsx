import React from 'react'
import {useState} from 'react'
import {ButtonGroup, ToggleButton} from 'react-bootstrap'

type radioBtnParams = {
  name: string,
  value: string
}[]

interface ITogglerProps {
  radios: radioBtnParams
}

const Toggler: React.FunctionComponent<ITogglerProps> = ({radios}) => {
  const [radioValue, setRadioValue] = useState('0')

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type='radio'
            variant='outline-warning'
            name='radio'
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  )
}

export default Toggler

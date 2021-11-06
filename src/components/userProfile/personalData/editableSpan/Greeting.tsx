import React, {ChangeEvent} from 'react'
import './Greeting.scss'


type GreetingPropsType = {
  valueName: string
  valueType: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
}


const Greeting: React.FC<GreetingPropsType> = (props)=> {
  return (
    <div>
      <div className='group'>
        <span className='editableValueTypeStyle'>{props.valueType}</span>
        <input
          value={props.valueName}
          onChange={props.setNameCallback}
          className='valid'
          required/>
        <span className='bar'></span>
         { props.valueName ? null : <label className='label'>Введите данные</label>}
      </div>
    </div>
  )
}

export default Greeting

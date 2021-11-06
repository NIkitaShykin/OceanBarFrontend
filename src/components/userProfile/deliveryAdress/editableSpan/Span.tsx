import React, {ChangeEvent} from 'react'
import './Span.scss'


type SpanPropsType = {
  valueName: string
  valueType: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
}


const Span: React.FC<SpanPropsType> = (props)=> {
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

export default Span

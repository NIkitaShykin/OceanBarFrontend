import React, {ChangeEvent} from 'react'
import './Span.scss'

type SpanPropsType = {
  valueName: string
  valueType: string
  setValueCallback: (e:ChangeEvent<HTMLInputElement>)=>void
}

const Span: React.FC<SpanPropsType> = (props)=> {
  return (
    <div className='group'>
      <div>
        <span className='editableValueTypeStyle'>{props.valueType}</span>
      </div>
      <div>
        <input
          value={props.valueName}
          onChange={props.setValueCallback}
          className='valid'
          required/>
        <span className='bar'></span>
        { props.valueName ?
          null :<label className='label'>уточните данные</label>}
      </div>
    </div>
  )
}

export default Span

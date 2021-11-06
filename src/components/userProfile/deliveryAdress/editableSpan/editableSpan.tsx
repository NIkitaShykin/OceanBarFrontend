import SpanContainer from './SpanContainer'
import {useState, ChangeEvent} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'


type EditableSpanType = {
  valueName: string
  valueType: string
  setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
 }

const EditableSpan = (props:EditableSpanType) => {


  return (
    <div>
      <br/>
      <SpanContainer
        setNameCallback={props.setNameCallback}
        valueName={props.valueName}
        valueType={props.valueType}

      />
    </div>
  )
}

export default EditableSpan


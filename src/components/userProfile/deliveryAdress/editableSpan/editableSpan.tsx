import SpanContainer from './SpanContainer'
import {useState, ChangeEvent} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'


type EditableSpanType = {
  valueName: string
  valueType: string
  setValueCallback: (e:ChangeEvent<HTMLInputElement>)=>void
 }

const EditableSpan = (props:EditableSpanType) => {
  return (
    <div>
      <SpanContainer
        setValueCallback={props.setValueCallback}
        valueName={props.valueName}
        valueType={props.valueType}
      />
    </div>
  )
}

export default EditableSpan


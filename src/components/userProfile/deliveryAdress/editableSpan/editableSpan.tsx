import SpanContainer from './SpanContainer'
import {ChangeEvent} from 'react'


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


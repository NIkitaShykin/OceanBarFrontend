import React, {ChangeEvent} from 'react'
import Span from './Span'

type GreetingContainerPropsType = {
  valueName: string
  valueType: string
  setValueCallback: (e:ChangeEvent<HTMLInputElement>)=>void
}


const SpanContainer: React.FC<GreetingContainerPropsType> =
 (props:GreetingContainerPropsType) =>{
   return (
     <div>
       <Span
         valueName={props.valueName}
         valueType={props.valueType}
         setValueCallback={props.setValueCallback}
       />

     </div>

   )
 }

export default SpanContainer

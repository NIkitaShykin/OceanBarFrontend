import React, {useState, ChangeEvent} from 'react'
import Span from './Span'

type GreetingContainerPropsType = {
  valueName: string
  valueType: string
  setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
}


const SpanContainer: React.FC<GreetingContainerPropsType> =
 (props:GreetingContainerPropsType) =>{
   return (
     <div>
       <Span
         valueName={props.valueName}
         valueType={props.valueType}
         setNameCallback={props.setNameCallback}
       />

     </div>

   )
 }

export default SpanContainer

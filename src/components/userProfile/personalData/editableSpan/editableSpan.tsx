import GreetingContainer from './GreetingContainer'
import {useState,ChangeEvent} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
// import {v1} from "uuid";

// export type UserType = {
//   _id: string
//   name: string
// }

type editableSpanType = {
  valueName: string
  valueType: string
  setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
 }

const editableSpan = (props:editableSpanType) => {

//  const setNameCallback=()=>{
//    alert("ggfhgf")
//  }

  // const [users, setUsers] = useState<any>()
  // const addUserCallback = (name: string) => {
  //   const newUser = {_id: 'v1()', name}
  //   setUsers([...users, newUser])
  // }


  return (
    <div>
      <br/>
      <GreetingContainer
        setNameCallback={props.setNameCallback}
        valueName={props.valueName}
        valueType={props.valueType}

      />
    </div>
  )
}

export default editableSpan


import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'

// export type UserType = {
//     _id: string
//     name: string
// }


type GreetingContainerPropsType = {
  valueName: string
  valueType: string
  setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> =
 (props:GreetingContainerPropsType
  //  users
  //  ,addUserCallback
  ) => {
  //  const [userName, setUserName] = useState<string>('')
  //  const [error, setError] = useState<boolean>(false)

//   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {      
//      console.log(e.target.value)
//      setUserName(e.target.value)
// }



  //  const addUser = () => {
  //    if (name.length === 0 || !name.trim()) {
  //    } else {
  //      alert(`Hello ${name} !`)
  //      addUserCallback(name)
  //      setName('')
  //    }
  //  }

  //  const totalUsers = users.length

   return (
    <div>
       <Greeting
         valueName={props.valueName}
         valueType={props.valueType}
         setNameCallback={props.setNameCallback}
      //  addUser={addUser}
      //  error={error}
      //  totalUsers={totalUsers}
     />

    </div>

   )
 }

export default GreetingContainer;

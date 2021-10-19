import React, {useState} from "react";
import ShiftingDish from './ShiftingDish';
import CompletedDish from './CompletedDish';


function Dish() {

  const [ischanged, setIsChanged] = useState<boolean>(false);

  const dishisChanged=()=>{
    setIsChanged(!ischanged)
      }

  return (
    <div>
         {ischanged ? 
         <ShiftingDish dishisChanged={dishisChanged}/>
         :<CompletedDish dishisChanged={dishisChanged}/>} 
    </div>
  )
}

export default Dish;

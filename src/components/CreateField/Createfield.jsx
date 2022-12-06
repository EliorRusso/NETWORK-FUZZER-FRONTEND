import React from 'react'
import Form from '../Form/Form';
import values from '../Header/Header'
const Createfield = () => {
    var inputArray = [];
    var size = values.NumberOfFields; //Maximum Array size
    console.log(values.NumberOfFields);
    for(var i=0; i<size; i++) {
      inputArray[i] = 'x';
    }
  return (
    <div>
        {inputArray.map((inputArray,index)=>{
          return <li key={index}>{<Form/>}</li>
        })}
    </div>
  )
}

export default Createfield

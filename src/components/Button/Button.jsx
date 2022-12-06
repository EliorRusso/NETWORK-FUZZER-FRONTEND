import React,{useState} from 'react'
import Form from '../Form/Form';
const App = () => {
  const[count,setCount]=useState(0);
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  const shouldAddEventHandler = true;

  const handleClick = event => {
    console.log('Button clicked');
    setCount(count+1);
  };
  return (
    <div>{count === 1 ? <Form /> : undefined} {count === 2 ? <Form /> : undefined}
      <button onClick={shouldAddEventHandler ? handleClick : <Form />}>click</button>
      {count}
      <button onClick={dec}>-</button>
    </div>
  )
}
export default App
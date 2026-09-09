
import { useState } from 'react'
import './App.css'

function App() {

const [counter, setCounter] = useState(0)

 const addvalue = () => {
  if (counter < 20){
  setCounter(counter + 1)
  }
  else{
    alert('Counter value cannot be more than 20')
  }
}
  const  removevalue = () =>{
    if (counter > 0){
  setCounter(counter - 1)
  }
  else{
    alert('Counter value cannot be less than 0')
  }
  }

  return (
    <>
     <h1>Counter value {counter}</h1>
     <button onClick={addvalue}>Add Value</button>
     <button onClick={removevalue}>Remove Value</button>
       
    </>
  )
}

export default App

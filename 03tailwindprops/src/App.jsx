import './App.css'
import Card from './Components/card'

function App() {
let Username = {
  name : "John Doe",
  age : 30,
  city : "New York"
}

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl'> Tailwind css </h1>
      <Card Username = "Zain" btntext="Buy Now"/>
      <Card Username = "hello" btntext="View Details"/>
    </>
  )
}

export default App

import { useState } from 'react'
import UserContextProvider from './Context/UserContexProvider'
import './App.css'
import Login from './Components/Login'
import profile from './Components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Context API</h1>
     <Login />
     <profile />
    </UserContextProvider>
  )
}

export default App

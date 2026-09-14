import './App.css'
import Card from './Components/Card'
import Themebutton from './Components/Themebutton'
import { ThemeProvider } from './Contexts/theme'
import { useState ,useEffect} from 'react'


function App() {

  const [themeMode, setThemeMode] = useState('light')
  const DarkTheme = () => {
    setThemeMode('dark')
  }
  const LightTheme = () => {
    setThemeMode('light')
  }

  useEffect(()=>{

document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(themeMode)

  },[themeMode])


  return (
    <ThemeProvider value = {{themeMode,DarkTheme,LightTheme}}>
      <h1 className= 'p-4 bg-pink-600 text-3xl'> Zain </h1>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                      <Themebutton/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App

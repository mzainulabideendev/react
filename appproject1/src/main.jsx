import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

// const  reactelement = React.createElement(
//   'a',{
//     href: 'https://www.google.com',target : '_blank'
//   },'Google'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)

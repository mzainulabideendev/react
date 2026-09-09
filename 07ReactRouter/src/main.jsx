import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider ,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact US/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/GIthub/Github.jsx'



// const Router = createBrowserRouter([
// {
//   path: "/",
//   element: <Layout />,
//   children: [{
//   path:"",
//   element: <Home />

//   },
// {
// path : "about",
// element: <About />
//   },
//   {
// path : "Contact",
// element: <Contact />
//   },



// ]
// }

const Router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
   <Route path="User/:userID" element={<User />} />

   <Route loaders={Github.githubInfoLoader}
    path="Github" element={<Github />} />

</Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router} />
  </StrictMode>,
)

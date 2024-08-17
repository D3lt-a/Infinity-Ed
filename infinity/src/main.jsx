import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Services from './pages/Services'
import Ourwork from './pages/Outwork'
import About from './pages/About'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='services' element={<Services/>} />
      <Route path='ourwork' element={<Ourwork/>} />
      <Route path='about' element={<About/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

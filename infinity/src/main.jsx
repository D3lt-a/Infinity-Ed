import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Outwork from './pages/Outwork'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='services' element={<Services/>} />
      <Route path='outwork' element={<Outwork/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

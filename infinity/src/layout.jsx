import { Outlet } from "react-router-dom"
import Header from "./componets/Header"
import Footer from "./componets/Footer"

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout

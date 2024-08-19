import { Outlet } from "react-router-dom"
import Header from "./componets/Common/Header"
import Footer from "./componets//Common/Footer"

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

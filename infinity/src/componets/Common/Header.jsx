import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <header className=" z-50 top-0">
      <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-28"
              alt="Logo"
            />
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex- mt-4 font-medium items-center lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to='/'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <div className="flex items-center lg:order-2">
                <Link
                  to="#"
                  className="text-yellow-400 hover:text-white border-2 px-10 border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm px py-2.5 text-center me-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
                >
                  Reach Us
                </Link>
              </div>
              <li>
                <NavLink to='/ourwork'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink to='/services'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

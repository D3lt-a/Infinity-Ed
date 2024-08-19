import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src={logo} className="h-36" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
              <ul className=" mr-28 text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 ml-10">Kk 678 st Kanombe Kicukiro</li>
                <li className='ml-10'>Open 9 AM to 17 PM</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 mr-28 text-sm font-semibold text-gray-900 uppercase dark:text-black">Company</h2>
                <ul className=" mr-28text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">About Us</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Our Work</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 mr-28 text-sm font-semibold text-gray-900 uppercase dark:text-black">Services</h2>
                <ul className=" mr-28 text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Web Development</a>
                  </li>
                  <li  className="mb-4">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">System Analysis</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Data Protection</a>
                  </li>
                  <li  className="mb-4">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Audit&Consultancy</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Networking</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Graphic Design</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Technoologies</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">React js</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Node js</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Lavarel</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UseAuth from '../../../Hooks/UseAuth'
import { FaBookmark } from 'react-icons/fa'
import { SlNotebook } from 'react-icons/sl'
import { GiMaterialsScience, GiNotebook } from 'react-icons/gi'
import { IoHome } from 'react-icons/io5'

const Sidebar = () => {
  const { logout } = UseAuth()
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold text-xl'>
            <Link to='/' className='flex gap-1 justify-center'>
            <img className="w-8 h-8" src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-3/512/Book_books_education_library_reading_open_book_study-512.png" alt="" />Learn More
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-3 rounded-xl focus:outline-none focus:bg-gray-500 '
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="flex gap-1 px-2">
    <img className="w-8 h-8" src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-3/512/Book_books_education_library_reading_open_book_study-512.png" alt="" />
  <div className="navbar-center text-2xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white bg-clip-text animate-gradient">
   <Link to='/'>Learn More</Link>
   
  </div>
  
  </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between '>
            

            
            <nav>
              {/* BookedSession */}
              <NavLink
                to='bookedSession'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 text-white transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <FaBookmark className='w-5 h-5' />

                <span className='mx-4 font-medium'>View Booked Session</span>
              </NavLink>

              {/* Create Note */}
              <NavLink
                to='createNote'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 text-white  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <SlNotebook className='w-5 h-5' />

                <span className='mx-4 font-medium'>Create Note</span>
              </NavLink>
              {/* Manage Notes */}
              <NavLink
                to='managePersonalNote'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 text-white  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <GiNotebook className='w-5 h-5' />

                <span className='mx-4 font-medium'>Personal Notes</span>
              </NavLink>
              {/* View All Materials */}
              <NavLink
                to='/dashboard'
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 text-white  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <GiMaterialsScience className='w-5 h-5' />

                <span className='mx-4 font-medium'>View All Materials</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* View All Materials */}
          <NavLink
                to='/'
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 text-white  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <IoHome className='w-5 h-5' />

                <span className='mx-4 font-medium'>Home</span>
              </NavLink>

         
          <button
            onClick={logout}
            className='flex w-full text-white items-center px-4 py-2 mt-5  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4  font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
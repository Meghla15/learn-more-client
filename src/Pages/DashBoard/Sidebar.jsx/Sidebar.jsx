import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import UseAuth from '../../../Hooks/UseAuth'
import { IoHome } from 'react-icons/io5'
import useRole from '../../../Hooks/useRole'
import DashboardItem from '../DashboardItem'
import { FcSettings } from 'react-icons/fc'
import TutorDashboard from '../AllRoleDashboard/TutorDashboard'
import StudentDashboard from '../AllRoleDashboard/StudentDashboard'
import AdminDashboard from '../AllRoleDashboard/AdminDashboard'

const Sidebar = () => {
  const { logout } = UseAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading] = useRole()
  console.log(role)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      
      <div className='bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold flex justify-between md:hidden '>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          <Link to='/' className='flex gap-1 justify-center'>
            <img className="w-8 h-8" src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-3/512/Book_books_education_library_reading_open_book_study-512.png" alt="" />Learn More
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
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
              {/* student */}
             {/* <StudentDashboard></StudentDashboard> */}

              {/* Tutor  */}
              {/* <TutorDashboard></TutorDashboard> */}
              
              {/* Admin */}
              {/* <AdminDashboard></AdminDashboard> */}
              
              {role === 'student' && <StudentDashboard />}
              {role === 'tutor' && <TutorDashboard />}
              {role === 'admin' && <AdminDashboard />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/*Home */}
          <DashboardItem label='Home' address='/' icon={IoHome}/>
       {/* profile */}
       <DashboardItem
            label='Profile'
            address='/dashboard/profile'
            icon={FcSettings}
          />

         
<Link to='/'><button
            onClick={logout}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button></Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
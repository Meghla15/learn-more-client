import { Helmet } from "react-helmet"
import UseAuth from "../../Hooks/UseAuth"
import useRole from "../../Hooks/useRole"


const Profile = () => {
  const { user, loading } = UseAuth() || {}
  const [role, isLoading] = useRole()

  console.log(user)
  if (isLoading || loading) return 'Loading...........'
  return (
    <div className='flex w-full justify-center items-center h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-full'>
        <img
          alt='profile'
          src='https://t4.ftcdn.net/jpg/01/98/64/27/360_F_198642713_mL73dQGUVWHTPsNn03Ii2qlxgLT0epoG.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
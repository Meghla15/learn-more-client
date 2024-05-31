import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import UseAuth from '../../Hooks/UseAuth'

const SignUp = () => {
    const navigate = useNavigate()
    const {
      createUser,
      signInWithGoogle,
      updateUserProfile,
      loading,
      setLoading,
    } = UseAuth()
  
    const handleSubmit = async e => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value
  
      try {
        setLoading(true)
  
        const result = await createUser(email, password)
        console.log(result)
  
        await updateUserProfile(name)
        navigate('/')
        toast.success('Signup Successful')
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    }
  
    // handle google signin
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle()
  
        navigate('/')
        toast.success('SignUp Successful')
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-violet-50'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-purple-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Learn More</p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
              />
            </div>
            <div>
            <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Role Selection :
                </label>
              </div>

              <select  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900' name="role">
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                <option value="admin">Admin</option>
                
              </select>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-gradient-to-r from-fuchsia-500  to-purple-500 w-full rounded-md py-3 text-white'
            > {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Sign Up with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2  border-rounded cursor-pointer'>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?
          <Link
            to='/login'
            className='hover:underline hover:bg-gradient-to-r from-fuchsia-500  to-purple-500 text-gray-600'
          >
            Login
          </Link>
          
        </p>
      </div>
    </div>
  )
}

export default SignUp
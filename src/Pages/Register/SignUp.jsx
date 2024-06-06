import { Link, useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const from = location?.state || "/";

  const {
    createUser,
    updateUserProfile,
    loading,
  } = UseAuth();

  

  const onSubmit = data =>{
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
        const userInfo = {
          name: data.name,
          email: data.email,
          role : 'student' ,
          status : 'Verified'
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
          if(res.data.insertedId){
            console.log('user added to the database')
            reset()
            Swal.fire({
              position: "top-end",
              icon: 'success',
              title: "User SignUp Successfully",
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from);
          }
        })
      })
      .catch(error => console.log(error))
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-50">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-purple-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient">
            Sign Up
          </h1>
          <p className="text-sm text-gray-400">Welcome to Learn More</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Role Selection :
                </label>
              </div>

              <select
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900"
                name="role"
              >
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500  to-purple-500 w-full rounded-md py-3 text-white"
            >
              
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Sign Up with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <SocialLogin></SocialLogin>
       
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="hover:underline hover:bg-gradient-to-r from-fuchsia-500  to-purple-500 text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

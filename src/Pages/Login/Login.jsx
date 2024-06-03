import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signInWithGoogle, signIn, loading, setLoading, resetPassword } =
    UseAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      // 1. sign in user
      await signIn(email, password);
      Swal.fire({
        title: "Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from);
      // toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) return toast.error("Please write your email first!");
    try {
      await resetPassword(email);
      toast.success("Request Success! Check your email for further process...");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
    console.log(email);
  };

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        title: "Google Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from);
      // toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-4 justify-evenly items-center bg-violet-50 ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-purple-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient">
            Login
          </h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onBlur={(e) => setEmail(e.target.value)}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500  to-purple-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button
            onClick={handleResetPassword}
            className="text-xs hover:underline hover:bg-fuchsia-700 text-gray-400"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center items-center space-x-2  m-3 p-2 border-gray-300 cursor-pointer">
          <button
            disabled={loading}
            onClick={handleGoogleSignIn}
            className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Do not have an account yet?
          <Link to="/sign-up" className="hover:underline text-fuchsia-700 ">
            Sign up
          </Link>
          .
        </p>
      </div>
      <div>
        <h1>something</h1>
      </div>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {signInWithGoogle,githubLogin,loading} = UseAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    // const from = location?.state || "/";
    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: 'success',
                    title: "SignUp with Google Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/');
            })
        })
    }
    return (
        <div>
             <div className="flex flex-col justify-center items-center space-x-2 border m-3 p-2  border-rounded cursor-pointer">
          <button
            disabled={loading}
            onClick={()=>handleSocialLogin(signInWithGoogle)}
            className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </button>
          <button
            disabled={loading}
            onClick={()=>handleSocialLogin(githubLogin)}
            className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FaGithub size={32} />

            <p>Continue with GitHub</p>
          </button>
        </div>
        </div>
    );
};

export default SocialLogin;
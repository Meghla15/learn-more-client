import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";



const Navbar = () => {
    const {user} = UseAuth()
    console.log(user)
    return (
        <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>


    </div>
  </div>
  <div className="navbar-center">
   <Link to='/'>daisyUI</Link>
  </div>
  <div className="navbar-end">
 
   
    {
          user?(<div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
              
               alt="" src= 'https://cdn-icons-png.freepik.com/256/709/709699.png?semt=ais_hybrid'
               referrerPolicy="no-referrer" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          {/* <li><p className="font-bold">{user.displayName ||"Name not founded"}</p></li> */}
            {/* <li><Link to='/myAddFood'>My Added Food Item</Link></li>
            <li><Link to='/addedFood'>Add a Food Item</Link></li> */}
            <li><Link to='/all-page'> All Page</Link></li>
            {/* <li><button onClick={logout}>Logout</button></li> */}
          </ul>
        </div>):(<Link to="/login">
            <button className=" p-4 text-center  rounded-2xl bg-orange-600 text-white font-semibold text-xm mx-auto">
              Login
            </button>
          </Link>)}
  </div>
</div>
        </div>
    );
};

export default Navbar;

import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const Navbar = () => {
   const {user, logout} = UseAuth()
   console.log(user)
     return (
        <div>
        <div className="navbar bg-violet-50 mb-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>


    </div>
  </div>
  <div className="flex gap-1">
    <img className="w-12 h-12" src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-3/512/Book_books_education_library_reading_open_book_study-512.png" alt="" />
  <div className="navbar-center text-3xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient">
   <Link to='/'>Learn More</Link>
  </div>
  </div>
  <div className="navbar-end">
 
   
    {
          user?(<div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
              
               alt="" src={user?.photoURL || 'https://cdn-icons-png.freepik.com/256/709/709699.png?semt=ais_hybrid'}
               referrerPolicy="no-referrer" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li><p className="font-bold">{user.displayName ||"Name not founded"}</p></li>
            <li><Link to='dashboard'>Dashboard</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>):
        (<ul className="flex lg:flex-row flex-col-reverse gap-1">
            <li><Link to='/login'><button className=" p-3 px-5 text-center  rounded-2xl bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm mx-auto">Login</button></Link></li>
            <li><Link to='/sign-up'><button className=" p-3 text-center  rounded-2xl bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm mx-auto">Sign Up</button></Link></li>
        </ul> 
          
          
       
        )}
  </div>
</div>
        </div>
    );
};

export default Navbar;
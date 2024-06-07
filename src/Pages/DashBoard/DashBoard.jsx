import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import { FaUsersLine } from 'react-icons/fa6';
import { SiSession } from 'react-icons/si';

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div>
            <Helmet><title>Learn More || Dashboard</title></Helmet>
            <div className="flex lg:flex-row flex-col ">
            {/* dashboard side bar */}
            <div className="lg:w-64 w-full min-h-screen bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold">
               <h1 className='pt-3 px-8 text-xl font-bold'>Learn More</h1>
               <h1 className='px-8 text-xm font-semibold'>We are always with you</h1>
                <ul className="menu p-4">
                    {
                        isAdmin?
                        <>
                        <li>
                        <NavLink to='/dashboard/ViewAllUsers'>
                            <FaUsersLine />
                            View All users</NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/viewAllStudySession'>
                        <SiSession />
                            View All Study Session</NavLink>
                        </li>
                        <li>
                        <NavLink to='/dashboard/AllMaterial'>
                        <GiMaterialsScience />
                            View All Materials</NavLink>
                        </li>
                        </>   : 
                        <>
                         <li>
                        <NavLink to='/dashboard/bookedSession'>
                            <FaBookmark></FaBookmark>
                            Booked Session</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/createNote">
                            <SlNotebook></SlNotebook>
                            Create Note</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/managePersonalNote">
                           <GiNotebook></GiNotebook>
                            Manage Personal Note </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/ViewAllMaterials">
                           <GiMaterialsScience></GiMaterialsScience>
                           View All Study Materials </NavLink>
                    </li>
                        </> 
                    }
                   
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            {/* <FaHome></FaHome> */}
                            Home</NavLink>
                    </li>
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>

</div>
)
};

export default DashBoard;
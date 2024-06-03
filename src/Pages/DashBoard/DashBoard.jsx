import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <Helmet><title>Learn More || Dashboard</title></Helmet>
            <div className="flex lg:flex-row flex-col ">
            {/* dashboard side bar */}
            <div className="lg:w-64 w-full min-h-screen bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold">
               <h1 className='pt-3 px-8 text-xl font-bold'>Learn More</h1>
               <h1 className='px-8 text-xm font-semibold'>We are always with you</h1>
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/bookedSession">
                            Booked Session</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/createNote">
                            {/* <FaCalendar></FaCalendar> */}
                            Create Note</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/managePersonalNote">
                           
                            Manage Personal Note </NavLink>
                    </li>
                   
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
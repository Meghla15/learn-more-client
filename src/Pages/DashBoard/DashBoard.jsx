import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx/Sidebar';


const DashBoard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Helmet><title>Learn More || Dashboard</title></Helmet>
            <div className="flex ">
            {/* dashboard side bar */}
           

            {/* Sidebar */}
            <Sidebar></Sidebar>
     
            {/* dashboard content */}
            <div className="flex-1 md:ml-64 p-8">
                <div className='p-4'>
                <Outlet></Outlet>
                </div>
            </div>
        </div>

</div>
)
};

export default DashBoard;
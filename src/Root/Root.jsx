import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Navbar/Footer/Footer';

const Root = () => {
    return (
        <div className='space-y-8'>
           <Navbar></Navbar>
           <Outlet></Outlet>
         <Footer></Footer>

        </div>
    );
};

export default Root;
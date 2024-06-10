import { GiMaterialsScience } from "react-icons/gi";
import DashboardItem from "../DashboardItem";
import { FaUsers } from "react-icons/fa";
import { SiSession } from "react-icons/si";


const AdminDashboard = () => {
    return (
        <>
        <DashboardItem
            label='View All User'
            address='ViewAllUsers'
            icon={FaUsers}
          />
              <DashboardItem
            label='View All Study Session'
            address='viewAllStudySession'
            icon={SiSession}
          />
              
           <DashboardItem label='View All Materials' address='/dashboard' icon={GiMaterialsScience}/>
        </>
    );
};

export default AdminDashboard;
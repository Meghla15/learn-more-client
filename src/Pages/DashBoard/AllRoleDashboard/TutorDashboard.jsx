
import DashboardItem from '../DashboardItem';
import { IoIosCreate } from 'react-icons/io';
import { RiGalleryView } from 'react-icons/ri';
import { FaCloudUploadAlt } from 'react-icons/fa';

const TutorDashboard = () => {
    return (
        <>
        <DashboardItem label='Create Study Session' address='CreateStudySession' icon={IoIosCreate}/>
              <DashboardItem label='View All Session' address='ViewAllSession' icon={RiGalleryView}/>
              <DashboardItem label='Upload Session' address='uploadMaterials' icon={FaCloudUploadAlt}/>
        </>
    );
};

export default TutorDashboard;
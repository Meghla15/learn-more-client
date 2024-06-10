import React from 'react';
import DashboardItem from '../DashboardItem';
import { FaBookmark } from 'react-icons/fa';
import { SlNotebook } from 'react-icons/sl';
import { GiMaterialsScience, GiNotebook } from 'react-icons/gi';

const StudentDashboard = () => {
    return (
           <>
       {/* BookedSession */}
       <DashboardItem label='View Booked Session' address='bookedSession' icon={FaBookmark}/>
              

              {/* Create Note */}
              <DashboardItem label='Create Note' address='createNote' icon={SlNotebook}/>
              
              {/* Manage Notes */}
              <DashboardItem label='Personal Notes' address='managePersonalNote' icon={GiNotebook}/>
      
              {/* View All Materials */}
              <DashboardItem label='View All Materials' address='/dashboard' icon={GiMaterialsScience}/>
    </>
    );
};

export default StudentDashboard;
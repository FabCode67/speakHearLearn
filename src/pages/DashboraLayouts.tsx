import React from 'react';
import Sidebar from '../components/dashbord/SideBar';
import MainContent from '../components/MainCotent';
import { Route, Routes } from 'react-router-dom';
import Help from '../components/dashbord/Help'; // Create Help component
import Users from '../components/dashbord/Users'; // Create Users component
import DashNavBar from '../components/dashbord/DashNavBar';

const DashboardLayout = () => {
  return (
    <div className="flex  flex-col  bg-blue-1000 px-3">
      <DashNavBar />
      <div className='flex z-10 flex-row mt-16'>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<MainContent />} />
        <Route path="/users" element={<Users />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;

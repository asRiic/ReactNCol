import {useState} from 'react';
import '../assets/css/Dashboard.css';

import _Navbar from '../components/Dsh_navbar';
import _Sidebar from '../components/Dsh_sidebar';
import _Main from  '../components/Dsh_main';

function Dashboard() {
  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
     setSidebarOpen(false);
  };
  
  return (
    <div className="containner">
        <_Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <_Main />
        <_Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default Dashboard;
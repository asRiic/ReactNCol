import {useState} from 'react';
import '../assets/css/Dashboard.css';

import Dsh_Navbar from '../components/Dsh_navbar';
import Dsh_Sidebar from '../components/Dsh_sidebar';
import Dsh_Main from  '../components/main/Dsh_main';

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
        <Dsh_Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Dsh_Main />
        <Dsh_Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default Dashboard;
import {useState} from 'react';
import '../assets/css/Dsh_Interview.css';
import Dsh_Navbar from '../components/Dsh_navbar';
import Dsh_Sidebar from '../components/Dsh_sidebar';
import Dsh_Main_Interview from '../components/main/Dsh_main_interview';


function Dsh_Interview() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="cont_intview">
            <Dsh_Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Dsh_Main_Interview />
            <Dsh_Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    );
}

export default Dsh_Interview;
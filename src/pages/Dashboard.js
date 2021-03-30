import React from 'react';
import '../assets/css/Dashboard.css';

import Navbar from '../components/Navbar';
import MenuSider from '../components/MenuSider';

function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col navBar">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-2 sideBar">
          <MenuSider />
        </div>
        <div className="col-10 ctrlPage">
          <h1>Hola prra</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
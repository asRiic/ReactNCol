import {useState} from 'react';
import '../assets/css/Index.css';
import '../assets/css/normalize.css';


/* Componentes */
import Navbar from '../components/Navbar';
import Main from '../components/main/Main_index';

function Index() {
  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
     setSidebarOpen(false);
  };

  return (
    <div className="contenedor">
      <header className="header">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      </header>
      <aside className="sidebar-left">
        <h2>Publicidad</h2>
      </aside>
      <main className="main">
        <Main />
      </main>
      <aside className="sidebar-right">
        <h4>Publicidad</h4>
      </aside >
      <footer className="footer">
        <h5>Contactanos...</h5>
      </footer>
    </div>
  );
}

export default Index;